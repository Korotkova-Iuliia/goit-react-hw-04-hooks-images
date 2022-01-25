import axios from 'axios';
// const { currentPage } = this.state;
// ${name}
const API_KEY = '24377768-1651c24dae1d00899e27f41ae';
axios.defaults.baseURL = 'https://pixabay.com/api';

const getAxiosTag = async (name, currentPage) => {
  const URL = `/?q=${name}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=6`;
  const response = await axios.get(URL);
  //   console.log(response);
  //   console.log(response.data);
  //   console.log(response.data.hits);
  return response.data;
};
export default getAxiosTag;
