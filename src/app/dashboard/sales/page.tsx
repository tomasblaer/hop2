'use client';
import { getToken } from "@/app/actions";
import ItemPanel from "@/components/dashboard/item-panel";
import Link from "next/link";
import moment from "moment";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

async function fetchSales() {
  const token = await getToken();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sales`, {
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items/sale/${saleId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token!.value}`,
    },
  });
  const data = await res.json();
  return data;
}

export default function Sales() {
  const [data, setData] = useState([]);
  const { toast } = useToast();

  useEffect(() => {
    fetchSales().then((data) => setData(data));
  }, []);

  const handleSaleClick = useCallback((sale: any) => {
    fetchItemsInSale(sale.id).then((items) => {
      const joined: string[] = []
      if (items.length > 0) {
        items.forEach((item: any) => {
          joined.push(`${item.location ?? 'Engin staðsetning'} - ${item.comment ?? 'Engin athugasemd'}`)
        });
      }
      toast({
        title: "Vörur í sölu:",
        description: joined.length > 0 ? joined.map((word, index) => <p key={index}>{word}</p>) : "Engar vörur í sölu",
      })
    });
    
  }, [toast]);

  return (
    <div className="flex flex-col justify-between w-full">
      <ItemPanel showButton={false} />
      <ScrollArea className="h-5/6 flex-1 bg-slate-200">
          <div className="flex flex-col">
            {data.map((sale: any, index: number) => (
                <Button
                  className="text-lg font-bold bg-slate-100 rounded-md w-1/3 text-center mx-auto p-2 my-2 hover:text-gray-600"
                  key={sale.id}
                  variant="outline"
                  onClick={() => handleSaleClick(sale)}
                >
                  <div className="text-lg font-bold">
                    Sala - {moment(sale.saleAt).format("ddd-MM-YYYY : HH:mm")}
                  </div>
                </Button>
            ))}
          </div>
      </ScrollArea>
    </div>
  );
}
