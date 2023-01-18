import axios from "axios";

const BASE_URL = 'https://api.thedogapi.com/v1/';


axios.defaults.baseURL = BASE_URL;

export const fetchProducts = async () => {
  const response = await axios('breeds', {
    params: {
      limit: 8,
      page: 0,
      
    },
  });

  console.log(response)
  return response.data;
};
  
