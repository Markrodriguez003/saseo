import axios from "axios";

export async function cookiesSetter(user_token) {
  try {
    const result = await axios.get("http://localhost:7777/api/set-cookies", {
      withCredentials: true,

      method: "get",
      mode: "cors",
      credentials: "include",
      params: { token: user_token },
    });

    return Promise.resolve({ result });
  } catch (error) {
    console.log(`Cookies - Error - ${error}`);
    // return Promise.reject({ error });
  }
}
