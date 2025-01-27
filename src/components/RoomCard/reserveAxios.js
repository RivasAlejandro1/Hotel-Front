import axiosInstance from "../../axiosConfig";
const API_ENDPOINT = "http://localhost:3000/reservation/";

export default async function reserveAxios  (info) {
    axiosInstance.post(API_ENDPOINT, info).then(
        ({data}) => {
            return data
    })
} 