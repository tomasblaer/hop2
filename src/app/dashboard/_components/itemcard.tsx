import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getToken } from "@/app/actions";

import { itemType } from "@/app/types";


export default function ItemCard() {
    const [itemtypes, setItemtype] = useState<itemType[]>([]);
    useEffect(() => {
      async function fetchDashboard() {
        const token = await getToken();
        console.log(token);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/itemType`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token!.value}`,
          },
        });
        const data = await res.json();
        console.log(data);
        setItemtype(data);
      }
      fetchDashboard();
    }, []);
  
    return (
        <div>
          {itemtypes.map((itemtype) => (
            <div key={itemtype.id} className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
            <Link href={`/itemtype/${itemtype.id}`}>
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/itemType${itemtype.imageId}`}
                width={500}
                height={300}
                className="sm:rounded-t-lg group-hover:opacity-70 transition duration-200 ease-in"
                alt={itemtype.name}
              ></Image>
              <div className="p-2">
                <h2 className="text-lg font-bold truncate">{itemtype.name}</h2>
                <p className="line-clamp-2 text-md">{itemtype.price}</p>
              </div>
            </Link>
          </div>
          ))}
        </div>
    );
}
