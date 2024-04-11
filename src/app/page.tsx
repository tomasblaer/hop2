'use client'

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});



export default function Home() {
  
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api');
      const data = await res.json();
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <div className="flex mt-20 items-center justify-center flex-col">
      <div
        className={cn(
          "flex mt-20 items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <h1 className="text-3xl mt-20 md:text-6xl text-center text-neutral-800 mb-6">
          Hvað áttu til?📦
        </h1>
        <div className="text-3xl md:text-5xl bg-gradient-to-r from-red-800 to-red-400 text-white px-4 p-2 rounded-md w-fit">
          Passaðu upp á þitt!
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Eina leiðin til að halda utan um lagerinn. Varningur hjálpar þér að halda utan um birgðarstöðuna, sölurnar og viðskpitin.
      </div>
      <Button className="hover:opacity-85 transition mt-6" size="lg" asChild>
        <Link href="/sign-up">Prófa núna!</Link>
      </Button>
    </div>
  );
}
