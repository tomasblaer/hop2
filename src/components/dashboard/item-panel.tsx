"use client";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCallback, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { getToken, revalidatePathAction } from "@/app/actions";
import LogoutButton from "./logout-button";

const formSchema = z.object({
  name: z
    .string({
      required_error: "Nafnið má ekki vera tómt",
    })
    .min(3, {
      message: "Nafnið verður að vera a.m.k. 3 stafir",
    }),
  price: z.coerce
    .number({
      required_error: "Verðið má ekki vera tómt",
      invalid_type_error: "Verðið verður að vera tala heiltala",
    })
    .int()
    .positive({
      message: "Verðið verður að vera jákvæð tala",
    }),
  image: z.any(),
});

export default function ItemPanel({ showButton }: { showButton: boolean }) {
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = useCallback(async (data: z.infer<typeof formSchema>) => {
    let status = {};
    const token = await getToken();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/itemType`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token!.value}`,
      },
      body: JSON.stringify({ name: data.name, price: data.price }),
    });
    const item = await res.json();
    Object.assign(status, item);
    if (data.image) {
      const formData = new FormData();
      formData.append("image", data.image);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/itemType/image/${item.id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token!.value}`,
          },
          body: formData,
        }
      );
      const image = await res.json();
      Object.assign(status, image);
    }
    revalidatePathAction(`/dashboard`);
    setEditDialogOpen(false);
  }, []);

  return (
    <>
      <div className="flex justify-end pt-2 pb-2 bg-gradient-to-r from-rose-500 to-red-700 min-h-[72px]">
        <div className="block lg:hidden z-50 h-full w-full mb-auto">
          <LogoutButton />
        </div>
        {showButton && (
          <Button
            variant="destructive"
            className="mr-2 my-2"
            onClick={(e) => setEditDialogOpen(true)}
          >
            Bæta við vöru
          </Button>
        )}
      </div>
      <Separator className="h-1 bg-gradient-to-r from-rose-700 to-red-900" />
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Bæta við vöru</DialogTitle>
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
                      <Input {...field} placeholder={"Nafn"} />
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
                      <Input {...field} type="number" placeholder={"Verð"} />
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
                          onChange(event.target.files && event.target.files[0])
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogDescription className="flex justify-end py-2">
                <Button type="submit" variant="secondary" className="mx-2">
                  Bæta við
                </Button>
              </DialogDescription>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
