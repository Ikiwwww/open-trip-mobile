import {Routes,Route} from "react-router-dom"

import Home from "../pages/Home"

import Explore from "../pages/Explore"

import DetailDestination from "../pages/DetailDestination"

import Profile from "../pages/Profile"

import Booking from "../pages/Booking"

import Wishlist from "../pages/Wishlist"

import Notification from "../pages/Notification"

import Login from "../pages/Login"

import Register from "../pages/Register"

export default function AppRoutes(){

return(

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/login" element={<Login/>}/>

<Route path="/register" element={<Register/>}/>

<Route path="/explore" element={<Explore/>}/>

<Route path="/detail/:id" element={<DetailDestination/>}/>

<Route path="/booking" element={<Booking/>}/>

<Route path="/profile" element={<Profile/>}/>

<Route path="/wishlist" element={<Wishlist/>}/>

<Route path="/notification" element={<Notification/>}/>

</Routes>

)

}