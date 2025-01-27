import axios from "axios";
const API_ENDPOINT = "http://localhost:3000/register";

export default async function registerAxios  (info) {
    try {
        const response  = await axios.post(API_ENDPOINT, info)
        return response
    }
    catch(error){
        throw error
    }
} 