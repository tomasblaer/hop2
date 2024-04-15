import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Box } from "@/components/icons/box";
import { SaleIcon } from "@/components/icons/saleicon";
import { Analytics } from "@/components/icons/analytics";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/logo";
import { SignOut } from "@/components/icons/signout";

export default function SidePanel() {
  return (
    <>
      <div className="pb-12 w-1/6 h-screen bg-gradient-to-r from-red-700 to-rose-500 rounded-r-3xl">
        <div className="space-y-4 py-4">
          <div className="py-2">
            <h2 className="mb-4 px-5 text-2xl text-slate-100 font-extrabold">
              Stjórnborð
            </h2>
            <Separator className="h-1 bg-gradient-to-r from-red-900 to-rose-700"/>
            <div className="space-y-1 mt-3">
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="hover:bg-red-500 transition duration-150 mr-8 ml-8 justify-center flex gap-2 bg-red-800 text-white font-semibold text-md"
              >
                <Link href="">
                  <Box />
                  Vörur
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="hover:bg-red-500 transition duration-150 mr-8 ml-8 justify-center flex gap-2 bg-red-800 text-white font-semibold text-md"
              >
                <Link href="">
                  <SaleIcon />
                  Sölur
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="hover:bg-red-500 transition duration-150 mr-8 ml-8 justify-center flex gap-2 bg-red-800 text-white font-semibold text-md"
              >
                <Link href="">
                  <Analytics />
                  Skýrslur
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <Separator className="h-1 bg-gradient-to-r from-red-900 to-rose-700"/>
      </div>
        <Button
          asChild
          size="sm"
          className="ml-2 gap-1 bottom-2 overflow-hidden fixed h-10 text-white font-semibold"
        >
          <Link href="/">
            <SignOut/>
            Útskráning
          </Link>
        </Button>
    </>
  );
}