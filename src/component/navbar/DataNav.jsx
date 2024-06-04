import DataNavbar from "../../API/DataNav.js";
import ModalMenu from "./ModalMenu";
import { useState } from "react";
import { searchIcon } from "../icons";
import { Link } from "react-router-dom";

const DataNav = () => {
  const Datas = DataNavbar;
  const search = searchIcon();
  const [isHover, setIsHover] = useState(false)
  const [isSlide, setIsSlide] = useState(false)

  const handelHover = () => setIsHover(true)
  const handleNoHover = () => setIsHover(false)
  const handleSearchBtn = () => setIsSlide(!isSlide)

  return (
    <>
      {isSlide && (
      <div className="absolute rounded-b-md shadow-xl w-[30rem] bg-white mr-5 top-5 transition-all ease-in duration-500">
        <input type="search" name="search" id="search" placeholder="Search..." className="bg-transparent w-full pl-3 pt-5 pb-3 outline-none text-[1rem]"/>
      </div>
      )}
      <li className="hidden lg:flex xl:w-full">
        <ul className="flex items-center justify-center w-full text-[0.8rem] xl:px-5">
          {Datas.map((data) => (
            <li key={data.id} className="p-2 rounded-md mx-1">
              <Link 
                to={data.path}
                className="group-hover:text-white"
                onMouseEnter={data.name === "Product" ? handelHover : handleNoHover}>{data.name}
              </Link>
            </li>
          ))}
          <li>
            <button className="ml-2 pt-1" onClick={() => handleSearchBtn()}>{isSlide ? 'X' : search}</button>
          </li>
        </ul>
      </li>
      { isHover && (
        < div onMouseEnter={handelHover} onMouseLeave={handleNoHover} className="flex p-5 justify-center w-1/2 shadow-xl absolute top-16 z-20 rounded-xl bg-white">
          <ModalMenu />
        </div>
      )}
    </>
  );
};

export default DataNav;
