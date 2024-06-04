import React, { useState, useEffect } from 'react';

const ButtonBoxLeft = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      // Array yang berisi path relatif gambar
      const imagePaths = ['productTshirt', 'addImage', 'addText', 'quoteBy', 'save' ];

      // Dynamic import untuk setiap gambar dalam array
      const importedImages = await Promise.all(imagePaths.map(path => import(`../../assets/img/ButtonEditor/${path}.png`)));
      
      // Mendapatkan URL gambar default dari hasil import
      const imageUrls = importedImages.map(image => image.default);

      // Menetapkan array URL gambar ke state
      setImages(imageUrls);
    };

    importImages();
  }, []);

  return (
    <div className="flex border-[1px] shadow-lg rounded-md mb-5">
      {images.map((imageUrl, index) => (
        <div className="w-full flex flex-col hover:bg-slate-300 items-center p-2 m-0">
          <img key={index} src={imageUrl} alt={index} className="w-8 h-8" />
        </div>
      ))}
    </div>
  );
};


export default ButtonBoxLeft;
