import UserModel from "../model/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import otpGenerator from "otp-generator";

// ? NOTES

/**  POST: http://localhost:7777/api/register
 * @param :{
        "username" : "example123",
        "password" : "examplepassword123",
        "email" : "example@gmail.com", 
        "favoriteBookGenre" : "fantasy", 
* }  
*/
// CHECKS CREDENTIALS, CREATES, & REGISTERS NEW USER.
export async function register(req, res) {
  try {
    // Destructures the below values from api request body (frontend)
    const { username, password, email, favoriteBookGenre } = req.body;

    // If for whatever reason form password is not there or blank send error.
    if (!password) {
      res.status(400).send(error);
    }

    // Check to see if username exists already in DB
    const usernameExists = new Promise((resolve, reject) => {
      // Checks DB for username
      UserModel.findOne({ username })
        // If username is found
        .then((err, user) => {
          // If an error occurs send error
          if (err) reject(new Error(err));
          // If MongoDB finds true match, reject registration
          if (user) reject({ error: "Please use unique username!" });
          //If Mongod returns false when finding matching username, resolve and exit
          resolve();
        })
        // If MongoDB throws any error at the beggining of the findOne method call
        .catch((err) =>
          reject({
            error: "Username already exists! Please create unique username!",
          })
        );
    });

    // Check to see if email exists already in DB
    const emailExists = new Promise((resolve, reject) => {
      UserModel.findOne({ email })
        // If email if found
        .then((err, userEmail) => {
          // If an any error  occurs send error
          if (err) reject(new Error(err));
          // If MongoDB finds true email match, reject registration
          if (userEmail) reject({ error: "Please use unique email!" });
          // If Mongod returns false when finding matching email, resolve and exit
          resolve();
        })
        // If MongoDB throws any error at the beggining of the findOne method call
        .catch((err) =>
          reject({
            error: "Email already exists! Please use a unique email!",
          })
        );
    });

    // Runs both checks for username & email matches and returns a promise - resolve or reject
    Promise.all([usernameExists, emailExists])
      // If both check email + username functions pass move on, if one fails catch
      .then(() => {
        // If a password is given
        if (password) {
          // Hash password
          bcrypt.hash(password, 10, (err, hash) => {
            // Handle bcypt error
            if (err) {
              // Handle error
              return new Error(err);
            }

            // Creates new user from Mongoose model
            const user = new UserModel({
              username: username,
              password: hash,
              email: email,
              favoriteBookGenre: favoriteBookGenre || "Not Sure",
            });
            //   Register/save newly created user to DB. Then yield response.
            user
              .save()
              // Saving user to DB went through
              .then((result) => {
                res.status(201).send({ msg: "User registered sucessfully!" });
              })
              // Saving user to DB did not go through
              .catch((error) => {
                res.status(500).send({ msg: error });
              });
          });
        }
      })
      // Unable to hash password. Either email or username function in promise failed.
      .catch((error) => {
        return res.status(500).send({
          error: "Unable to hash + store user account! ",
        });
      });
    // User/Register user failed before email / username check.
  } catch (error) {
    return res.status(500).send({
      error:
        "Something went wrong before trying to verify username + password!",
    });
  }
}

// MIDDLEWARE USED FOR LOGIN, UPDATING, ACCOUNT VERIFICATION USING USERNAME
export async function verifyUser(req, res, next) {
  try {
    // Grabs username either from query (ex. https:localhost:7777/api/name=data
    // in this case it will grab token code
    // or query body (ex. POST request JSON) the frontend sends to backend
    const { username } = (req.method = "GET" ? req.query : req.body);
    // Checks to see is user exists in DB
    let userExists = await UserModel.findOne({ username })
      // if username is found in DB
      .then((user, err) => {
        // If an error occurs, throw status and send error
        if (err) {
          res.status(501).send({
            error: `Cannnot find user data!`,
          });
        }

        // If username is found, move onto the next process in queue.
        // In this case this middle is used BEFORE an api call to verify user.
        next();
      })

      // Error finding user before pinging DB to find match username
      .catch((err) =>
        res.status(501).send({
          error: `Cannnot find user! ${JSON.stringify(
            req.query
          )} + ${JSON.stringify(req.body)} + cuz ${userExists}`,
        })
      );
    // Error trying to ping DB to verify username
  } catch (error) {
    return res.status(404).send({ error: "Authentication error! " });
  }
}

