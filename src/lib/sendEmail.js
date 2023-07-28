import emailjs from "@emailjs/browser";

import formatEmail from "./formatEmail";
// todo: move to ENV
const SERVICE_ID = "service_ovque9t";
const TEMPLATE_ID = "template_dv84fsb";
const PUBLIC_KEY = "Cy6wkdPzfljkURebV";
async function sendEmail(collection) {
  let payload = { message: formatEmail(collection) };
  // console.log("Payload! " + JSON.stringify(payload));
  // console.log("This is the html code!@ " + JSON.stringify(payload.message));
  // console.log("This is the html code!@ " + JSON.stringify(formatEmail(collection)));
  // var templateParams = {
  //   message: "LOTS OF BOOKS HERE!!!",
  // };
  emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, PUBLIC_KEY).then(
    (result) => {
      console.log(result.text);
    },
    (error) => {
      console.log(error.text);
    }
  );
}

export default sendEmail;
