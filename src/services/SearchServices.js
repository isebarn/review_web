import axios from "axios";
// import dotenv from 'dotenv'
// dotenv.config()


const searchApi = axios.create({
    baseURL:'https://coral-app-qh8gd.ondigitalocean.app',
    headers:{
        'Content-Type' : 'application/json',
        'Authorization' : "Bearer ${process.env.LOGIN_TOKEN}"
}
});

// Request interceptor to add the token to the headers
// api.interceptors.request.use((config) => {
//     config.headers.Authorization = "Bearer ${process.env.LOGIN_TOKEN}";
//     return config;
//   });
  
  // Response interceptor to handle token expiration and refresh
//   api.interceptors.response.use(
//     (response) => {
//       return response;
//     },
//     async (error) => {
//       const originalRequest = error.config
//     })

export const searchProduct = async () => {
    try{
        const response = await searchApi.get('/summary?product_id=com.duolingo')
        if(response && response === 200){
            return response.data
        }
    }catch (error){
        console.log("Error Fetching data", error)
    }
}