// **********************************************
// Creates account login
/**  POST: http://localhost:7777/api/login
   * @param :{
          "username" : "example123",
          "password" : "examplepassword123",  
  * }  
  */
// API CALL TO ALLOW USERS TO LOG IN
export async function login(req, res) {
  // Grabs username, password from frontend response
  const { username, password } = req.body;

  try {
    // Create Promise to see check login credentials. Before this
    // API request is called, there is a middleware route function that is called
    // to verify username first ("verifyUsername" above). Once that resolves, then it
    // hits this "login" function
    new Promise((resolve, reject) => {
      // Ping DB to find username
      UserModel.findOne({ username })
        .then((user) => {
          // Take username's password and match it with the account in DB
          bcrypt.compare(password, user.password, (err, result) => {
            // If password from frontend is empty reject
            // if (!password) {
            //   reject(
            //     res.status(400).send({ error: "Password does not exist!!" })
            //   );
            // }
            // If username's password matches DB
            if (result === true) {
              // Create new JWT session Token. This is done to maintain
              // verify user's account, allows access to private user data
              // and stays signed in.
              const token = jwt.sign(
                {
                  // Takes JWT session token using user's username
                  data: {
                    userID: user._id,
                    username: user.username,
                  },
                },
                process.env.JWT_TOKEN_SECRET,
                { expiresIn: "12h" }
              );
              // If login process checks pass, user is logged in.
              // Send status code and return credentials + session token
              resolve(
                res.status(200).send({
                  msg: `Login Successful!!`,
                  username: user.username,
                  token,
                })
              );
            } else {
              // If password from frontend and backend do not match, reject
              // reject(
              res.status(400).send({
                error: `Password does not match!`,
              });
              // );
            }
          });
        })
        // If username from verify user middleware that is called
        // before this function fails, reject!
        .catch((error) => {
          return res
            .status(404)
            .send({ error: `Username not found! : ${error}` });
        });
    });
    // Error trying to call this function, or error grabbing
    // credentials from frontend, send error.
  } catch (error) {
    return res
      .status(500)
      .send({ msg: `Error at the end of the chain! ${error} ` });
  }
}

// **********************************************
/**  GET: http://localhost:7777/api/user/exampleuser123*/
// GETS USER FROM DB AND RETURNS IT TO THE FRONTEND
export async function getUser(req, res) {
  try {
    // Grabs username submitted from frontend URL "ex. https:/localhost:7777/api/:user"
    const { username } = req.params;
    // Check to see if user's username exists
    UserModel.findOne({ username })
      .then((user, err) => {
        // If err, user cannot be found
        if (err) {
          res.status(501).send({
            error: `Cannnot find user account! -> ${err}`,
          });
        }

        // todo: FIX THIS. FOR WHATEVER REASON OBJECT.ASSIGN NOT EXCLUDING PASSWORD
        // Username exists, removes password + mongoDB unnecessary object info
        // const { password, ...rest } = Object.assign({}, user.toJSON());
        // const { password, ...rest } =  user.toJSON();
        /*

"_id":"66ec3b7bf72c7d0bcb0a518a","username":"mrod22","password":"$2b$10$fO.4Qvt0/MzpObyp2kvTGu50IBM66KhZkWBqEcb28p5FBAlx/f/si","email":"markrodriguez003@mail.com","favoriteBookGenre":"Horror","booksRead":0,"booksWantToRead":0,"amountOfBooksSuggested":0,"amountOfRandomBooks":0,"booksSuggestionEmailed":0,"__v":0
*/

        // ? WORK AROUND
        const {
          _id,
          username,
          email,
          favoriteBookGenre,
          booksRead,
          booksWantToRead,
          amountOfBooksSuggested,
          amountOfRandomBooks,
          booksSuggestionEmailed,
        } = user;

        // const userData = {
        //   _id: _id,
        //   username: username,
        //   email: email,
        //   favoriteBookGenre: favoriteBookGenre,
        //   booksRead: booksRead,
        //   booksWantToRead: booksWantToRead,
        //   amountOfBooksSuggested: amountOfBooksSuggested,
        //   amountOfRandomBooks: amountOfRandomBooks,
        //   booksSuggestionEmailed: booksSuggestionEmailed,
        // };

        const userData = {
          _id: _id,
          username: username,
          email: email,
          favoriteBookGenre: favoriteBookGenre,
          booksRead: 15,
          booksWantToRead: 22,
          amountOfBooksSuggested: 10,
          amountOfRandomBooks: 11,
          booksSuggestionEmailed: 3,
        };

        // Send's user data to frontend
        res.status(201).send(userData);
      })
      // Cannot find username
      .catch((err) =>
        res.status(501).send({
          error: `Cannnot find user data!`,
        })
      );
    // Error trying to conduct username search
  } catch (error) {
    return res.status(404).send({ error: "Get User error! " });
  }
}

