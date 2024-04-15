'use client'

import { getToken } from "@/app/actions";
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
  }, [params.saleId]);

  return (
    <main className="flex w-screen h-screen justify-center flex-col">
      <h1>Sale</h1>
      <div>
      </div>
    </main>
  )

}