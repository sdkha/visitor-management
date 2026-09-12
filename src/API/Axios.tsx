import axios from "axios";

const API = axios.create({
    baseURL: "https://dummyjson.com",
    // baseURL: "http://localhost:5000",
    headers:{
        "Content-Type": "application/json",
    },
});

export default API;