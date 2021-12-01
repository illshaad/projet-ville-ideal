import Axios from "axios";

const getDataIleDeFrance = async () => {
  const { data: dataAll } = await Axios.get("http://localhost:5000/city");
  return { dataAll };
};

const createRating = async (data) => {
  const { data: save } = await Axios.post("http://localhost:5000/avis", data);
  return { save };
};

export { getDataIleDeFrance, createRating };
