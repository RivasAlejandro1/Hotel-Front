import axiosInstance from "../../../axiosConfig";
const API_ENDPOINT = "http://localhost:3000/reservation/";

export  async function modifeReservationAxios (info) {
    try{
        console.log("info:",info)
        const {data} =  await axiosInstance.put(`${API_ENDPOINT}${info.id}`, info);
        return data; 
    }catch(error){
        throw error
    }
       
}  
