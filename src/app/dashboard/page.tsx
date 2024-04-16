'use server'
import ItemCard from "./_components/itemcard";
import { Suspense } from "react";
import Loading from "./loading";
import { getToken } from "../actions";
import { Separator } from "@/components/ui/separator";

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

async function fetchCompanyName() {
  const token = await getToken();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/company:id`, {
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

  const companyName = await fetchCompanyName();
  const itemData = await fetchDashboard();

  return (
    <div className="w-full">
      <h1 className="text-4xl text-center text-white mt-5" data={companyName}> </h1>
      <Separator className="mt-3 h-1"/>
          <div className="col-span-1">
            <Suspense fallback={<Loading />}>
              <ItemCard data={itemData} />
            </Suspense>
          </div>
      </div>
  );
}