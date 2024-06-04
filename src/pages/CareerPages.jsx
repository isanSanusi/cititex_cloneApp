const CareerPages = () => {
  return (
    <>
      <li>
        <a href="#home">Start Design</a>
      </li>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="#home">Product</a>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <a href="#home">Contact</a>
      </li>
      <li>
        <a href="#home">Track</a>
      </li>
      <li>
        <a href="#home">Career</a>
      </li>
      <li>
        <a href="#home">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="lg:w-4 h-4"
          >
            <path
              d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.4434 16.4438L20.9997 21.0001"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </li>
    </>
  );
};

export default CareerPages;
