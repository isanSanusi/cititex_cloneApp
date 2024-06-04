import DataNav from "./DataNav";

const NavbarMenu = () => {
  return (
    <li className="hidden lg:flex xl:w-full">
      <ul className="flex items-center justify-evenly gap-4 lg:gap-5 w-full text-[0.7rem] xl:text-[15px] xl:px-20">
      <DataNav />
      </ul>
    </li>
  );
};

export default NavbarMenu;
