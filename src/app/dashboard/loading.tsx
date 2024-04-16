'use client'
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="grid grid-cols-3 gap-6 p-4 h-fit">
      <Skeleton className="h-[68px] w-[460px] rounded-md" />
      <Skeleton className="h-[68px] w-[460px] rounded-md" />
      <Skeleton className="h-[68px] w-[460px] rounded-md" />
      <Skeleton className="h-[68px] w-[460px] rounded-md" />
      <Skeleton className="h-[68px] w-[460px] rounded-md" />
      <Skeleton className="h-[68px] w-[460px] rounded-md" />
      <Skeleton className="h-[68px] w-[460px] rounded-md" />
      <Skeleton className="h-[68px] w-[460px] rounded-md" />
      <Skeleton className="h-[68px] w-[460px] rounded-md" />
      <Skeleton className="h-[68px] w-[460px] rounded-md" />
      <Skeleton className="h-[68px] w-[460px] rounded-md" />
    </div>
  );
}