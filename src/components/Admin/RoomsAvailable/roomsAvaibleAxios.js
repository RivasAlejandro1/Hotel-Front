import axiosInstance from "../../../axiosConfig";
const API_ENDPOINT = "http://localhost:3000/reservation/info";/* 
const API_ENDPOINT2 = "http://localhost:3000/room"; */

export  async function getRoomsAvailableAxios (info) {
    try{
        const {data} =  await axiosInstance.post(API_ENDPOINT, info);
        return data; 
    }catch(error){
        throw error
    }
       
}  
