import Axios from "axios";

const getDataIleDeFrance = async () => {
  const { data: dataAll } = await Axios.get(
    `${process.env.NEXT_PUBLIC_API_BACKEND}/city`
  );
  return { dataAll };
};

const createRating = async (data) => {
  const { data: save } = await Axios.post(
    `${process.env.NEXT_PUBLIC_API_BACKEND}/rating`,
    data
  );
  return { save };
};

const createUser = async (data) => {
  return Axios.post(
    `${process.env.NEXT_PUBLIC_API_BACKEND}/users/register`,
    data
  ).catch((error) => error.response);
};

const loginUser = async (data) => {
  return await Axios.post(
    `${process.env.NEXT_PUBLIC_API_BACKEND}/users/login`,
    data
  ).catch((error) => error.response);
};

export { getDataIleDeFrance, createRating, createUser, loginUser };