// **********************************************
/**  PUT: http://localhost:7777/api/exampleuser123
 * @param: {
 * "id": "<userid>"
 * }
 *
 * body:{
 * favoriteBookGenre:'',
 * }
 *
 */

// UPDATES USER'S INFORMATION
// BEFORE THIS FUNCTION IS CALLED, A MIDDLEWARE FUNCTION IS CALLED
// TO VERIFY USER IS LOGGED IN WITH VALID ACCOUNT SESSION TOKEN
export async function updateUser(req, res) {
  try {
    // const id = req.query.id;
    // Grabs user's ID
    const { userID } = req.user;
    // If user ID is valued
    if (userID) {
      // Grabs body text (user's updated data fields) from frontend
      const body = req.body;
      //Searches user's profile information using ID
      UserModel.updateOne({ _id: userID }, body)
        .then((user, err) => {
          //  Throws error if user does not exist in DB or error occurs with DB
          if (err) {
            res.status(401).send({
              error: `Cannnot find / update user account! -> ${err}`,
            });
          }
          // If no error occurs, the above Mongoose method updates
          // found user's account and updates data using body text
          // sent from frontend
          return res.status(201).send({ msg: "Updated user account profile!" });
        })
        //  Throws error if user does not exist in DB
        .catch((err) =>
          res.status(501).send({
            error: `Cannnot find user data!`,
          })
        );
    }
    // Some error occured when trying to update user's account
  } catch (error) {
    return res.status(401).send({ error: "Cannot update user!" });
  }
}

// **********************************************
/**  GET: http://localhost:7777/api/generateOTP */

// GENERATES NEW OPT CODE TO BE SENT TO USER WHEN PASSWORD RESET OPTION
// IS INTIATED. BEFORE THIS FUNCTION IS CALLED, A VERIFY USER MIDDLEWARE
// FUNCTION IS CALLED. ONCE THAT RESOLVES IT MOVES ON TO THIS FUNCTION.
export async function generateOTP(req, res) {
  // Once user is verified from middleware function before
  // we generate OTP code
  // The app.locals object has properties that are local variables within the application.
  // These local variables are located in our Auth file. There are two local variables.
  // OTP and ResetSession.
  // In this case we have a local variable called OTP and save generated
  // OTP code there.
  req.app.locals.OTP = await otpGenerator.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });
  // Send pass status and OTP code to frontend
  res.status(201).send({ code: req.app.locals.OTP });
}

// **********************************************
/**  GET: http://localhost:7777/api/verifyOTP */

// THIS FUNCTION IS USED TO VERIFY OTP CODE THAT IS GENERATED AND SENT
// TO USER FROM THE BACKEND. BEFORE THIS FUNCTION IS CALLED, verifyUser API ROUTE
// IS CALLED TO VERIFY USER.
export async function verifyOTP(req, res) {
  // Grabs code from front end within req.query
  const { code } = req.query;

  // Grabs the OTP from locals and turns string into number and tries to match it.
  // With locally previously generated and saved OTP code
  if (parseInt(req.app.locals.OTP) === parseInt(code)) {
    // Resets locals OTP and cleans out previously generated code
    req.app.locals.OTP = null;
    // Resets the current session the user is logged into at the moment.
    // logs them out
    req.app.locals.resetSession = true;

    // returns good status
    return res.status(201).send({ msg: "Verify OTP reset sucessfully" });
  }

  // If OTP code sent from frontend does not match the locals OTP code then reject
  return res.status(400).send({ error: "Invalid OTP!" });
}

// **********************************************
// successfully redirects user when OTP is valid
/**  GET: http://localhost:7777/api/createResetSession */
// USED TO RESET USER'S LOGIN SESSION. THIS IS USED SO IF THE USER RESETS PASSWORD
// OR LOGS OUT THEN THIS IS GENERATED TO TRACK SESSION.
export async function createResetSession(req, res) {
  // if local variable resetSession is true, meaning the session is ongoing
  // then this resets it to a fresh session.
  if (req.app.locals.resetSession) {
    // allows access to this route only once
    // By making it true above then immediately false below
    req.app.locals.resetSession = false;

    return res.status(201).send({ msg: "Access granted!" });
  }

  return res.status(440).send({ msg: "Session expired!!" });
}

