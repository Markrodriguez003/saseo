import "dotenv/config";
import nodemailer from "nodemailer";
import Mailgen from "mailgen";

// Create a transporter object using Gmail SMTP

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAIL_USERNAME,
    pass: process.env.NODEMAIL_PASSWORD,
  },
});

// MAILGEN - GENERATION OF EMAIL
let mailGenerator = new Mailgen({
  theme: "salted",
  product: {
    name: "Saseo",
    link: "https://saseo.onrender.com",
  },
});

// **********************************************
// Creates account login
/**  POST: http://localhost:7777/api/registerMail
   * @param :{
          "username" : "example123",
          "userEmail" : "examplepassword123",  
          "text" : "",  
          "subject" : "",  
  * }  
  */
export const registerMail = async (req, res) => {
  const { username, userEmail, text, subject } = req.body;

  //   body of email
  var email = {
    body: {
      name: username,
      intro: text || `Welcome to Saseo! Your library building begins today!`,
      outro:
        "Need help or have any questions or concerns? Please contact: modulatorstudios@gmail.com",
    },
  };
  var emailBody = mailGenerator.generate(email);
  let message = {
    from: process.env.NODEMAIL_USERNAME,
    to: userEmail,
    subject: subject || "Saseo Account created!",
    html: `${emailBody}`,
  };

  transporter.sendMail(message, (error, info) => {
    if (error) {
      //   console.error("❌ Error:", error.message);
      res
        .status(500)
        .send({ error: "Error occured transporting email! ->" + error });
    } else {
      res
        .status(200)
        .send({ msg: "You should have received an email from Saseo!" });
      //   console.log("✅ Email sent:", info.response);
    }
  });
};
