import axios from "axios";

export const getToken = () => {
    let token = localStorage.getItem('token');
    if(token){
        return token;
    }
    return null;
}

export const authClient =  axios.create({
    baseURL: "http://localhost",
    withCredentials: true
})

export const serviceClient =  axios.create({
    baseURL: "http://localhost/api/v1",
    withCredentials: true,
    headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${getToken()}`
    }
})