import { navItems } from "@/constants/navItems";
import logo from "../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";
import { CiWallet } from "react-icons/ci";

const SideBar = () => {
  return (
    <div className="w-[250px] bg-[#1E2640] p-3 relative">
      <div className="flex items-center space-x-2 w-full">
        <div>
          <Image
            src={logo}
            alt="Logo"
            className="rounded-[10px]"
            width={55}
            height={55}
          />
        </div>
        <div className="flex items-center w-full justify-between ">
          <div className="text-white flex flex-col">
            <h3 className="text-[15px] font-medium leading-[22px]">Nishyan</h3>
            <Link
              href={"/"}
              className="text-[13px] underline underline-offset-2"
            >
              Visit Store
            </Link>
          </div>
          <FaChevronDown className="text-white cursor-pointer" />
        </div>
      </div>

      {/* Vertical Nav */}
      <div className="mt-7 font-inter flex flex-col justify-between ">
        <div className="font-inter flex flex-col space-y-1 ">
          {navItems.map((item) => {
            return (
              <div
                key={item.name}
                className={`flex items-end space-x-3 pl-3 hover:bg-white/10 pb-2 rounded-[4px] cursor-pointer ${
                  item.name === "Payments" && "bg-white/10"
                }`}
              >
                <div>
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={20}
                    height={20}
                    className="mt-2"
                  />
                </div>
                <h3 className="text-white text-[14px] font-medium ">
                  {item.name}
                </h3>
              </div>
            );
          })}
        </div>

        <div className="bg-[#353C53] absolute bottom-4 p-2 px-3 left-4 w-[192px] rounded-[4px] flex space-x-2">
          <div className="bg-white/10 w-fit p-2 rounded-[4px]">
            <CiWallet className="text-white h-[24px] w-[24px]" />
          </div>

          <div className="text-white">
            <p className="text-[13px]">Available credits</p>
            <p className="font-medium text-[16px]">222.10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
