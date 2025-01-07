// import { useState, useEffect } from "react";
// import {useParams} from "react-router-dom";
// function Singleproduct (){
//     const {id} = useParams()
//     const [product, setproduct] = useState([null]);
//     const [isloading, setloading] = useState(false);
//     const [error, seterror] = useState(null);

//     useEffect(()=>{
//         setloading(true);
//         seterror(null);
//         fetch(`https://dummyjson.com/products/${id}`)
//         .then((response)=>response.json())
//         .then((data)=> setproduct(data))
//         .catch((error)=>seterror(error))
        
//     },[id])  
//     return (
//     <div>Singleproduct</div>
//   )
// }

// export default Singleproduct