import axiosInstance from "../../../axiosConfig";
const API_ENDPOINT = "http://localhost:3000/user/";

export  async function getAllUsersAxios () {
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