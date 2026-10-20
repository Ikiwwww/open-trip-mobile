import api from "./axios";

export const createBooking=(data)=>{

    return api.post("/booking",data);

}