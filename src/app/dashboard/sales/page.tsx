import { getToken } from "@/app/actions";
import ItemPanel from "@/components/dashboard/item-panel";
import Link from "next/link";
import moment from "moment";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { DollarSign } from "lucide-react";
import SaleCards from "@/components/dashboard/salecard";

async function fetchSalesNonEmpty() {
  const token = await getToken();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sales`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token!.value}`,
    },
  });
  const data = await res.json();

  await Promise.all(
    data.map(async (sale: any) => {
      const items = await fetchItemsInSale(sale.id);
      sale.items = items;
      return sale;
    })
  );

  return data.filter((sale: any) => sale.items.length > 0);
}

async function fetchItemsInSale(saleId: string) {
  const token = await getToken();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/items/sale/${saleId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token!.value}`,
      },
    }
  );
  const data = await res.json();
  return data;
}

export default async function Sales() {
  const data = await fetchSalesNonEmpty();

  return (
    <div className="flex flex-col justify-between w-full">
      <SaleCards data={data} />
    </div>
  );
}
