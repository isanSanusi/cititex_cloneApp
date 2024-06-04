

const ModalMenu = () => {
    return (
            <>
                <span className="flex w-10 h-5 bg-transparent absolute -top-4 left-[17rem]"></span>
                <div className="w-1/2 px-5">
                    <h3 className="text-[.9rem] border-b-2 pb-2">Apparel</h3>
                    <ul className="flex flex-col gap-2 mt-3">
                        <li className="flex group justify-between items-center text-[0.8rem] cursor-pointer hover:shadow-sm py-1">T-Shirts <span className="text-[1.2rem] group-hover:animate-slide">&rarr;</span></li>
                        <li className="flex justify-between text-[0.8rem] cursor-pointer items-center group">Sport Shirt <span className="text-[1.2rem] group-hover:animate-slide">&rarr;</span></li>
                        <li className="flex justify-between text-[0.8rem] cursor-pointer group items-center">Fleece <span className="text-[1.2rem] group-hover:animate-slide">&rarr;</span></li>
                        <li className="flex justify-between text-[0.8rem] cursor-pointer group items-center">Outdoor <span className="text-[1.2rem] group-hover:animate-slide">&rarr;</span></li>
                        <li className="flex justify-between text-[0.8rem] cursor-pointer group items-center">Headwear <span className="text-[1.2rem] group-hover:animate-slide">&rarr;</span></li>
                        <li className="flex justify-between text-[0.8rem] cursor-pointer group items-center">Footwear <span className="text-[1.2rem] group-hover:animate-slide">&rarr;</span></li>
                    </ul>
                </div>
                <div className="w-1/2 px-5">
                    <h3 className="text-[.9rem] pb-2 border-b-2">Heat Transfer</h3>
                    <ul className="flex flex-col gap-2 mt-3">
                        <li className="flex justify-between text-[0.8rem] cursor-pointer group items-center">Polyflex <span className="text-[1.2rem] group-hover:animate-slide">&rarr;</span></li>
                        <li className="flex justify-between text-[0.8rem] cursor-pointer group items-center">Heat Press <span className="text-[1.2rem] group-hover:animate-slide">&rarr;</span></li>
                    </ul>
                </div>
          </>
    )
}

export default ModalMenu