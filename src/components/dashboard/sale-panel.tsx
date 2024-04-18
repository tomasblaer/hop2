import { item, sale, saleDetail } from "@/lib/types";
import moment from "moment";
import Image from "next/image";
import SaleTable from "../table/sale/sale-table";
import { columns } from "../table/sale/columns";

type SaleInfoPageProps = {
  itemData: item[];
  saleData: sale;
};

export default function SaleInfoPage({
  itemData,
  saleData,
}: SaleInfoPageProps) {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-2 gap-2 p-4">
      <div className="col-span-3 lg:col-span-1 cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 transition-shadow duration-200 h-fit w-full bg-slate-50">
        <Image
          src={"/bill.svg"}
          width={500}
          height={300}
          className="sm:rounded-t-lg h-[370px] w-auto mx-auto object-scale-down scale-90 hover:scale-95 transition duration-200 ease-in"
          alt={saleData.id}
        ></Image>
        <div className="flex justify-between">
          <div className="p-2">
            <h2 className="text-lg font-bold truncate">
              Sala á {itemData.length}{" "}
              {itemData.length === 1 ? "vöru" : "vörum"}
            </h2>
            <span className="line-clamp-2 text-md">
              {moment(saleData!.saleAt).format("ddd-MM-YYYY : HH:mm")}
            </span>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <SaleTable data={itemData} columns={columns} />
      </div>
    </div>
  );
}
