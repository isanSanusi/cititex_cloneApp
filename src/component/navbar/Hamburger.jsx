import { useState } from "react";

const Hamburger = () => { 
  const [toggle, setToggle] = useState('block z-20')
  const [isMenu, setIsMenu] = useState('hidden navmenu')
  const [isClicked, setIsClicked] = useState(false)
  
  function onToggle() {
    if(!isClicked) {
    setToggle('hamburger-active block z-20')
    setIsMenu('navmenu')
    } else {
      setToggle('block z-20')
      setIsMenu('hidden navmenu')
    }
    setIsClicked(!isClicked)
  }

  return (
    <li className="lg:hidden left-0">
      <Button onToggle={() => onToggle()} toggle={toggle} />
      <Navbar setMenu={isMenu}/>
    </li>
  );
};

function Button({onToggle, toggle}) {
  return (
    <button
      id="hamburger"
      name="hamburger"
      type="button"
      className={toggle}
      onClick={onToggle}>
      <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
      <span className="hamburger-line transition duration-300 ease-in-out"></span>
      <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
    </button>
  );
}

function Navbar({setMenu}) {
  return (
    <nav
      id="nav-menu"
      className={setMenu}
    >
      <ul className="block">
        <li className="group">
          <a
            href="/startDesign"
            className="text-base flex text-dark py-2 mx-8 group-hover:text-primary"
          >
            Start Design
          </a>
        </li>
        <li className="group">
          <a
            href="/"
            className="text-base flex text-dark py-2 mx-8 group-hover:text-primary"
          >
            Home
          </a>
        </li>
        <li className="group">
          <a
            href="/product"
            className="text-base flex text-dark py-2 mx-8 group-hover:text-primary"
          >
            Product
          </a>
        </li>
        <li className="group">
          <a
            href="/about"
            className="text-base flex text-dark py-2 mx-8 group-hover:text-primary"
          >
            About
          </a>
        </li>
        <li className="group">
          <a
            href="/contact"
            className="text-base flex text-dark py-2 mx-8 group-hover:text-primary"
          >
            Contact
          </a>
        </li>
        <li className="group">
          <a
            href="/track"
            className="text-base flex text-dark py-2 mx-8 group-hover:text-primary"
          >
            Order Tracking
          </a>
        </li>
        <li className="group">
          <a
            href="/career"
            className="text-base flex text-dark py-2 mx-8 group-hover:text-primary"
          >
            Career
          </a>
        </li>
        <li className="flex items-center pl-4">
          <div className="flex mx-auto pt-3">
            <span className="mr-2 text-sm font-semibold text-primary">
              Mode
            </span>
            <input type="checkbox" className="hidden" id="dark-toggle" />
            <label htmlFor="dark-toggle">
              <div className="flex h-5 w-9 items-center cursor-pointer rounded-full bg-red-500 p-1">
                <div className="toggle-circle w-4 h-4 rounded-full bg-white"></div>
              </div>
            </label>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Hamburger;
