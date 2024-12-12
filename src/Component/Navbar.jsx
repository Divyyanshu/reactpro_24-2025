import { FaGithub } from "react-icons/fa";
import { RiTranslate2 } from "react-icons/ri";
import { FaRegMoon } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <main className=" h-md-24 flex flex-row items-center gap-8 px-5 py-5 justify-between">
        <div className="flex gap-5">
        <IoLogoReact className="text-[45px] text-[#087EA4]"/>
         <p className="text-[#5E687E] gap-4 pt-3 text-[15px]">v19</p>
        </div>
        <div>
          <input
            type="text"
            className="bg-[#EBECF0] w-[580px] border-solid text-sm rounded-lg border-1 border-[#5E687E] px-20 py-2 "
            placeholder="Search doc...!"
          />
        </div>
        <div className="flex gap-10">
          <a href="">Learn</a>
          <a href="">Reference</a>
          <a href="">Community</a>
          <a href="">Blog</a>
        </div>
        <div className="flex gap-5">
       <a href=""><FaGithub className="text-[#5E687E] text-2xl"/></a>
       <a href=""><RiTranslate2 className="text-[#5E687E] text-2xl"/></a>
       <a href=""><FaRegMoon className="text-[#5E687E] text-2xl"/></a>
        </div>
        <div></div>
      </main>
    </>
  );
};

export default Navbar;
