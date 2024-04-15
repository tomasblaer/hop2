'use client'

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import Header from "@/components/nav/header";
import { Footer } from "@/components/footer/footer";

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
    <>
      <Header />
        <WavyBackground className="max-w-4xl mx-auto pb-40">
            <div className="flex mt-20 items-center justify-center flex-col">
            <div
              className={cn(
                "flex mt-20 items-center justify-center flex-col",
                headingFont.className
              )}
            >
              <h1 className="hover:translate-y-2 transition duration-300 text-3xl mt-20 mb-4 md:text-6xl text-center bg-gradient-to-r from-red-700 to-rose-500 text-white p-4 rounded-md w-fit">
                Hvað áttu til?📦
              </h1>
              <div className="hover:translate-y-2 transition duration-300 text-3xl md:text-5xl bg-gradient-to-r from-red-700 to-rose-500 text-white px-4 p-2 rounded-md w-fit">
                Passaðu upp á þitt!
              </div>
            </div>
            <div
              className={cn(
                "hover:translate-y-2 transition duration-300 text-sm md:text-xl bg-gradient-to-r from-red-700 to-rose-500 text-white mt-4 max-w-xs md:max-w-2xl text-center mx-auto p-2 rounded-md w-fit",
                textFont.className
              )}
            >
              Eina leiðin til að halda utan um lagerinn. Varningur hjálpar þér að halda utan um birgðarstöðuna, sölurnar og viðskpitin.
            </div>
            <Button className="hover:opacity-85 hover:translate-y-2 transition duration-300 mt-6 bg-gradient-to-r from-red-900 to-rose-700" size="lg" asChild>
              <Link href="/sign-up">Prófa núna!</Link>
            </Button>
          </div>
        </WavyBackground>
      <Footer />
    </>
  );
}
