import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "./Title";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";

const Search = ({ setIsSearchModal }) => {
  return (
    <div
      className="fixed w-screen h-screen  z-50 top-0 left-0 after:content-[''] after:w-screen after:h-screen 
    after:bg-white after:absolute after:top-0 after:left-0  grid place-content-center after:opacity-60
    "
    >
      <OutsideClickHandler
        onOutsideClick={() => {
          setIsSearchModal(false);
        }}
      >
        <div className="w-full h-full ">
          <div className="relative z-50 w-[600px] h-[600px] bg-white border-2 border-gray-500 p-5">
            <div className="w-full flex justify-end">
              <button
                className="hover:bg-primary  transition-all"
                onClick={() => setIsSearchModal(false)}
              >
                <IoCloseOutline size={25} />
              </button>
            </div>

            <Title addClass="text-[40px] text-center">Search</Title>
            <input
              type="text"
              placeholder="Search..."
              className="border w-full my-5"
            />
            {/* Aranan ürünlerin listelenmesi */}

            <ul className="grid gap-2">
              <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                <div className="relative flex">
                  <Image
                    src="/images/f1.png"
                    alt="Food"
                    width={48}
                    height={48}
                  />{" "}
                </div>
                <span className="font-bold">Good Pizza</span>
                <span className="font-bold">10$</span>
              </li>
              <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                <div className="relative flex">
                  <Image
                    src="/images/f1.png"
                    alt="Food"
                    width={48}
                    height={48}
                  />{" "}
                </div>
                <span className="font-bold">Good Pizza</span>
                <span className="font-bold">10$</span>
              </li>
            </ul>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
