"use client";
import ItemPanel from "@/components/dashboard/item-panel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col w-full">
      <ItemPanel showButton={true} />
      <ScrollArea className="h-5/6 flex-1 bg-slate-100">
        <div className="grid grid-cols-5 gap-6 p-4 h-fit">
          <Skeleton className="h-[382px] w-[292px] rounded-lg bg-slate-50" />
          <Skeleton className="h-[382px] w-[292px] rounded-lg bg-slate-50" />
          <Skeleton className="h-[382px] w-[292px] rounded-lg bg-slate-50" />
          <Skeleton className="h-[382px] w-[292px] rounded-lg bg-slate-50" />
          <Skeleton className="h-[382px] w-[292px] rounded-lg bg-slate-50" />
          <Skeleton className="h-[382px] w-[292px] rounded-lg bg-slate-50" />
          <Skeleton className="h-[382px] w-[292px] rounded-lg bg-slate-50" />
          <Skeleton className="h-[382px] w-[292px] rounded-lg bg-slate-50" />
          <Skeleton className="h-[382px] w-[292px] rounded-lg bg-slate-50" />
          <Skeleton className="h-[382px] w-[292px] rounded-lg bg-slate-50" />
        </div>
      </ScrollArea>
    </div>
  );
}
