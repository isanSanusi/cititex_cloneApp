import ImageLogin from "../../assets/img/Login.png";
import { cartIcon, searchIcon } from "../icons";

const NavbarLogin = () => {
  const cart = cartIcon()
  const search = searchIcon()
  return (
    <li className="pr-0 lg:pr-0">
      <ul className="flex items-center gap-2 lg:hidden">
        <li className="p-3">
          <a href="/login">
            <img src={ImageLogin} alt="" className="w-6" />
          </a>
        </li>
        <li className="p-2 hidden md:block">
          <span>{search}</span>
        </li>
      </ul>
      <ul className="pr-0 lg:pr-0 lg:scale-75 hidden lg:block">
        <ul className="flex items-center gap-5">
          <li>
            <a href="/login">
              <button type="submit" className="font-semibold xl:text-[20px]">
                Login
              </button>
            </a>
          </li>
          <li className="">
            <a href="/register">
              <button
                type="submit"
                className="px-6 py-2 bg-black border-2 border-black hover:bg-white ease-in-out rounded-full text-white hover:text-black xl:text-[20px]"
              >
                Register
              </button>
            </a>
          </li>
          <li>
            <span className="block bg-slate-800 h-12 w-1"></span>
          </li>
          <li>
            <a href="/cart">
              <span>{cart}</span>
            </a>
          </li>
        </ul>
      </ul>
    </li>
  );
};

export default NavbarLogin;
