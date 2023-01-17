import axios from "axios";

const BASE_URL = 'https://pizzaallapala.p.rapidapi.com/';
const KEY = '29f81496e7msh916b07e4031ce24p1e9f51jsn42c45a22aba7';

axios.defaults.baseURL = BASE_URL;

export const fetchProducts = async () => {
  const response = await axios('productos', {
    headers: {
      'X-RapidAPI-Key': KEY,
      'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com'
    },
  });

  console.log(response)
  return response.data.productos;
};
  
