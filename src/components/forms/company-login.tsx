"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { redirect } from "next/navigation";
import { setToken } from "@/app/actions";
import { useRouter } from 'next/navigation'
import { useToast } from "../ui/use-toast";


export default function CompanyLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { toast } = useToast();

  async function login() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (!res.ok) {
      toast({
        title: 'Inskráning mistókst',
        description: 'Notandanafn eða lykilorð er rangt',
      })
      return;
    }
    setToken(data.token);
    router.push('/dashboard');
  };

  return (
    <Card className={cn("h-fit my-auto")}>
      <CardHeader>
        <CardTitle>Skrá Inn</CardTitle>
        <CardDescription>
          Skráðu þig inn
        </CardDescription>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Notandanafn</Label>
              <Input id="username" placeholder="Notandanafn" onInput={(e) => setUsername(e.currentTarget.value)}/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Lykilorð</Label>
              <Input type="password" id="password" placeholder="Lykilorð" onInput={(e) => setPassword(e.currentTarget.value)}/>
            </div>
            <div className="flex">
              <Button type="submit" onClick={(e) => login()}>Skrá inn</Button>
            </div>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
}
