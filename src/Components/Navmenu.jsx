import { Link } from "react-router-dom";

const Navmenu = () => {
  return (
    <nav>
      <ul className="flex space-x-6 justify-center items-center">
        <li><Link to="/" className="font-bold text-base text-gray-600 hover:text-blue-500 capitalize">Home</Link></li>
        <li><Link to="/product" className="font-bold text-base text-gray-600 hover:text-blue-500 capitalize">Product</Link></li>
        <li> <Link  to="/category" className="font-bold text-base text-gray-600 hover:text-blue-500 capitalize">Category</Link></li>
        <li> <Link to="/contact" className="font-bold text-base text-gray-600 hover:text-blue-500 capitalize">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navmenu;
