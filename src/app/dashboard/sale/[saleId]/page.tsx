import { getToken } from "@/app/actions";
import ItemPanel from "@/components/dashboard/item-panel";
import SaleInfoPage from "@/components/dashboard/sale-panel";
import SalePanel from "@/components/dashboard/sale-panel";
import { sale, saleDetail } from "@/lib/types";
import { Bot } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import { useEffect, useState } from "react";

async function fetchSale(saleId: string) {
  const token = await getToken();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sale/${saleId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token!.value}`,
    },
  });
  const data = await res.json();
  return data;
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

export default async function SalePage({
  params,
}: {
  params: { saleId: string };
}) {
  const items = await fetchItemsInSale(params.saleId);
  const sale = await fetchSale(params.saleId);

  if (Object.prototype.hasOwnProperty.call(sale, "message")) {
    return (
      <div className="flex flex-col w-full h-full justify-between bg-slate-100">
        <ItemPanel showButton={false} />
        <div className="w-full h-full flex flex-col">
          <div className="text-5xl font-semibold text-gray-400 select-none mx-auto flex">
            <Bot size={64} className="mx-2" />
            <span className="mt-auto">Hey! þessi sala er ekki til</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-full justify-between bg-slate-100">
      <ItemPanel showButton={false} />
      <div className="w-full h-full">
        <SaleInfoPage itemData={items} saleData={sale} />
      </div>
    </div>
  );
}
