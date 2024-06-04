import React, { useState, useEffect } from 'react';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      // Array yang berisi path relatif gambar
      const imagePaths = [
        'White','Sport Grey','Sapphire','Sand','Salmon','Royal Blue','Red Heather','Red','Purple','Navy Heather','Orange','Black Heather','Aqua Sky','Burgundy Heather','Butter','Charcoal','Carolina Blue','Chestnut','Dark Chocolate','Daisy','Forest Green','Dark Green Heather','Gold','Navy','Heliconia','Green Ash','Irish Green','Light Pink','Lilac','Lime','Mustard','Military Green','Maroon'
      ];

      // Dynamic import untuk setiap gambar dalam array
      const importedImages = await Promise.all(imagePaths.map(path => import(`../../assets/img/colors_index/99-${path}.jpg`)));
      
      // Mendapatkan URL gambar default dari hasil import
      const imageUrls = importedImages.map(image => image.default);

      // Menetapkan array URL gambar ke state
      setImages(imageUrls);
    };

    importImages();
  }, []);

  return (
    <div className="flex justify-start flex-wrap items-center gap-2">
      {images.map((imageUrl, index) => (
        <div className='h-5 w-5'>
          <img key={index} src={imageUrl} alt={`Image ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
