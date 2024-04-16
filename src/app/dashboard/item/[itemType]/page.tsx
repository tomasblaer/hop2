"use server";
import { getToken } from "@/app/actions";
import ItemTypeCard from "../../../../components/forms/itemtype-edit-card";
import { itemTypeImage, itemTypeUpdate } from "@/lib/types";
import ItemPanel from "@/components/dashboard/item-panel";

async function fetchItemTypeInfo(itemTypeId: string): Promise<itemTypeImage> {
  const token = await getToken();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/itemType/${itemTypeId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token!.value}`,
      },
    }
  );
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

async function updateItemType(id: string, data: itemTypeUpdate) {
  "use server";
  const token = await getToken();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/itemType/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token!.value}`,
    },
    body: JSON.stringify(data),
  });
  const updatedData = await res.json();
  return updatedData;
}

async function deleteItemType(id: string) {
  "use server"
  const token = await getToken();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/itemType/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token!.value}`,
    },
  });
  const data = await res.json();
  return data;
}

export default async function ItemTypePage({
  params,
}: {
  params: { itemType: string };
}) {
  const data = await fetchItemTypeInfo(params.itemType);
  if (data.imageId) {
    await fetchItemImage(data);
  }

  return (
    <div className="flex flex-col w-full justify-between bg-slate-100">
      <ItemPanel showButton={false} />
      <div className="p-4 w-full grid grid-cols-3 flex-1">
        <ItemTypeCard data={data} updateItemTypeFunction={updateItemType} deleteItemTypeFunction={deleteItemType} />
      </div>
    </div>
  );
}
