import { getToken } from "@/app/actions";
import ItemTypeCard from "../../_components/itemtype-card";
import { itemTypeImage } from "@/lib/types";

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
    <div className="m-4">
      <ItemTypeCard data={data} />
    </div>
  )
}
