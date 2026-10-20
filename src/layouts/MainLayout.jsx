import Header from "../components/common/Header"
import BottomNavbar from "../components/common/BottomNavbar"

export default function MainLayout({children}){

return(

<div className="bg-slate-100 min-h-screen">

<Header/>

<div>

{children}

</div>

<BottomNavbar/>

</div>

)

}