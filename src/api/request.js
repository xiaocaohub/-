import axios from "axios";
let instance = axios.create({


    baseURL: "http://localhost:3000", 
    timeout: 15000
})

instance.interceptors.request.use(

    config => {
        console.log("config")
        console.log(config)
        config.headers.Authorization = "12345";
        config.headers.token = "123";

        return config;
    },
    err => {

        return Promise.reject(err)
    }
)

instance.interceptors.response.use(
    response=> {
        return response;
    },
    err => {
        return Promise.reject(err)
    }
)

export default instance;