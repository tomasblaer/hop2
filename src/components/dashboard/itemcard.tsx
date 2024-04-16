"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { itemTypeImage } from "@/lib/types";

export default function ItemCard({ data }: { data: itemTypeImage[]}) {
  const [itemtypes, setItemtype] = useState<itemTypeImage[]>([]);
  useEffect(() => {
    setItemtype(data);
  }, [data]);

  return (
    <div className="grid grid-cols-5 bg-slate-100">
      {itemtypes?.map((itemtype) => (
        <div
          key={itemtype.id}
          className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 h-96 bg-slate-50 "
        >
          <Link href={`/dashboard/item/${itemtype.id}`} className="flex flex-col justify-end h-full">
            <Image
              src={itemtype?.imageUrl ?? '/logo.svg'}
              width={500}
              height={300}
              className="sm:rounded-t-lg h-5/6 object-cover group-hover:opacity-70 scale-90 group-hover:scale-95 transition duration-200 ease-in"
              alt={itemtype.name}
            ></Image>
            <div className="p-2">
              <h2 className="text-lg font-bold truncate">{itemtype.name}</h2>
              <p className="line-clamp-2 text-md">{`${itemtype.price} kr`}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
