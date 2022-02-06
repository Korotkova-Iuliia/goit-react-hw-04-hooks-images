import axios from 'axios';
const API_KEY = '24377768-1651c24dae1d00899e27f41ae';
axios.defaults.baseURL = 'https://pixabay.com/api';
const getAxiosTag = async (name, page) => {
  const URL = `/?q=${name}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  const response = await axios.get(URL);
  return response.data;
};
export default getAxiosTag;
