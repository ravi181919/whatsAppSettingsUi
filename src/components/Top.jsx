import React from "react";
import { MdQrCode } from "react-icons/md";
import { IoIosArrowDropdown } from "react-icons/io";
function Top() {
  return (
    <div className="w-full  flex items-center justify-center">
      <div className="w-full  rounded-md text-white md:text-black flex items-center justify-start p-2 flex-col">
        <div className="w-full flex justify-between gap-1 items-center border-t border-zinc-300/10 border-b px-3 py-2">
          <div className="flex gap-2 justify-center items-center">
            <div className="h-[70px] w-[70px] overflow-hidden rounded-full">
              <img
                src="https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg"
                alt="#"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-1 w-fit">
              <h1 className="font-semibold text-md ">Ravi Gupta</h1>
              <h4 className="text-xs tracking-wide opacity-50">Radhey Radhey</h4>
            </div>
          </div>
          <div className="flex gap-3 justify-center items-center text-2xl text-green-500">
            <span className="font-extrabold">
              <MdQrCode />
            </span>
            <span className="font-extrabold">
              <IoIosArrowDropdown />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top;
