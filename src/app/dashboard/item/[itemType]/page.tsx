"use server";
import { getToken } from "@/app/actions";
import ItemTypeCard from "../../../../components/forms/itemtype-edit-card";
import { item, itemTypeImage, itemTypeUpdate } from "@/lib/types";
import ItemPanel from "@/components/dashboard/item-panel";
import ItemTable from "@/components/table/item-table";
import { columns } from "@/components/table/columns";

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

async function fetchItemsInType(id: string): Promise<item[]> {
  "use server";
  const token = await getToken();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/items/type/${id}`,
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

export default async function ItemTypePage({
  params,
}: {
  params: { itemType: string };
}) {
  const data = await fetchItemTypeInfo(params.itemType);
  if (data.imageId) {
    await fetchItemImage(data);
  }
  const items = await fetchItemsInType(data.id);
  console.log(items);


  return (
    <div className="flex flex-col w-full justify-between bg-slate-100">
      <ItemPanel showButton={false} />
      <div className="p-4 w-full grid grid-cols-3 flex-1">
        <ItemTypeCard data={data} updateItemTypeFunction={updateItemType} deleteItemTypeFunction={deleteItemType} />
        <div className="col-start-2 col-span-2">
          <ItemTable columns={columns} data={items} />
        </div>
      </div>
    </div>
  );
}
