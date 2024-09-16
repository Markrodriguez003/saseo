import jwt from "jsonwebtoken";

// AUTHENTICATION MIDDLEWARE. USED TO VERIFY THE USER IS LOGGED IN WITH.
// WITH VALID. WILL BE CALLED BEFORE SOME API ROUTE CALLS (updateUser being one)
export default async function Auth(req, res, next) {
  try {
    // Access authorize header to validate request via
    // URL (ex. https.localhost.7777/data:akfmasf?authorization:8B1aGf9781wfqkfnajh)
    // Grabs token authorization dode
    const authToken = req.headers.authorization.split(" ")[1];

    // Checks token taken from req.header with JWT to see if user is authorized
    const decodedToken = jwt.verify(authToken, process.env.JWT_TOKEN_SECRET);

    // Grabs decoded-token data
    // ! Check to see if there is a try / catch promise to see if
    // ! user's session token is actually verified.
    // Sets decoded token data to req.user
    req.user = decodedToken.data;
    // res.json(decodedToken);

    // if jwt token is verified, move on to next api process in queue
    next();
  } catch (error) {
    return res.status(401).json({ error: `Authentication error! ${error}` });
  }
}

export function localVariables(req, res, next) {
  req.app.locals = {
    OTP: null,
    resetSession: false,
  };

  next();
}