// **********************************************
// successfully redirects user when OTP is valid
/**  PUT: http://localhost:7777/api/resetPassword */
// RESETS USERS PASSWORD. BEFORE THIS FUNCTIONS IS CALLED, ANOTHER FUNCTION CALLED
// verifyUser IS CALLED TO VERIFY USER'S USERNAME IS IN DB. NO NEED TO RESET PASSWORD
// OF AN ACCOUNT THAT DOES NOT EXIST.
export async function resetPassword(req, res) {
  // Checks to see if the user's login session is valid or not
  // false means the session is ongoing and NOT resetted.
  try {
    // Checks to see if session has been reset. If it has
    // that means user is still logged in, which should not happen
    if (!req.app.locals.resetSession) {
      return res.status(404).send({ error: "Session expired!" });
    }

    // Grabs username and new password
    const { username, password } = req.body;

    try {
      // Tries to find username in DB
      UserModel.findOne({ username })
        // If user exists in DB
        .then((user) =>
          // hash new password user sent from the frontend
          bcrypt.hash(password, 10, (err, hash) => {
            // If for whatever reason bcrypt runs into an error
            // call error.
            if (err) {
              return { err };
            }

            // After submitted new password is hashed, we save it to DB
            UserModel.updateOne({ username: user.username }, { password: hash })
              .then(
                // Makes the session false so that it is not reset
                // ! CHECK THIS?
                (req.app.locals.resetSession = false),
                res.status(201).send({
                  msg: `Password updated! -> ${req.app.locals.resetSession}`,
                })
              )
              // If Mongoose runs into an error updating user's password
              // throw error.
              .catch(
                (error) => {
                  console.error("Error updating password! ", error);
                }
                // res.status(500).send({ msg: "Password cannot be updated!" })
              );
          })
        )
        // If username is not found in DB
        .catch((error) => {
          return res.status(404).send({ error: "Username not found" });
        });
      // If an error that occurs when trying to find username in DB
    } catch (error) {
      // return res
      // .status(500)
      // .send({ error: "Username and/or password is incorrect!" });
      return { error };
    }
    // If an error that occurs when calling this API route.
  } catch (error) {
    return res.status(401).send({ error });
  }
}

export async function forgotPasswordVerify(req, res) {
  const { username, email } = req.body;
  try {
    // CHECKS TO SEE IF USERNAME EXISTS IN DB
    const usernameExists = new Promise((resolve, reject) => {
      // Checks DB for username
      UserModel.findOne({ username: username })
        // If username is found
        .then((user) => {
          if (user) {
            resolve();
          } else {
            reject();
          }
        })
        // If MongoDB throws any error at the beggining of the findOne method call
        .catch((err) =>
          reject({
            error: "Username already exists! Please create unique username!",
          })
        );
    });

    // CHECKS TO SEE IF EMAIL EXISTS IN DB
    // const emailExists = new Promise((resolve, reject) => {
    //   resolve();
    // });

    //! afasfasf
    const emailExists = new Promise((resolve, reject) => {
      // Checks DB for username
      UserModel.findOne({ email: email })
        // If username is found
        .then((userEmail) => {
          if (userEmail) {
            resolve();
          } else {
            reject();
          }
        })
        // If MongoDB throws any error at the beggining of the findOne method call
        .catch((err) =>
          reject({
            error: `Email is not registered! ${err}  `,
          })
        );
    });

    const results = await Promise.all([usernameExists, emailExists])
      .then((results) => {
        return res.status(201).send({ msg: `Results:::: ${results}` });
      })
      .catch((error) => {
        return res
          .status(500)
          .send({ msg: `ERROR Results:::: ${JSON.stringify(error)}` });
      });
    // try {
    //   // return res.status(201).send({ msg: `Results:::: ${results}` });
    //   return res.status(201).send({ msg: `Results:::: ${results}` });
    // } catch (error) {
    //   return res
    //     .status(500)
    //     .send({ msg: `ERROR Results:::: ${JSON.stringify(error)}` });
    // }
  } catch {
    return res.status(500).send({
      msg: "Something went wrong before trying to verify username for password reset!!",
    });
  }
}
