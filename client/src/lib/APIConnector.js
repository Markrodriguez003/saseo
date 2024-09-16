import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

//  MAKE API REQUEST TO BACKEND WHEN USE LOGS IN
export async function login(values) {
  // console.log(`server--> ${process.env.REACT_APP_SERVER_DOMAIN}`);
  try {
    // console.log(" validating login credentials!");
    const result = axios
      .post("http://localhost:7777/api/login", values)
      // .then((response) => console.log(response))
      .then((response) => {
        return "successful";
      })
      // .catch((error) => console.error(error));
      .catch((error) => {
        return "failure";
      });

    return result;
  } catch (error) {
    return "failure";
  }
}

//  MAKE API REQUEST TO BACKEND WHEN USER REGISTERS A NEW ACCOUNT
// export async function registerUser(values) {
//   // console.log(`server--> ${process.env.REACT_APP_SERVER_DOMAIN}`);
//   try {
//     // console.log(" validating login credentials!");
//     const result = axios
//       .post("http://localhost:7777/api/register", values)
//       // .then((response) => console.log(response))
//       .then((response) => {
//         return response;
//       })
//       // .catch((error) => console.error(error));
//       .catch((error) => {
//         return error;
//       });

//     return result;
//   } catch (error) {
//     return "failure!!!";
//   }
// }
export async function registerUser({ credentials }) {
  try {
    const {
      data: { msg },
      status,
    } = await axios.post(`http://localhost:7777/api/register`, credentials);
    let { username, email } = credentials;

    // Send email after registered to Saseo
    if (status === 201) {
      await axios.post("http://localhost:7777/api/registerMail", {
        username,
        userEmail: email,
        text: msg,
      });
      return Promise.resolve(msg);
    } else {
    }
  } catch (error) {
    return Promise.reject({ error });
  }
}

export async function authenticate(username) {
  try {
    return await axios.post("/api/authenticate", { username });
  } catch (error) {
    return { error: "Username doesn't exist!" };
  }
}

export async function getUser({ username }) {
  try {
    const { data } = await axios.get(`/api/user/${username}`);
    return data;
  } catch (error) {
    return { error: "User account doesn't exist!" };
  }
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

export async function generateOTP({ username }) {
  try {
    const {
      data: { code },
      status,
    } = await axios.get("/api/generateOTP", {
      params: { username },
    });

    if (status === 201) {
      let {
        data: { email },
      } = await getUser({ username });
      let text = `Your password recovery OTP is: ${code}. Verify and recover your password. If you did not request a password reset, please ignore this email.`;
      await axios.post("/api/registerMail", {
        username,
        userEmail: email,
        text,
        subject: "Password Recovery OTP",
      });
    }
    Promise.resolve(code);
  } catch (error) {
    return Promise.reject({ error: "Could not generate OTP!" });
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
    const { data, status } = await axios.put("/api/resetPassword", {
      username,
      password,
    });

    return Promise.resolve({ data, status });
  } catch (error) {
    return Promise.reject({ error });
  }
}
