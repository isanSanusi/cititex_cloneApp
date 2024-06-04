import Gallery from "../API/gallery.js";

const GallerySection = () => {
  const gallerys = Gallery;

  return (
    <section className="mt-28 lg:mt-40">
      <h2 className="text-center text-dark font-semibold text-xl lg:text-[1.5rem] mb-8">
        affah collections
      </h2>
      <div className="container font-inter flex flex-wrap justify-evenly lg:scale-95 xl:max-w-7xl xl:px-0">
        {gallerys.map((gallery) => (
          <div
            key={gallery.id}
            className="w-[11.5rem] md:w-[21rem] lg:w-[23%] shadow-lg overflow-hidden mb-5 bg-white"
          >
            <img
              src={gallery.image}
              alt={gallery.name}
              className="hover:scale-110 hover:-rotate-3 transition duration-300 ease-out"
            />
            <div className="px-1 py-4">
              <h3 className="font-bold text-lg mb-2 text-center">
                {gallery.name}
              </h3>
              <p className="text-[11px] xl:text-[14px] lg:text-[12px] text-center">
                {gallery.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
