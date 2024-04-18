'use client'

import { getToken } from "@/app/actions";
import ItemPanel from "@/components/dashboard/item-panel";
import { saleDetail } from "@/lib/types";
import { useEffect, useState } from "react"



export default function SalePage({ params }: { params: { saleId: string } }) {
  const [itemsInSale, setItemsInSale] = useState<saleDetail[]>([]);

  useEffect(() => {
    async function fetchSale() {
      const token = await getToken();
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items/sale/${params.saleId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token!.value}`,
        },
      });
      const data = await res.json();
      setItemsInSale(data);
    }
    fetchSale();
  }, [itemsInSale, params.saleId]);

  return (
    <div className="flex flex-col w-full h-full justify-between bg-slate-100">
      <ItemPanel showButton={false} />
      <h1 className="h-full">Sala</h1>
    </div>
  )

}