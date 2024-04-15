'use client'

import { useEffect, useState } from "react"
import { getToken } from "../actions";
import { itemType } from "@/lib/types";

export default function Dashboard() {
  const [itemTypes, setItemTypes] = useState<itemType[]>([]);

  useEffect(() => {
    async function fetchItemTypes() {
      const token = await getToken();
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/itemType`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token!.value}`,
        },
      });
      const data = await res.json();
      console.log(data);
      setItemTypes(data);
    }
    fetchItemTypes();
  }, []);

  return (
    <main className="flex w-screen h-screen justify-center flex-col">
      <h1>Dashboard</h1>
      <div>
      </div>
    </main>
  )
}