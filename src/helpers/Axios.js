// import axios, { delete as del, get, post, put } from 'axios';
// import { isFunction } from 'lodash';
// import { toast } from 'react-toastify';
// axios.interceptors.request.use(
//   config => config,
//   e => Promise.reject(e),
// );
// axios.interceptors.response.use(
//   response => response,
//   e => {
//     if (isFunction(e?.toJSON)) {
//       const error = e?.toJSON();
//       if (error?.message === 'Network Error') {
//         toast.warning(
//           localStorage.getItem('i18nextLng') === 'uz'
//             ? 'Voy, internetingiz uzildi-ku'
//             : 'Нет подключения к Интернету',
//         );
//       }
//       if (process.env.NODE_ENV === 'development') {
//         console.log(error);
//       }
//     }
//     return Promise.reject(e);
//   },
// );
// const Axios = () => {
//   const token = localStorage.getItem('token');
//   const defaultOptions = {
//     baseURL: process.env.REACT_APP_API_URL,
//     // baseURL: process.env.NODE_ENV === 'development' ? '/api/v1' : API_URL,
//     // "proxy": "https://prep.eduonline.uz",
//     // "proxy": {
//     //   "new": "https://prep.eduonline.uz",
//     //   "old": "https://prep.uz"
//     //  },
//     headers: {
//       Authorization: token ? Bearer ${token} : '',
//     },
//     params: {
//       lan: localStorage.getItem('i18nextLng') || 'uz',
//     },
//   };
//   return {
//     get: (url, options = {}) => get(url, { ...defaultOptions, ...options }),
//     post: (url, data, options = {}) =>
//       post(url, data, { ...defaultOptions, ...options }),
//     put: (url, data, options = {}) =>
//       put(url, data, { ...defaultOptions, ...options }),
//     delete: (url, options = {}) => del(url, { ...defaultOptions, ...options }),
//   };
// };
// export default Axios;
