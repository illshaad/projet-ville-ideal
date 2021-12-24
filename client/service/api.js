import Axios from "axios";

const getDataIleDeFrance = async () => {
  const { data: dataAll } = await Axios.get(
    `${process.env.NEXT_PUBLIC_API_BACKEND}/city`
  );
  return { dataAll };
};

const createRating = async (data) =>
  await Axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/add-rating`, data);

const createUser = async (data) =>
  await Axios.post(
    `${process.env.NEXT_PUBLIC_API_BACKEND}/register`,
    data
  ).catch((error) => error.response);

const loginUser = async (data) =>
  await Axios.post(
    `${process.env.NEXT_PUBLIC_API_BACKEND}/login`,
    data
  ).catch((error) => error.response);

export { getDataIleDeFrance, createRating, createUser, loginUser };
