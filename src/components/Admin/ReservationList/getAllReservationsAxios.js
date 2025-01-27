import axiosInstance from "../../../axiosConfig";
const API_ENDPOINT = "http://localhost:3000/reservation/";

export  async function getAllReservationsAxios () {
    try{
        const {data} =  await axiosInstance.get(API_ENDPOINT);
        return data; 
    }catch(error){
        throw error
    }
       
}  
/* export  async function getAllRoomsAvailableAxios  () {
    try{
        const {data} =  await axiosInstance.get(API_ENDPOINT)
        return data;
    }catch(error){
        throw error
    }
} 
 */