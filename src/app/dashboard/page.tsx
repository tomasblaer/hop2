"use server";
import ItemCard from "../../components/dashboard/itemcard";
import { getToken } from "../actions";
import { itemTypeImage } from "@/lib/types";
import { ScrollArea } from "@/components/ui/scroll-area";
import ItemPanel from "@/components/dashboard/item-panel";

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
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/itemType/image/${data.id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token!.value}`,
      },
    }
  );
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
    <div className="flex flex-col justify-between w-full">
      <ItemPanel showButton={true}/>
      <ScrollArea className="h-5/6 flex-1 bg-slate-100">
        <ItemCard data={itemData} />
      </ScrollArea>
    </div>
  );
}
