"use client"; // This must be at the very top of your file

import Image from "next/image";
import navy from "./../images/navy.png";
import mint from "./../images/mint.png";
import ocean from "./../images/ocean.png";
import { useState } from "react";

const WatchImages = () => {
  // State to manage the currently displayed image and color
  const [selectedImage, setSelectedImage] = useState(navy);
  const [selectedColor, setSelectedColor] = useState("Navy");

  // Function to handle image change based on color
  const handleImageChange = (image, color) => {
    setSelectedImage(image);
    setSelectedColor(color);
  };

  return (
    <div className="grid grid-cols-[1fr,auto] place-items-center w-fit">
      <Image
        src={selectedImage}
        alt={`${selectedColor} Watch`}
        width={400}
        height={400}
      />
      {/* image previews below  */}
      <div className="row-start-2 col-span-1 w-full mt-4 flex justify-between">
        <button
          onClick={() => handleImageChange(navy, "Navy")}
          className="grid grid-cols-1 grid-rows-1 h-min hover:scale-105 transition-all"
        >
          <div
            className={
              " bg-[#778090] h-[66%]  w-[140%] self-end row-span-full col-span-full rounded-2xl transform translate-x-[-15%] -z-10"
            }
          ></div>
          <Image
            src={navy}
            alt={`${"Navy"} Watch`}
            width={100}
            height={100}
            className="row-span-full col-span-full"
          />
        </button>
        <button
          onClick={() => handleImageChange(mint, "Mint")}
          className="grid grid-cols-1 grid-rows-1 h-min hover:scale-105 transition-all"
        >
          <div
            className={
              "h-[66%]  w-[140%] self-end row-span-full col-span-full rounded-2xl transform translate-x-[-15%] -z-10 bg-[#8EDCD6]"
            }
          ></div>
          <Image
            src={mint}
            alt={`${selectedColor} Watch`}
            width={100}
            height={100}
            className="row-span-full col-span-full"
          />
        </button>
        <button
          onClick={() => handleImageChange(ocean, "Ocean")}
          className="grid grid-cols-1 grid-rows-1 h-min hover:scale-105 transition-all"
        >
          <div
            className={
              "h-[66%]  w-[140%] self-end row-span-full col-span-full rounded-2xl transform translate-x-[-15%] -z-10 bg-[#E5D3D1]"
            }
          ></div>

          <Image
            src={ocean}
            alt={`${selectedColor} Watch`}
            width={100}
            height={100}
            className="row-span-full col-span-full"
          />
        </button>
      </div>
      {/* side buttons  */}

      <div className="col-start-2 grid gap-y-12 grid-rows-3 grid-cols-2 relative">
        <div className="absolute inset-y-0 left-1/2 border-l-2 border-dotted border-white -z-10"></div>

        <div
          onClick={() => handleImageChange(navy, "Navy")}
          
          className={`w-8 h-8 rounded-full cursor-pointer ${
            selectedColor === "Navy"
              ? "bg-[#404354] outline outline-4 outline-white drop-shadow-xl"
              : "bg-[#404354] hover:outline outline-2 outline-white hover:drop-shadow-md transition-all"
          } col-span-2 row-start-1`}
        ></div>
        <div
          onClick={() => handleImageChange(mint, "Mint")}
          className={`w-8 h-8 rounded-full cursor-pointer ${
            selectedColor === "Mint"
              ? "bg-[#58d7c4] outline outline-4 outline-white drop-shadow-xl"
              : "bg-[#58d7c4] hover:outline outline-2 outline-white hover:drop-shadow-md transition-all"
          } col-span-2 row-start-2`}
        ></div>
        <div
          onClick={() => handleImageChange(ocean, "Ocean")}
          className={`w-8 h-8 rounded-full cursor-pointer ${
            selectedColor === "Ocean"
              ? "bg-[#f2cec6] outline outline-4 outline-white drop-shadow-xl"
              : "bg-[#f2cec6] hover:outline outline-2 outline-white hover:drop-shadow-md transition-all"
          } col-span-2 row-start-3`}
        ></div>

        {/* <div className="w-8 h-8 rounded-full outline outline-2 outline-white bg-[#404354] hover:outline-[5px] cursor-pointer col-span-2 row-start-1"></div>
          <div className="w-8 h-8 rounded-full outline outline-2 outline-white bg-[#58d7c4] hover:outline-[5px] cursor-pointer col-span-2 row-start-2"></div>
          <div className="w-8 h-8 rounded-full outline outline-2 outline-white bg-[#f2cec6] hover:outline-[5px] cursor-pointer col-span-2 row-start-3"></div> */}
      </div>
    </div>
  );
};

export default WatchImages;
