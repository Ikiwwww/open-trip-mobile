import { useEffect, useState } from "react";
import { fetchHome } from "../services/homeService";
export default function useHome() {

    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{

        load();

    },[]);

    async function load(){

        try{
            const result=await fetchHome();
            setData(result);
        }

        catch(err){
            setError(err);

        }

        finally{

            setLoading(false);

        }

    }

    return{

        data,

        loading,

        error,

        refresh:load

    }

}