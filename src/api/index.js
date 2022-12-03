import axios from "axios"

const URL = "http://127.0.0.1:5000/api/v1"

export const getCardById = async ({ queryKey }) => {
  const [cardId] = queryKey;
  let data = await axios.get(`${URL}/cards/id/${cardId}`);
  return data.data;
}

export const getCards = async ({ queryKey }) => {
  const [url] = queryKey;
  let data;
  if (url === "")
    data = await axios.get(`${URL}/cards/all`);
  else
    data = await axios.get(`${URL}/cards/${url}`);

  return data;
}

export const getUser = async ({ queryKey }) => {
  const [urlUser] = queryKey;
  let data;
  if (urlUser === "")
    data = await axios.get(`${URL}/users/all`);
  else
    // emial
    data = await axios.get(`${URL}/users/${urlUser}`);
    
  return data;
}

export const getUserById = async ({ queryKey }) => {
  const [userId] = queryKey;
  let data = await axios.get(`${URL}/users/id/${userId}`);
  return data.data;
}

// export const signInWithEmailPassword = async ({ email, password }) => {
//   return await axios.post(`${URL}/users/signin`, {
//     email,
//     password,
//   });
// };

// export const registerWithEmailPassword = async ({ email, password, username }) => {
//   return await axios.post(`${URL}/users/register`, {
//     email,
//     password,
//     username,
//   });
// };

// export const updateProfile = async ({ username, password, address, tel, access_token, user_id }) => {
//   return await axios.put(
//     `${URL}/users/update`,
//     {
//       user_id,
//       username,
//       password,
//       address,
//       tel,
//     },
//     {
//       headers: { Authorization: `Bearer ${access_token}` },
//     }
//   );
// }
