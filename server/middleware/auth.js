import jwt from "jsonwebtoken";

// AUTHENTICATION MIDDLE WARE. USED TO VERIFY THE USER IS LOGGED IN.
export default async function Auth(req, res, next) {
  try {
    // access authorize header to validate request
    const authToken = req.headers.authorization.split(" ")[1];

    // retrieve the user details for the logged in user

    const decodedToken = jwt.verify(authToken, process.env.JWT_TOKEN_SECRET);
    req.user = decodedToken.data;
    // res.json(decodedToken);
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
