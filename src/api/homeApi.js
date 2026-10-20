import api from "./axios";

export const getHome=()=>{

    return api.get("/home");

}