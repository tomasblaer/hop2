import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Box } from "@/components/icons/box";
import { SaleIcon } from "@/components/icons/saleicon";
import { Analytics } from "@/components/icons/analytics";
import { Separator } from "@/components/ui/separator";
import { SignOut } from "@/components/icons/signout";
import { getToken, removeToken } from "@/app/actions";
import LogoutButton from "./logout-button";

async function getCompanyName() {
  const token = await getToken();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/company`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token!.value}`,
    },
  });
  const data = await res.json();
  return data.name;
}

export default async function SidePanel() {
  const companyName = await getCompanyName();

  return (
    <>
      <div className="pb-12 h- bg-gradient-to-r from-red-700 to-rose-500">
        <div className="space-y-4 pt-4 pb-2">
          <div className="py-2">
            <h2 className="mb-4 text-nowrap px-5 text-2xl text-slate-100 font-extrabold">
              {companyName}
            </h2>
            <Separator className="h-1 bg-gradient-to-r from-red-900 to-rose-700" />
            <div className="space-y-1 mt-3">
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="hover:bg-red-500 transition duration-150 mr-8 ml-8 justify-center flex gap-2 bg-red-800 text-white font-semibold text-md"
              >
                <Link href="/dashboard">
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
                <Link href="/dashboard/sales">
                  <SaleIcon />
                  Sölur
                </Link>
              </Button>
              {/* <Button
                asChild
                variant="ghost"
                size="sm"
                className="hover:bg-red-500 transition duration-150 mr-8 ml-8 justify-center flex gap-2 bg-red-800 text-white font-semibold text-md"
              >
                <Link href="/dashboard/analytics">
                  <Analytics />
                  Skýrslur
                </Link>
              </Button> */}
            </div>
          </div>
        </div>
        <Separator className="h-1 bg-gradient-to-r from-red-900 to-rose-700" />
      </div>
      <LogoutButton />
    </>
  );
}
