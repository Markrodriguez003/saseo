import emailjs from "@emailjs/browser";
// todo: move to ENV
const SERVICE_ID = "service_ovque9t";
const TEMPLATE_ID = "template_dv84fsb";
const PUBLIC_KEY = "Cy6wkdPzfljkURebV";
async function sendEmail(collection) {

    var templateParams = {
        message: 'LOTS OF BOOKS HERE!!!',
    };
  emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
    (result) => {
      console.log(result.text);
    },
    (error) => {
      console.log(error.text);
    }
  );
}

export default sendEmail;
