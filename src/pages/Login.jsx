import { Link } from "react-router-dom";
import { lockIcon, mailIcon, phoneIcon, userIcon } from "../component/icons";
import Cititext from "../assets/img/cititextext.png";

const Login = () => {
  return (
    <section class="mt-12 bg-[url('assets/img/bglogin.png')] bg-cover bg-center">
      <div className="bg-black w-full bg-opacity-80">
        <div class="container lg:max-w-7xl lg:px-14">
          <div className="flex justify-between items-center gap-11">
            <WelcomeLogin />
            <FormLogin />
          </div>
        </div>
      </div>
    </section>
  );
};

function WelcomeLogin() {
  return (
    <div className="hidden md:block w-full">
      <span className="bg-slate-500 w-[5rem] block h-[3px] mb-3"></span>
      <h1 className="text-4xl text-white mb-5">Hi, Welcome to</h1>
      <div className="py-4">
        <img src={Cititext} className="w-[26rem]" />
      </div>
      <h3 className="text-[1.2rem] text-white">
        Good Apparel and engineering for Indonesia leading brands.
      </h3>
    </div>
  );
}

function FormLogin() {
  const user = userIcon();
  const password = lockIcon();
  const mail = mailIcon();
  const phone = phoneIcon();

  return (
    <form className="w-full py-10 px-12 md:px-0">
      <div class="bg-white p-8 shadow-2xl rounded-lg">
        <div class="w-full px-4 mb-5">
          <h1 class="text-2xl text-primary font-bold">Log in</h1>
          <p className="text-[0.8rem] pt-2">Hai, silahkan masukan akun anda</p>
        </div>
        <div class="w-full px-4 mb-5">
          <label for="email" class="text-base font-bold text-primary"></label>
          <div className="flex items-center bg bg-slate-200 text-dark rounded-md gap-2 py-3 px-2 group">
            <span>{user}</span>
            <input
              id="email"
              type="text"
              placeholder="Email"
              class="w-full focus:outline-none focus:ring-primary bg-slate-200"
            />
          </div>
        </div>
        <div class="w-full px-4">
          <label for="email" class="text-base font-bold text-primary"></label>
          <div className="group flex items-center bg bg-slate-200 text-dark rounded-md gap-2 py-3 px-2">
            <span>{password}</span>
            <input
              id="password"
              type="text"
              placeholder="Password"
              class="w-full focus:outline-none bg-slate-200"
            />
          </div>
        </div>
        <div className="py-3 text-end pr-5">
          <a
            href="/"
            className="cursor-pointer text-[0.9rem] text-[#007bff] hover:text-slate-500"
          >
            lupa password?
          </a>
        </div>
        <div class="w-full px-4 py-2 pb-5 flex justify-center">
          <button
            type="submit"
            class="text-base font-semibold text-white bg-dark py-3 px-4 rounded-md hover:shadow-lg hover:opacity-80 transition duration ease-in-out w-full "
          >
            Log in
          </button>
        </div>
        <div className="text-center py-3">
          <p className="text-sm text-slate-500">- atau -</p>
        </div>
        <div className="flex justify-center items-center gap-3 p-4">
          <button className="bg-dark shadow-md p-2 text-white">{mail}</button>
          <button className="bg-slate-100 shadow-md p-2">{phone}</button>
        </div>
        <div className="text-center py-3">
          <p className="text-[0.8rem]">
            Baru di affah.collection?{" "}
            <Link to="/register" className="font-semibold">
              Daftar
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}

export default Login;
