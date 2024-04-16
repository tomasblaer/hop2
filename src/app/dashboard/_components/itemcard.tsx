"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getToken } from "@/app/actions";
import { Button } from "@/components/ui/button";

import { itemType } from "@/app/types";

export default function ItemCard({ data }: { data: itemType[]}) {
  const [itemtypes, setItemtype] = useState<itemType[]>([]);
  useEffect(() => {
    setItemtype(data);
  }, [data]);

  return (
    <div className="mt-20 grid grid-cols-3 gap-2 p-8">
        {itemtypes?.map((itemtype) => (
          <div
            key={itemtype.id}
            className="group cursor-pointer sm:hover:shadow-slate-400 bg-gray-900 sm:shadow-md rounded-lg sm:m-2 transition-shadow duration-200"
          >
            <Link href={`/dashboard/item/${itemtype.id}`}>
              {/* <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/itemType${itemtype.imageId}`}
                width={500}
                height={300}
                className="sm:rounded-t-lg group-hover:opacity-70 transition duration-200 ease-in"
                alt={itemtype.name}
              ></Image> */}
              <div className="p-2">
                <h2 className="text-lg text-white font-bold truncate">{itemtype.name}</h2>
                <p className="line-clamp-2 text-white text-md">{itemtype.price} ISK.</p>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
}
