import { NavLink } from 'react-router-dom';
const CustomBtn = ({children, link}) => {
  return (
    <div className="">
      <NavLink to={link} className={`flex justify-center items-center gap-2 bg-blue-500 text-white rounded hover:text-white hover:bg-blue-700 py-2 px-6 text-base font-bold capitalize`}> {children} </NavLink>
    </div>
  )
}



export default CustomBtn;