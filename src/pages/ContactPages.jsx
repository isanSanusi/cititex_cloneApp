import ilustrasi from '../assets/img/ilustrasicontact.png'
import yt from '../assets/img/youtube.png'
import ig from '../assets/img/instagram.png'
import tt from '../assets/img/tiktok.png'

const ContactPages = () => {
  return (
    <>
    <section className="pt-36 pb-5">
      <div className="container">
        <div className="lg:max-w-7xl lg:mx-auto lg:px-10px md:grid md:grid-cols-2 md:gap-4">
          <div className="w-full lg:flex lg:flex-col">
            <div className="">
              <h1 className="text-3xl font-semibold md:text-4xl">Get In Touch With Us</h1>
                <h3 className="text-sm py-4 md:text-lg">
                  Biggest Blank Apparel And Custom T-shirt in Indonesia.
                </h3>
            </div>
            <div className="self-end">
              <h2 className="text-3xl font-[500] md:text-4xl">affah HQ</h2>
              <div className="py-4 md:grid md:grid-cols-2 md:gap-2 lg:bottom-0">
                <div>
                 <h3 className="md:text-lg">Contact Info</h3>
                 <div className="py-4 md:text-md">
                   021 - 626581234 
                 </div>
                </div>
                <div className="">
                  <h3 className="md:text-lg">Adress</h3>
                  <div className="py-4 md:text-md">
                    Jl. Gandawijaya N0.140-142 ,Cimahi Tengah, Kota Cimahi
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="hidden md:block">
              <img src={ilustrasi} alt="" className="w-full" />
            </div>
            <div className="flex flex-col gap-y-3 text-xs">
              <h3 className="text-base font-[500] w-full md:text-lg pt-3">We are on Social</h3>
              <ul className="flex justify-between md:text-base">
                <li className="flex items-center">
                  <img src={tt} alt="" className="w-6 mr-2" />
                  <a href="">Tiktok</a>
                </li>
                <li className="flex items-center">
                  <img src={yt} alt="" className="w-6 mr-2" />
                  <a href="">Youtube</a>
                </li>
                <li className="flex items-center">
                  <img src={ig} alt="" className="w-6 mr-2" />
                  <a href="">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ContactPages
