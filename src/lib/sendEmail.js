import emailjs from "@emailjs/browser";

import formatEmail from "./formatEmail";

// todo: newsletter that recommends a new, generated book every 3 months to whoever signs up to newsletter

async function sendEmail(collection) {
  let payload = { message: formatEmail(collection) };
  emailjs
    .send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      payload,
      process.env.REACT_APP_PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
}

export default sendEmail;
