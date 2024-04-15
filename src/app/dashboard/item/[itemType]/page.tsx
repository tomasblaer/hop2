import { getToken } from "@/app/actions";
import { itemType } from "@/lib/types";
import { useEffect, useState } from "react";

export default function ItemTypePage({ params }: { params: { itemType: string } }) {
  const [itemTypeInfo, setItemTypeInfo] = useState<itemType[]>([]);

  useEffect(() => {
    async function fetchItemTypeInfo() {
      const token = await getToken();
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/itemType/${params.itemType}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token!.value}`,
        },
      });
      const data = await res.json();
      setItemTypeInfo(data);
    }
    fetchItemTypeInfo();
  }, [params.itemType]);

}