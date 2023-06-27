import axios from "axios";

export const authClient =  axios.create({
    baseURL: "http://localhost",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:5173"
    },
    withCredentials: true
})