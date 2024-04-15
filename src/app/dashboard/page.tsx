'use client'

import { useEffect, useState } from "react"
import { getToken } from "../actions";

type itemType = {
  id: number;
  name: string;
  price: number;
  imageId: string;
  companyId: number;
}

export default function Dashboard() {
  const [itemTypes, setItemTypes] = useState<itemType[]>([]);

  useEffect(() => {
    async function fetchDashboard() {
      const token = await getToken();
      console.log(token);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/itemType`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token!.value}`,
        },
      });
      const data = await res.json();
      setItemTypes(data);
    }
    fetchDashboard();
  }, []);

  return (
    <main className="flex w-screen h-screen justify-center flex-col">
      <h1>Dashboard</h1>
      <div>
      </div>
    </main>
  )
}