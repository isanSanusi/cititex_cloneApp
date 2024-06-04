import Image from "../../assets/img/CityTex.png";
import Hamburger from "./Hamburger";
import NavbarLogin from "./NavbarLogin";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  return (
    <header className="bg-white md:px-10 flex items-center top-0 left-0 w-full h-8">
      <nav className="container my-auto xl:max-w-7xl">
        <ul className="flex items-center justify-between relative py-[20px] xl:pl-10">
          <Hamburger />
          <NavbarImage />
          <NavbarMenu />
          <NavbarLogin />
        </ul>
      </nav>
    </header>
  );
};

function NavbarImage() {
  return (
    <li className="pl-12 w-40 lg:w-1/5 lg:pl-0">
      <a href="#home">
        <img src={Image} alt="affah loh" className="xl:scale-125" />
      </a>
    </li>
  );
}

export default Navbar;
