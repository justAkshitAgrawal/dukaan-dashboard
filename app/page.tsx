import { GoQuestion } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { IoChevronDown } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";

import megaphone from "../public/megaphone.svg";
import drop from "../public/drop.svg";
import Image from "next/image";
import sort from "../public/Sort.svg";
import Card from "@/components/Card";
import InvoiceTable from "@/components/InvoiceTable";
import TablePagination from "@/components/TablePagination";

const Home = () => {
  return (
    <div className="w-[1216px] min-h-screen">
      <Header />
      <div className="h-[1482px] bg-[#fafafa]  border-r">
        <div className="pt-7 px-5">
          <div className="flex items-center w-full justify-between">
            <p className="text-[20px] font-medium">Overview</p>
            <div className="text-[16px] flex gap-1 items-center cursor-pointer bg-white border border-[#D9D9D9] rounded-[4px] px-3 py-1">
              <p>Last Month</p>
              <IoChevronDown />
            </div>
          </div>

          <div className="flex items-center mt-5 justify-between">
            <Card title="Online orders" description="231" />
            <Card title="Amount received" description="₹23,92,312.19" />
          </div>

          <div className="mt-8">
            <p className="text-[20px] text-[#1A181E] font-medium">
              Transactions | This Month
            </p>
          </div>

          <div className=" bg-white p-2 rounded-lg mt-4 shadow-md shadow-[#1A181E0A]">
            <div className="flex items-center justify-between">
              <div className="flex items-center  px-[8px] border border-[#D9D9D9] w-fit rounded-[4px] py-[6px] space-x-2">
                <FiSearch className="text-[14px] text-black/40" />
                <input
                  type="text"
                  placeholder="Search by order ID..."
                  className="  bg-transparent border-none outline-none text-[14px] text-black/60"
                  name=""
                  id=""
                />
              </div>

              <div className="flex space-x-3">
                <div className="flex items-center space-x-2 border border-[#D9D9D9] py-[6px] px-[12px] rounded-[4px] cursor-pointer">
                  <p>Sort</p>
                  <Image src={sort} alt="sort" />
                </div>

                <div className="flex items-center border border-[#D9D9D9] py-[6px] px-[12px] rounded-[4px] cursor-pointer">
                  <FiDownload />
                </div>
              </div>
            </div>

            {/* Table */}
            <InvoiceTable />

            <div className="mt-2 pb-2">
              <TablePagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="px-5 py-3 border-b border-[#D9D9D9] border-r flex w-full items-center gap-[16px]">
      <div className="flex items-center w-[400px]">
        <h1 className="text-[15px]">Payments</h1>

        <div className="flex items-center  ml-8 space-x-1 cursor-pointer">
          <GoQuestion className="w-[14px] h-[14px]" />
          <p className="text-[12px]">How it works</p>
        </div>
      </div>

      {/* Searchbar */}
      <div className="flex items-center bg-[#F2F2F2] w-[380px] px-2 py-2 space-x-2 rounded-md">
        <FiSearch className="text-black/50" />
        <input
          type="text"
          placeholder="Search features, tutorials, etc."
          name=""
          id=""
          className="placeholder:text-black/50 placeholder:text-[15px] bg-transparent border-none outline-none w-full"
        />
      </div>

      <div className="w-[400px] flex items-center justify-end gap-[12px]">
        <Image src={megaphone} alt="megaphone" className="cursor-pointer" />
        <Image src={drop} alt="drop" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Home;
