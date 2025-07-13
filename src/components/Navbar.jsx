// nav
import { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { navbar } from "../common/constants"
export const Navbar = () => {
  const [currentPage, setCurrentPage] = useState("about");

  const location = useLocation();
  const pathSegments = location.pathname;
  const secondPath = pathSegments.split('/')[1];
    
  useEffect(()=>{
    setCurrentPage(secondPath)
  },[secondPath])

  return(
    <div className="bg-[#fff6cc] w-full min-h-[100px] h-full w-full flex items-center pt-[15px]">
      <nav className="w-[90%] max-w-[500px] mx-auto">
        <ul className="flex justify-evenly flex-wrap">
          {navbar.map((i) => {
            const isActive = i.type === currentPage
            return(
              <Btn key={i.type} i={i} isActive={isActive} />
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

const Btn = ({i, isActive}) => {
  return(
    <li className="whitespace-nowrap h-[70px]">
      <Link
        to={`/${i.type}`}
        className={`trans text-[1.2rem] px-[20px]  py-[10px] rounded-[5px]
          ${isActive 
            ? 'text-[#ffffff] bg-[#3eb6a8] pointer-events-none'
            : 'text-[#3eb6a8] bg-[#ffffff]'
          } 
          hover:text-[#ffffff] hover:bg-[#b1d4d0]
        `}>
          {i.title}
      </Link>
    </li>

  )
}