import { getToken } from "@/app/actions";
import { itemType } from "@/lib/types";

async function fetchItemTypeInfo(itemTypeId: string) {
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
  console.log(data);
}

export default async function ItemTypePage({
  params,
}: {
  params: { itemType: string };
}) {

  const data = await fetchItemTypeInfo(params.itemType);


  return (
    <div>
      {/* Todo */}
    </div>
  )
}
