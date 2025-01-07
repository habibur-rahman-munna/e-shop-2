import CustomBtn from "@/Components/CustomeBtn";
import { useState, useEffect } from "react";
import { Link, } from "react-router-dom";

function Product() {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch("https://dummyjson.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => setProducts(data.products))
      .catch((error) => setError(error.message)) 
      .finally(() => setLoading(false));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-bold">Loading products...</p> 
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-bold">Error fetching products: {error}</p> 
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold capitalize">Product List</h1>
        <input type="text"placeholder="Search products"className="border border-gray-400 rounded-md p-2 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"value={searchTerm} onChange={handleSearch}/>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {filteredProducts.map((product) => (
          <li key={product.id} className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md border-gray-200 border-2 p-10" >
            <img src={product.thumbnail}alt={product.title}className="w-full h-70 object-cover"/>
            <div className="flex flex-col justify-between h-full">
              <div className="pt-10">
                <p className="text-lg font-bold capitalize mb-3">{product.title}</p>
                <p className="text-sm text-gray-500 capitalize mb-3">{product.description}</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm font-bold capitalize">BDT: {product.price}</p> 
                  <p className="text-sm font-bold capitalize">Stock: {product.stock}</p>
                  <p className="text-sm font-bold capitalize">tags: {product.tags}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <CustomBtn>
                    <Link to={`/product/${product.id}`}>View Details</Link>
                  </CustomBtn>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Product;
