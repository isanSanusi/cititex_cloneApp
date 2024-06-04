import mockupDepan from "../../assets/img/T-shirt/front/99-Black.jpg";
import mockupBelakang from "../../assets/img/T-shirt/back/99-Black.jpg";
import mockupKiri from "../../assets/img/T-shirt/left/99-Black.jpg";
import mockupKanan from "../../assets/img/T-shirt/right/99-Black.jpg";
import mockupKerah from "../../assets/img/T-shirt/label/99-Black.jpg";

import ButtonBoxLeft from "../editor/ButtonEditor.jsx"

import label from "../../assets/img/label.png";
import { Share, Template, ZoomIn, ZoomOut } from "../../component/icons.jsx";
import ImageGallery from "../../component/editor/Pallete.jsx"

const EditorCustom = () => {
  return (
    <section className="flex justify-center align-center gap-5">
      <Editor />
      <Description />
    </section>
  );
};

function Editor() {

  return (
    <div className="w-full">
      <div className="flex border-[1px] shadow-lg rounded-md mb-5">
        <div className="w-full flex  flex-col hover:bg-slate-300 items-center p-2 m-auto">
          <img src={label} className="w-5 h-5 mb-4 mt-1" />
          <button className="text-[0.7rem] font-light mt-3">Watermark</button>
        </div>
        <div className="w-full flex justify-center flex-col hover:bg-slate-300 items-center">
          <span className="w-10 h-10">{<ZoomIn />}</span>
          <button className="text-[0.7rem] font-light mt-3">Zoom In</button>
        </div>
        <div className="w-full flex flex-col hover:bg-slate-300 items-center p-2 m-0">
           <span className="w-10 h-10">{<ZoomOut />}</span> 
          <button className="text-[0.7rem] font-light mt-3">Zoom Out</button>
        </div>
        <div className="w-full flex flex-col hover:bg-slate-300 items-center p-2 m-0">
           <span className="w-10 h-10">{<Template />}</span>
          <button className="text-[0.7rem] font-light mt-3">Template</button>
        </div>
        <div className="w-full flex flex-col hover:bg-slate-300 items-center p-2 m-0">
           <span className="w-10 h-10">{<Share />}</span>
          <button className="text-[0.7rem] font-light mt-3">Share</button>
        </div>
      </div>

      {/* CANVAS */}
      <div className="w-full">
        <img className="mx-auto" src={mockupDepan} />
      </div>
      {/* CANVAS END */}
      
      <div className="flex justify-between mt-5 gap-4 px-5 border">
        <div className="border-2 rounded-md overflow-hidden">
          <img src={mockupDepan} className="h-20 w-22" />
        </div>
        <div className="border-2 rounded-md overflow-hidden">
          <img src={mockupBelakang} className="h-20 w-22" />
        </div>
        <div className="border-2 rounded-md overflow-hidden">
          <img src={mockupKiri} className="h-20 w-22" />
        </div>
        <div className="border-2 rounded-md overflow-hidden">
          <img src={mockupKanan} className="h-20 w-22" />
        </div>
        <div className="border-2 rounded-md overflow-hidden">
          <img src={mockupKerah} className="h-20 w-22" />
        </div>
      </div>
    </div>
  );
}

function Description() {
  return (
    <>
    <div className="w-full">
      <ButtonBoxLeft />
      {/* Color pallete */}
      <div className="w-full">{<ImageGallery />}</div>

      <div className="flex justify-between mt-5 gap-4 px-5 border">
        <h2>Ini Box deskripsi</h2>
      </div>
    </div>
    </>
  );
}

export default EditorCustom;
