import Logo from '../assets/img/CityTex.png'

const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="container">
        <div className="flex flex-wrap lg:gap-x-8 xl:flex-nowrap text-slate-500 items-start justify-evenly xl:mx-auto xl:px-16 lg:grid-cols-4 lg:gap-5 gap-3 xl:max-w-7xl">
          <div className="flex flex-col justify-center pt-6 pb-4 md:w-1/3">
            <div className="mb-6 mx-auto rounded-md overflow-hidden p-1 bg-white">
              <img src={Logo} alt="" className="w-40" />
            </div>
            <p className="text-center text-base lg:text-sm mb-6">
              The Biggest Blank Apparel in Indonesia, With more than 43 Stores
              across Indonesia includes Jakarta, Surabaya, Bali, Medan and many
              more.
            </p>
            <p className="text-center text-base lg:text-sm">Stay Connected</p>
          </div>
          <div className="flex justify-between gap-5 items-start md:w-1/2 lg:ml-24 xl:justify-evenly">
            <ul className="flex flex-col justify-center gap-3 text-center pt-4 lg:pt-6">
              <h2 className="mb-5 font-semibold rounded-md bg-white p-1 text-black lg:text-sm">
                Shop By Brands
              </h2>
              <li className="hover:text-white lg:text-sm">
                <a href="">Flexfit</a>
              </li>
              <li className="hover:text-white lg:text-sm">
                <a href="">Stahls</a>
              </li>
              <li className="hover:text-white lg:text-sm">
                <a href="">New States Apparel</a>
              </li>
              <li className="hover:text-white lg:text-sm">
                <a href="">New States Footwear</a>
              </li>
              <li className="hover:text-white lg:text-sm">
                <a href="">Hotronix</a>
              </li>
            </ul>
            <ul className="flex flex-col justify-center gap-2 text-center p-4 lg:pt-6">
              <h2 className="mb-5 font-semibold rounded-md bg-white text-black p-1 lg:text-sm">
                Help
              </h2>
              <li className="hover:text-white lg:text-sm">
                <a href="contact.html">Contact Us</a>
              </li>
              <li className="hover:text-white lg:text-sm">
                <a href="tracking.html">Order Tracking</a>
              </li>
              <li className="hover:text-white lg:text-sm">
                <a href="career.html">Career</a>
              </li>
              <li className="hover:text-white lg:text-sm">
                <a href="account.html">Manage Account</a>
              </li>
              <li className="hover:text-white lg:text-sm">
                <a href="history.html">Order History</a>
              </li>
              <li className="hover:text-white lg:text-sm">
                <a href="pending.html">Pending Order</a>
              </li>
              <li className="hover:text-white lg:text-sm">
                <a href="balance.html">Balance History</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-2 justify-center pb-14 lg:pt-6 xl:w-1/4">
            <h2 className="mb-6 mx-auto font-semibold rounded-md bg-white text-black py-1 px-4 lg:text-sm">
              For More Info
            </h2>
            <p className="text-center text-[0.9rem] md:text-[1rem] lg:text-sm flex items-center gap-2">
              <span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="envelope"
                  className="svg-inline--fa fa-envelope fa-w-16"
                  role="img"
                  viewBox="0 0 512 512"
                  width="14"
                  height="14"
                >
                  <path
                    fill="currentColor"
                    d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
                  ></path>
                </svg>
              </span>
              affah.collections@gmail.com
            </p>
            <p className="text-center text-sm md:text-[1rem] lg:text-sm flex items-center gap-2">
              <span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="phone-alt"
                  className="svg-inline--fa fa-phone-alt fa-w-16"
                  role="img"
                  viewBox="0 0 512 512"
                  width="14"
                  height="14"
                >
                  <path
                    fill="currentColor"
                    d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                  ></path>
                </svg>
              </span>
              021 - 626581234
            </p>
            <p className="flex items-start text-sm md:text-[1rem] lg:text-sm">
              <span className="pt-1 pr-2">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="map-marker-alt"
                  className="svg-inline--fa fa-map-marker-alt fa-w-12"
                  role="img"
                  viewBox="0 0 384 512"
                  width="14"
                  height="14"
                >
                  <path
                    fill="currentColor"
                    d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                  ></path>
                </svg>
              </span>
              Jl. Gandawijaya N0.140-142 ,Cimahi Tengah, Kota Cimahi
            </p>
          </div>
        </div>
      </div>
      <div className="w-full text-center py-2 bg-dark text-white text-xs">
        <h2>
          Created By <a href="">Sandi Hadiansyah</a>- affah collections 2024
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
