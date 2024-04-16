'use server'
import ItemCard from "./_components/itemcard";
import { Suspense } from "react";
import Loading from "./loading";
import { getToken } from "../actions";

async function fetchDashboard() {
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

export default async function Dashboard() {

  const itemData = await fetchDashboard();

  return (
      <div>
        <div className="max-w-4xl mx-auto">
          <Suspense fallback={<Loading />}>
            <ItemCard data={itemData} />
          </Suspense>
        </div>
      </div>
  );
}