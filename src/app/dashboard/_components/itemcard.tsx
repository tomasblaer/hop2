import React from "react";

import Link from "next/link";
import Image from "next/image";
import Col from "react-bootstrap/Col";

import { itemType } from "@/app/types";

export default function ItemCard({ itemType }: { itemType: itemType }) {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/itemtype/${itemType.id}`}>
        <Image
          src={`${process.env.NEXT_PUBLIC_API_URL}/itemType${itemType.imageId}`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-70 transition duration-200 ease-in"
          alt={itemType.name}
        ></Image>
        <div className="p-2">
          <h2 className="text-lg font-bold truncate">{itemType.name}</h2>
          <p className="line-clamp-2 text-md">{itemType.price}</p>
        </div>
      </Link>
    </div>
  );
}
