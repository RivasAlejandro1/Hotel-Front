import axiosInstance from "../../axiosConfig";
const API_ENDPOINT = "http://localhost:3000/reservation/";

export default async function getAllUserReservertionAxios  (id) {
    try {
        const {data}  = await axiosInstance.get(`${API_ENDPOINT}${id}`)
        return data
    }
    catch(error){
        throw error
    }
} 