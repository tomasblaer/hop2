import Link from "next/link";
import { ScrollArea } from "../ui/scroll-area";
import ItemPanel from "./item-panel";
import { Button } from "../ui/button";
import { DollarSign, Receipt } from "lucide-react";
import moment from "moment";
import { sale } from "@/lib/types";

type SaleCardProps = {
  data: sale[];
};

export default function SaleCards({ data }: SaleCardProps) {
  return (
    <>
      <ItemPanel showButton={false} />
      <ScrollArea className="h-5/6 flex-1 bg-slate-100">
        <div className="grid grid-cols-4 gap-2 p-2">
          {data.map((sale: any, index: number) => (
            <Link key={index} href={`/dashboard/sale/${sale.id}`}>
              <Button
                key={sale.id}
                variant="outline"
                className="w-full bg-slate-50"
              >
                <div className="text-lg font-bold flex">
                  <Receipt className="my-auto" />
                  Sala - {moment(sale.saleAt).format("ddd-MM-YYYY : HH:mm")}
                </div>
              </Button>
            </Link>
          ))}
        </div>
      </ScrollArea>
    </>
  );
}
