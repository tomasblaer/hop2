"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { itemTypeImage, itemTypeUpdate } from "@/lib/types";
import { Settings } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { getToken, revalidatePathAction } from "@/app/actions";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Nýtt nafn verður að vera a.m.k. 3 stafir",
  }),
  price: z.coerce
    .number({
      required_error: "Nýtt verð má ekki vera tómt",
      invalid_type_error: "Nýtt verð verður að vera tala heiltala",
    })
    .int()
    .positive({
      message: "Nýtt verð verður að vera jákvæð tala",
    }),
  image: z.any(),
});

type ItemTypeCardProps = {
  data: itemTypeImage;
  updateItemTypeFunction: (id: string, data: itemTypeUpdate) => void;
  deleteItemTypeFunction: (id: string) => void;
};

export default function ItemTypeCard({
  data,
  updateItemTypeFunction,
  deleteItemTypeFunction,
}: ItemTypeCardProps) {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [atDeleteConfirm, setAtDeleteConfirm] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { 
      name: data.name,
      price: data.price,
      image: "" 
    },
  });

  const updateItemTypeImage = useCallback(async (id: string ,image: File) => {
    const token = await getToken();
    const formData = new FormData();
    formData.append("image", image);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/itemType/image/${id}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token!.value}`,
      },
      body: formData,
    });
    const data = await res.json();
    return data;
  }, []);

  const onSubmit = useCallback(
    (values: z.infer<typeof formSchema>) => {
      if (values.name === data.name && values.price === data.price && !values.image) {
        return;
      }
      updateItemTypeFunction(data.id, { name: values.name, price: values.price });
      if (values.image) {
        updateItemTypeImage(data.id, values.image);
      }
      revalidatePathAction(`/dashboard/item/${data.id}`);
      setEditDialogOpen(false);
    },
    [data, updateItemTypeFunction, updateItemTypeImage]
  );

  const onDelete = useCallback((id: string) => {
    deleteItemTypeFunction(id);
    setEditDialogOpen(false);
    revalidatePathAction('/dashboard');
    router.push('/dashboard');
  }, [deleteItemTypeFunction, router]);

  return (
    <div
      key={data.id}
      className="cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 transition-shadow duration-200 h-fit w-full bg-slate-50"
    >
      <Image
        src={data?.imageUrl ?? '/logo.svg'}
        width={500}
        height={300}
        className="sm:rounded-t-lg h-[370px] w-auto mx-auto object-scale-down scale-90 hover:scale-95 transition duration-200 ease-in"
        alt={data.name}
      ></Image>
      <div className="flex justify-between">
        <div className="p-2 md:w-full w-1/2">
          <h2 className="text-lg font-bold truncate w-full">{data.name}</h2>
          <span className="line-clamp-2 text-md">{`${data.price} kr`}</span>
        </div>
        <Button
          variant="outline"
          className="my-auto mr-2"
          onClick={(e) => setEditDialogOpen(true)}
        >
          <Settings size={24} />
        </Button>
        <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Breyta vörutegund</DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="py-2">
                      <FormLabel>Nafn á vöru</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder={data.name} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem className="py-2">
                      <FormLabel>Verð</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          placeholder={data.price.toString()}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field: { value, onChange, ...fieldProps } }) => (
                    <FormItem className="py-2">
                      <FormLabel>Mynd</FormLabel>
                      <FormControl>
                        <Input
                          {...fieldProps}
                          placeholder="Mynd"
                          type="file"
                          onChange={(event) =>
                            onChange(
                              event.target.files && event.target.files[0]
                            )
                          }
                        />
                      </FormControl>
                      <FormDescription>
                        <span className="text-xs select-none cursor-default">
                          *Núverandi mynd eyðist ekki ef vistað er án myndar
                        </span>
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogDescription className="flex justify-end py-2">
                  <Button type="submit" variant="secondary" className="mx-2">
                    Vista breytingar
                  </Button>
                  <Button variant="destructive" className="mx-2" onClick={() => atDeleteConfirm ? onDelete(data.id) : setAtDeleteConfirm(true)}>
                    {atDeleteConfirm ? "Ert þú viss?" : "Eyða vöru"}
                  </Button>
                </DialogDescription>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
