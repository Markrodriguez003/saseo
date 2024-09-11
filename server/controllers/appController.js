import UserModel from "../model/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import otpGenerator from "otp-generator";

// ? NOTES
// ? https://www.geeksforgeeks.org/mongoose-findone-function/#

/**  POST: http://localhost:7777/api/register
 * @param :{
        "username" : "example123",
        "password" : "examplepassword123",
        "email" : "example@gmail.com", 
        "favoriteBookGenre" : "fantasy", 
* }  
*/
export async function register(req, res) {
  try {
    const { username, password, email, favoriteBookGenre } = req.body;
    // Check if user exists

    // If for whatever reason form password is not there or blank send error.
    if (!password) {
      res.status(400).send(error);
    }
    const usernameExists = new Promise((resolve, reject) => {
      UserModel.findOne({ username })
        .then((err, user) => {
          if (err) reject(new Error(err));
          if (user) reject({ error: "Please use unique username!" });
          resolve();
        })
        .catch(
          (err) =>
            reject({
              error: "Username already exists! Please create unique username!",
            })
          //   console.log("ERROR!" + err)
        );
    });

    const emailExists = new Promise((resolve, reject) => {
      UserModel.findOne({ email })
        .then((err, userEmail) => {
          if (err) reject(new Error(err));
          if (userEmail) reject({ error: "Please use unique email!" });
          resolve();
        })
        .catch(
          (err) =>
            reject({
              error: "Username already exists! Please create unique username!",
            })
          //   console.log("ERROR!" + err)
        );
    });

    Promise.all([usernameExists, emailExists])
      .then(() => {
        if (password) {
          bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
              // Handle error
              return;
            }
            const user = new UserModel({
              username: username,
              password: hash,
              email: email,
              favoriteBookGenre: favoriteBookGenre || "Not Sure",
            });
            //   return save result as response
            user
              .save()
              .then((result) => {
                res.status(201).send({ msg: "User registered sucessfully!" });
              })
              .catch((error) => {
                res.status(500).send(error);
              });
          });
        }
      })
      .catch((error) => {
        return res.status(500).send({
          error: "Unable to hash + store user account! ",
        });
      });
  } catch (error) {
    return res.status(500).send({
      error: "wrong",
    });
  }
}

// MIDDLEWARE USED FOR LOGIN, UPDATING, ACCOUNT VERIFICATION
export async function verifyUser(req, res, next) {
  try {
    const { username } = (req.method = "GET" ? req.query : req.body);
    // CHECK THE USER'S EXISTENCE
    let userExists = await UserModel.findOne({ username })
      .then((user, err) => {
        if (err) {
          res.status(501).send({
            error: `Cannnot find user data!`,
          });
        }
        next();
      })
      .catch((err) =>
        res.status(501).send({
          error: `Cannnot find user! ${JSON.stringify(
            req.query
          )} + ${JSON.stringify(req.body)} + cuz ${userExists}`,
        })
      );
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
export async function login(req, res) {
  const { username, password } = req.body;

  try {
    new Promise((resolve, reject) => {
      UserModel.findOne({ username })
        .then((user) => {
          bcrypt.compare(password, user.password, (err, result) => {
            if (!password) {
              reject(
                res.status(400).send({ error: "Password does not exist!!" })
              );
            }
            if (result === true) {
              // JWT Token creation
              const token = jwt.sign(
                {
                  data: {
                    userID: user._id,
                    username: user.username,
                  },
                },
                process.env.JWT_TOKEN_SECRET,
                { expiresIn: "12h" }
              );

              resolve(
                res.status(200).send({
                  msg: `Login Successful!!`,
                  username: user.username,
                  token,
                })
              );
            } else {
              reject(
                res.status(400).send({
                  error:
                    `Password does not match!` + password + " " + user.password,
                })
              );
            }
          });
        })
        .catch((error) => {
          return res.status(404).send({ error: "Username not found!" });
        });
    });
  } catch (error) {
    return res.status(500).send({ error });
  }
}

// **********************************************
/**  GET: http://localhost:7777/api/user/exampleuser123*/
export async function getUser(req, res) {
  try {
    const { username } = req.params;
    // CHECK THE USER'S EXISTENCE
    UserModel.findOne({ username })
      .then((user, err) => {
        if (err) {
          res.status(501).send({
            error: `Cannnot find user account! -> ${err}`,
          });
        }
        // Removes password + mongoDB unnecessary object info
        const { password, ...rest } = Object.assign({}, user.toJSON());
        res.status(201).send(`User?: ${user}`);
      })
      .catch((err) =>
        res.status(501).send({
          error: `Cannnot find user data!`,
        })
      );
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

export async function updateUser(req, res) {
  try {
    // const id = req.query.id;
    const { userID } = req.user;

    if (userID) {
      const body = req.body;

      UserModel.updateOne({ _id: userID }, body)
        .then((user, err) => {
          if (err) {
            res.status(401).send({
              error: `Cannnot find / update user account! -> ${err}`,
            });
          }
          return res.status(201).send({ msg: "Updated user account profile!" });
        })
        .catch((err) =>
          res.status(501).send({
            error: `Cannnot find user data!`,
          })
        );
    }
  } catch (error) {
    return res.status(401).send({ error: "Cannot update user!" });
  }
}

// **********************************************
/**  GET: http://localhost:7777/api/generateOTP */

export async function generateOTP(req, res) {
  req.app.locals.OTP = await otpGenerator.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });
  res.status(201).send({ code: req.app.locals.OTP });
}

// **********************************************
/**  GET: http://localhost:7777/api/verifyOTP */

export async function verifyOTP(req, res) {
  const { code } = req.query;
  if (parseInt(req.app.locals.OTP) === parseInt(code)) {
    req.app.locals.OTP = null;
    req.app.locals.resetSession = true;
    return res.status(201).send({ msg: "Verify OTP reset sucessfully" });
  }

  return res.status(400).send({ error: "Invalid OTP!" });
}

// **********************************************
// successfully redirects user when OTP is valid
/**  GET: http://localhost:7777/api/createResetSession */

export async function createResetSession(req, res) {
  if (req.app.locals.resetSession) {
    // allows access  to this route only once
    req.app.locals.resetSession = false;
    return res.status(201).send({ msg: "Access granted!" });
  }
  return res.status(440).send({ msg: "Session expired!!" });
}

// **********************************************
// successfully redirects user when OTP is valid
/**  PUT: http://localhost:7777/api/resetPassword */

export async function resetPassword(req, res) {
  res.json("resetPassword route");
}
