
const TrackPages = () => {
  return (
    <div className="container mt-32 mb-32">
      <div className="flex justify-center items-center flex-col">
        <div className="text-center">
          <h1 className="text-[2rem] font-bold ">Monitor Your Order Status Here!</h1>
          <p className="text-[1.1rem] font-thin mt-1">Please enter proforma id and contact</p>
        </div>

        <div className="shadow-2xl rounded-2xl bg-slate-50 w-[70%] text-[1.2rem] px-10 py-12">
          <div className="rounded-full border-2 border-black flex">
            <label className="px-5 py-4" htmlFor="proforma">KDY</label>
            <input className=" w-full bg-transparent border-s-2 border-black pl-2 py-4 outline-none rounded-e-full " type="text" id="proforma" placeholder="Proforma Id" />
          </div>
          <div className="rounded-full border-black border-2 mb-5 mt-5">
            <label className="px-5 py-4" htmlFor="contact">+62</label>
            <input className="bg-transparent border-s-2 border-black pl-2 py-4 outline-none"  type="text" id="contact" placeholder="Contact Number"/>
          </div>
          <button className="w-full bg-dark rounded-full py-4 text-white px-20 hover:bg-white hover:text-black border-2 border-black cursor-pointer">Track &rarr;</button>
        </div>
      </div>
    </div>
  )
}

export default TrackPages
