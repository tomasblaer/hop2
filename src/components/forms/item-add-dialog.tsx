"use client";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogDescription,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useState } from "react";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { getToken, revalidatePathAction } from "@/app/actions";

const formSchema = z.object({
  location: z.any(),
  comment: z.any(),
});

export default function AddItemDialog({ id }: { id: string }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const [open, setOpen] = useState(false);

  const onSubmit = useCallback(async (values: z.infer<typeof formSchema>) => {
    const token = await getToken();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/item/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token!.value}`,
      },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    setOpen(false);
    revalidatePathAction(`/dashboard/item/${id}`);
  }, [id]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          title="Bæta við vöru"
          onClick={() => setOpen(true)}
        >
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Skrá vöru</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="py-2">
                  <FormLabel>Staðsetning</FormLabel>
                  <FormControl>
                    <Input {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem className="py-2">
                  <FormLabel>Athugasemd</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogDescription className="flex justify-end py-2">
              <Button type="submit" variant="secondary" className="mx-2">
                Vista
              </Button>
            </DialogDescription>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
