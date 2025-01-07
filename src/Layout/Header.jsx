import CustomBtn from "@/Components/CustomeBtn"
import Navmenu from "@/Components/Navmenu"
import {FaShoppingCart} from "react-icons/fa"



const Header = () => {  return (
    <header>
      <div className=" static top-0 bg-white text-black py-6 border-gray-200 shadow-md z-10">
        <div className="container mx-auto justify-between items-center flex py-2">
          <div className="text-2xl font-bold uppercase text-black">
            <a href="/">e-shop</a>
          </div>
          <nav>
            <Navmenu/>
          </nav>
          <CustomBtn link = "/" className={`w-40`}><FaShoppingCart  size={16}/>cart</CustomBtn>
        </div>
      </div>
      
    </header>
  )
}

export default Header