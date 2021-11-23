import Axios from "axios";

const getDataIleDeFrance = async () => {
  const { data: dataAll } = await Axios.get("http://localhost:5000/city");
  return { dataAll };
};

export { getDataIleDeFrance };
