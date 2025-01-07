import Category from "@/Pages/Category/Category"
import Contact from "@/Pages/Contact/Contact"
import Home from "@/Pages/Home/Home"
import Product from "@/Pages/Product/Product"
import Singleproduct from "@/Pages/Singleproduct/Singleproduct"
import {Routes, Route} from "react-router-dom"

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="product" element={<Product/>}/>
      <Route path="category" element={<Category/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="product/:id" element={<Singleproduct/>}/>
    </Routes>
  )
}

export default AppRouter