import { BiLogoApple, BiSearch, BiShoppingBag } from "react-icons/bi";

const Header = () => {
  return (
    <div className=" grid grid-flow-col items-center">
      <BiLogoApple className="size-16 text-white transition-all hover:scale-105 cursor-pointer" />
      <div>
        <ul className="flex justify-between">
          <li>
            <a
              href="#"
              className="text-lg text-white  font-medium hover:outline hover:outline-1 hover:outline-white py-1 px-4 rounded-full transition-all"
            >
              Mac
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-lg text-white font-medium hover:outline hover:outline-1 hover:outline-white py-1 px-4 rounded-full transition-all"
            >
              iPhone
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-lg text-white font-medium hover:outline hover:outline-1 hover:outline-white py-1 px-4 rounded-full transition-all"
            >
              iPad
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-lg font-semibold bg-white text-[#B6CCDA] py-1 px-4 rounded-full transition-all"
            >
              iWatch
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-lg text-white font-medium hover:outline hover:outline-1 hover:outline-white py-1 px-4 rounded-full transition-all"
            >
              Support
            </a>
          </li>
        </ul>
      </div>
      <div className="justify-self-end flex gap-2 ">
        <div className="rounded-full scale-110 hover:bg-white p-3 text-white  cursor-pointer hover:text-[#B6CCDA]">
          <BiSearch />
        </div>
        <span className="w-[1px] h-6 bg-white self-center"></span>{" "}
        {/* Divider line */}
        <div className="scale-110 rounded-full  hover:bg-white p-3 text-white  cursor-pointer hover:text-[#B6CCDA]">
          <BiShoppingBag />
        </div>
      </div>
    </div>
  );
};

export default Header;
