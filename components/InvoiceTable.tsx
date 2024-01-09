import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { FaSortDown } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";

const invoices = [
  {
    id: "#281209",
    orderDate: "7 July, 2023",
    totalAmount: "₹1,278.23",
    fees: "₹22",
  },
];
const InvoiceTable = () => {
  return (
    <div className="mt-3">
      <Table>
        <TableHeader className="bg-[#f2f2f2] !border-none text-black/30">
          <TableRow className=" !border-none">
            <TableHead className="w-[25%]  rounded-[4px]">Order ID</TableHead>
            <TableHead className="w-[25%] ">
              <div className="flex ">
                <p>Order date</p> <FaSortDown />
              </div>
            </TableHead>
            <TableHead className="w-[25%] text-right">Order amount</TableHead>
            <TableHead className="w-[25%] text-right  rounded-[4px]">
              <div className="flex items-center space-x-1 justify-end ">
                <p>Transaction fees</p>
                <MdInfoOutline />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {Array(23)
            .fill(invoices[0])
            .map((invoice) => (
              <TableRow key={invoice.id} className="text-[14px]">
                <TableCell className="font-medium py-3 text-[#146EB4] rounded-[4px] cursor-pointer">
                  {invoice.id}
                </TableCell>
                <TableCell>{invoice.orderDate}</TableCell>
                <TableCell className="text-right">
                  {invoice.totalAmount}
                </TableCell>
                <TableCell className="text-right">{invoice.fees}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InvoiceTable;
