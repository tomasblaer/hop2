"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { toast } from "../ui/use-toast";

export default function CompanyRegistry() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  async function registerCompany(name: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/company`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });
    const data = await res.json();
    if (!res.ok) {
      toast({
        title: 'Nýskráning mistókst',
        description: 'Eitthvað fór úrskeiðis',
      })
      return;
    }
    setPassword(data.admin.password);
    setName(data.admin.username);
    console.log(data);
  };

  return (
    <Card className={cn("h-fit my-auto bg-transparent")}>
      <CardHeader>
        <CardTitle className="text-white">Skrá Fyrirtæki</CardTitle>
        <CardDescription className="text-white">
          Nýskráðu fyrirtæki og fyrirtækisnotanda
        </CardDescription>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            {
              password && (
                <div className="flex flex-col space-y-1.5 text-white">
                  <p>Notendanafn: {name}</p>
                  <p>Lykilorð: {password}</p>
                </div>
              )
            }
            <div className="flex flex-col space-y-1.5">
              <Label className="text-white" htmlFor="name">Nafn</Label>
              <Input id="name" placeholder="Nafn á fyrirtæki" onInput={(e) => setName(e.currentTarget.value)}/>
            </div>
            <div className="flex">
              <Button className="bg-gradient-to-r from-red-900 to-rose-700" type="submit" onClick={(e) => {registerCompany(name);}}>
                Skrá Fyrirtæki
              </Button>
            </div>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
}

