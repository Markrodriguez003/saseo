import UserModel from "../model/User.model.js";
import bcrypt from "bcrypt";

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
    const usernameExists = new Promise((resolve, reject) => {
      UserModel.findOne({ username })
        .then((err, user) => {
          if (err) reject(new Error(err));
          if (user) reject({ error: "Please use unique username!" });
          resolve();
        })
        .catch((err) =>
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
        .catch((err) =>
            reject({
              error: "Username already exists! Please create unique username!",
            })
        //   console.log("ERROR!" + err)
        );
    });

    // !! TESTING!
    // ************ THIS WORKS!
    // if (password) {
    //   bcrypt.hash(password, 10, (err, hash) => {
    //     if (err) {
    //       // Handle error
    //       return;
    //     }
    //     const user = new UserModel({
    //       username: username,
    //       password: hash,
    //       email: email,
    //       favoriteBookGenre: favoriteBookGenre || "",
    //     });
    //     //   return save result as response
    //     user
    //       .save()
    //       .then((result) => {
    //         res.status(201).send({ msg: "User registered sucessfully!" });
    //       })
    //       .catch((error) => {
    //         res.status(500).send(error);
    //       });
    //   });
    // }
    // ************
    // res.json("RegisterED!");
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
              favoriteBookGenre: favoriteBookGenre || "",
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
    return res.status(500).reject({
      error: "wrong",
    });
  }
}

// **********************************************

/**  POST: http://localhost:7777/api/register
   * @param :{
          "username" : "example123",
          "password" : "examplepassword123",  
  * }  
  */
export async function login(req, res) {
  res.json("login route");
}

// **********************************************
/**  GET: http://localhost:7777/api/user/exampleuser123*/
export async function getUser(req, res) {
  res.json("get user account route");
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
  res.json("get user account route");
}

// **********************************************
/**  GET: http://localhost:7777/api/generateOTP */

export async function generateOTP(req, res) {
  res.json("generateOTP route");
}

// **********************************************
/**  GET: http://localhost:7777/api/verifyOTP */

export async function verifyOTP(req, res) {
  res.json("verifyOTP route");
}

// **********************************************
// successfully redirects user when OTP is valid
/**  GET: http://localhost:7777/api/createResetSession */

export async function createResetSession(req, res) {
  res.json("createResetSession route");
}

// **********************************************
// successfully redirects user when OTP is valid
/**  PUT: http://localhost:7777/api/resetPassword */

export async function resetPassword(req, res) {
  res.json("resetPassword route");
}
