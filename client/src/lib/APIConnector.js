import axios from "axios";
// axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

//  MAKE API REQUEST TO BACKEND WHEN USE LOGS IN
export async function login(values) {
  // console.log(`server--> ${process.env.REACT_APP_SERVER_DOMAIN}`);

  try {
    const result = axios
      .post("http://localhost:7777/api/login", values)
      .then((response) => {
        console.log(`The user logged in! --> ${JSON.stringify(response)}}`);

        // todo: weed out non-crucial information
        return { msg: "successful", ...response.data };
      })
      .catch((error) => {
        return "failure";
      });

    return result;
  } catch (error) {
    return "failure";
  }
}

export async function registerUser(formValues) {
  // console.log(
  //   `Registering user inside frontend api connector! -> ${JSON.stringify(
  //     formValues
  //   )}`
  // );

  const { username, email, password, favoriteBookGenre } = formValues;
  let postStatus;
  try {
    await axios
      .post(`http://localhost:7777/api/register`, {
        username: username,
        password: password,
        email: email,
        favoriteBookGenre: favoriteBookGenre,
      })
      .then(async (response) => {
        // console.log(`::: response: ${JSON.stringify(response)}   `);
        if (response.status === 201) {
          await axios.post("http://localhost:7777/api/registerMail", {
            username,
            userEmail: email,
            text: response.data.msg,
          });
        } else {
          console.log("Registeration email was not sent out!");
          return "email_failure";
        }

        postStatus = "successful";
      })
      .catch((error) => {
        console.log(
          `Failure from the backend:::: ${JSON.stringify(error.response.data)}`
        );
        postStatus = "username||password_failure";
      });
  } catch (error) {
    console.log(`Error::::${error}`);
    postStatus = "failure";
  }
  return postStatus;
}

export async function authenticate(username) {
  try {
    return await axios.post("/api/authenticate", { username });
  } catch (error) {
    return { error: "Username doesn't exist!" };
  }
}

export async function getUser(username) {
  console.log(`Username::::: ${username}`);
  try {
    const { data } = await axios.get(
      `http://localhost:7777/api/user/${username}`
    );
    return data;
  } catch (error) {
    return { error: "User account doesn't exist!" };
  }
}

export async function verifyAccount(values) {
  // console.log(
  //   `This is the password reset form data::: ${JSON.stringify(values)}`
  // );
  const { username, email } = values;

  let postStatus;
  try {
    await axios
      .post(`http://localhost:7777/api/verifyaccount`, {
        username: username,
        email: email,
      })
      .then(async (response) => {
        // console.log(`::: response: ${JSON.stringify(response)}   `);
        postStatus = "successful";
      })
      .catch((error) => {
        console.log(
          `Failure from the backend:::: ${JSON.stringify(error.response)}`
        );
        postStatus = "username||email_failure";
      });
  } catch (error) {
    console.log(`Error::::${error}`);
    postStatus = "username||email_failure";
  }

  return postStatus;
}

export async function verifyPassword({ username, password }) {
  try {
    if (username) {
      const { data } = await axios.post("/api/login", { username, password });
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: "Password does not match!" });
  }
}

export async function updateUser(response) {
  try {
    const token = await localStorage.getItem("token");
    const data = await axios.put("/api/updateUser", response, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: "Could not update user profile!" });
  }
}

export async function generateOTPCode({ username }) {
  try {
    // console.log(`huh ==== ${username}`);
    const {
      data: { code },
      status,
    } = await axios.get("http://localhost:7777/api/generateOTP", {
      // params: { username: username },
    });

    // todo: This is not necessary
    if (status === 201) {
      let text = `Your password recovery OTP is: ${code}. Verify and recover your password. If you did not request a password reset, please ignore this email.`;
      let data = await getUser({ username });
      // console.log(`Data::::::::::${JSON.stringify(data.email)}`);

      await axios.post("http://localhost:7777/api/registerMail", {
        username,
        userEmail: data.email,
        text,
        subject: "Password Recovery OTP",
      });
    }
    // Promise.resolve(code);
  } catch (error) {
    // return Promise.reject({ msg: `Could not generate OTP! ${error}` });
    return { msg: `Could not generate OTP! ${error}` };
  }
}

export async function verifyOTP({ username, code }) {
  try {
    const { data, status } = await axios.get("/api/verifyOTP", {
      params: { username, code },
    });

    return { data, status };
  } catch (error) {
    Promise.reject({ error });
  }
}

export async function resetPassword({ username, password }) {
  try {
    const { data, status } = await axios.put(
      "http://localhost:7777/api/resetPassword",
      {
        username,
        password,
      }
    );

    return Promise.resolve({ data, status });
  } catch (error) {
    return Promise.reject({ error });
  }
}
