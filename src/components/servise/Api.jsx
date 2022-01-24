import axios from 'axios';

const API_KEY = '24377768-1651c24dae1d00899e27f41ae';
axios.defaults.baseURL = 'https://pixabay.com/api';
const URL = `/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
// const URL = `/?key=${API_KEY}&image_type=photo&orientation=horizontal&safesearch=true&&per_page=${40}`;
// const URL = `https://pixabay.com/api/?q=cat&page=1&key=24377768-1651c24dae1d00899e27f41ae&image_type=photo&orientation=horizontal&per_page=12`;
const getAxiosTag = async () => {
  const response = await axios.get(URL);
  //   console.log(response);
  //   console.log(response.data);
  //   console.log(response.data.hits);
  return response.data;
};
export default getAxiosTag;
// export const getPublications = async () => {
//   const response = await axios.get('/?key=KEY');
//   return response.json;
// };

// const API_KEY = `24377768-1651c24dae1d00899e27f41ae`;
// const BASE_URL = `https://pixabay.com/api`;
// const URL = `${BASE_URL}/?key=${API_KEY}&q=cat&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=12`;
// const getAxiosTag = async () => {
//   const response = await axios.get(URL);
//   console.log(response);
//   console.log(response.data);
//   return response.data;
// };
// export default getAxiosTag;
// // const API_KEY = `24377768-1651c24dae1d00899e27f41ae`;
// // const BASE_URL = `https://pixabay.com/api`;
// // const URL = `${BASE_URL}/?key=${API_KEY}&q=${tags}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${40}`;
// // const getAxiosTag = async (tags, page, perPage) => {
// //   const response = await axios.get(URL);
// //   console.log(response);
// //   console.log(response.data);
// //   return response.data;
// // };
// // export { getAxiosTag };

// // export getAxiosTag().then(response => console.log(response));
// // console.log('response');
// // };
// // getAxiosTag().then(response => console.log(response));

// // export function fetchTag(tags, page, perPage) {
// //   return fetch(URL).then(response => {
// //     if (!response.ok) {
// //       throw new Error(response.status);
// //     }
// //     return response.json();
// //   });
// // }
