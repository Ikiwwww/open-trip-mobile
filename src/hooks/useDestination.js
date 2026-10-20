import {useEffect,useState} from "react"

import {getTrips} from "../services/tripService"

export default function useTrips(){

const [trips,setTrips]=useState([])

useEffect(()=>{

setTrips(getTrips())

},[])

return{

trips

}

}