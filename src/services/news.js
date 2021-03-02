import axios from "axios";

export const getNewsData = async () => {
  const { data: response } = await axios.get("../data.json");
  return response.results;
};
