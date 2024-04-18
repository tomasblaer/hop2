"use client";
import ItemPanel from "@/components/dashboard/item-panel";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col w-full">
      <ItemPanel showButton={false} />
      <div className="grid grid-cols-3 gap-6 p-4 h-fit">
        <Skeleton className="h-[460px] w-[480px] rounded-md" />
        <Skeleton className="h-[460px] w-[920px] rounded-md row-span-2" />
      </div>
    </div>
  );
}
