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
  const { data: user } = await Axios.post(
    `${process.env.NEXT_PUBLIC_API_BACKEND}/user`,
    data
  );
  return { user };
};

export { getDataIleDeFrance, createRating, createUser };
