import axios from 'axios';


// axios.defaults.baseURL = 'https://ms-applicantmanagement-api-dev-usc.azurewebsites.net/api/am/';

const baseURL = 'https://ms-applicantmanagement-api-dev-usc.azurewebsites.net/api/am/'

export const instance = axios.create({
    baseURL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-cache"
    }
});

// In case if want to implement JWT Tokens adding barrer tokens to headers, Please use below code

// instance.interceptors.request.use(
//     config => {
//       let token = getToken();
//       if (token) {
//         config.headers["Authorization"] = `${token}`;
//       }
//       return config;
//     },
//     error => {
//       return Promise.reject(error);
//     }
//   );
  
