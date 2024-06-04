import CustomDesign from "../API/Custom";

const CustomDesignSection = () => {
  const customs = CustomDesign;
  return (
    <section className="mt-20">
      <div className="container">
        <div className="mb-10 xl:mx-auto">
          <h2 className="text-center text-dark font-semibold text-xl lg:text-[1.5rem]">
            Kreasikan Design unikmu
          </h2>
          <p className="text-[10px] md:text-sm text-center px-20 pt-2">
            Membuat t-shirt dan jaket custom satuan dengan desain kamu sendiri
            kini menjadi semakin mudah dan menyenangkan di affah collections
          </p>
        </div>
        <div className="grid grid-cols-2 xl:mx-auto xl:px-16 lg:grid-cols-4 lg:gap-5 gap-3 xl:max-w-7xl">
          {customs.map((custom) => (
            <img
              key={custom.id}
              src={custom.image}
              alt={custom.id}
              className="filter lg:hover:scale-105 transition-all duration-200 ease-in-out"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomDesignSection;
