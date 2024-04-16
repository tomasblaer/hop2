"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { itemTypeImage } from "@/lib/types";
import { Settings } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ItemTypeCard({ data }: { data: itemTypeImage }) {
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  return (
    <div
      key={data.id}
      className="cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 transition-shadow duration-200"
    >
      {data?.imageUrl ? (
        <Image
          src={data?.imageUrl}
          width={500}
          height={300}
          className="sm:rounded-t-lg h-5/6 object-cover"
          alt={data.name}
        ></Image>
      ) : null}
      <div className="flex justify-between">
        <div className="p-2">
          <h2 className="text-lg font-bold truncate">{data.name}</h2>
          <p className="line-clamp-2 text-md">{`${data.price} kr`}</p>
        </div>
        <Button variant="outline" className="my-auto mr-2" onClick={(e) => setEditDialogOpen(true)}>
          <Settings size={24} />
        </Button>
        <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
          <DialogContent>
            <DialogHeader >
              <DialogTitle>Breyta vöru</DialogTitle>
            </DialogHeader>
            <div className="grid py-4 gap-4">
              <Label htmlFor="name" className="font-bold">
                Nafn á vöru
              </Label>
              <Input
                id="name"
                type="text"
                className="input"
                placeholder={data.name}
              />
              <Label htmlFor="price" className="font-bold">
                Verð
              </Label>
              <Input
                id="price"
                type="number"
                className="input"
                placeholder={data.price.toString()}
              />
              <Label htmlFor="image" className="font-bold">
                Mynd
              </Label>
              <p className="text-xs">
                <strong>*</strong>Núverandi mynd eyðist ekki ef vistað er án
                myndar
              </p>
              <Input id="image" type="file" className="input" />
              <DialogDescription className="ml-auto">
                <Button variant="secondary" className="mx-2">
                  Vista breytingar
                </Button>
                <Button variant="destructive" className="mx-2">
                  Eyða vöru
                </Button>
              </DialogDescription>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
