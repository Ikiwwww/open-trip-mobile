import api from "./axios";

export const getDestination=(id)=>{

    return api.get(`/destination/${id}`);

}