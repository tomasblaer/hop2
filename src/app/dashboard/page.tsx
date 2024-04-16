'use server'
import ItemCard from "./_components/itemcard";
import { Suspense } from "react";
import Loading from "./loading";
import { getToken } from "../actions";
import { itemTypeImage } from "@/lib/types";

async function fetchDashboard(): Promise<itemTypeImage[]> {
  const token = await getToken();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/itemType`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token!.value}`,
    },
  });
  const data = await res.json();
  return data;
}

async function fetchItemImage(data: itemTypeImage): Promise<void> {
  const token = await getToken();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/itemType/image/${data.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token!.value}`,
    },
  });
  const image = await res.json();
  data.imageUrl = image;
}

export default async function Dashboard() {

  let itemData = await fetchDashboard();
  for (let i = 0; i < itemData.length; i++) {
    if (itemData[i].imageId) {
      await fetchItemImage(itemData[i]);
    }
  }

  return (
      <div>
        <div>
          <ItemCard data={itemData} />
        </div>
      </div>
  );
}