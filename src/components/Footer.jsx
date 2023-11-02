import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="text-white bg-black mt-14 grid grid-rows-3 gap-3 mx-auto p-4">
      <div>
        <h2 className="text-3xl text-center">Contact</h2>
      </div>
      <div>
        <h3 className="text-lg">
        Calle Las Damas esq 10ma # 4, Reparto Los Tres Ojos Santo Dgo. Este R.D. 
          <div>
          <span className="text-red-700">jose.gonzalez@powerbox.com</span>
          </div>
        </h3>
      </div>
      <div className="flex text-[40px] pt-[20px]">
        <AiFillLinkedin />
        <AiOutlineGithub />
        <AiFillGoogleCircle />
      </div>
    </div>
  );
};

export default Footer;
