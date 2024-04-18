import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SaleIcon } from "../icons/saleicon";
import { Box } from "../icons/box";

export default function MobileFooter() {
  return (
    <div className="fixed bottom-0 w-full py-4 bg-black lg:hidden block">
      <div className="md:max-w-screen-2xl mx-auto items-center w-full justify-between">
        <div className="flex justify-start w-fit">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="w-fit hover:bg-red-500 transition duration-150 bg-red-800 mx-2 justify-center flex gap-2 text-white font-semibold text-md"
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
            className="hover:bg-red-500 transition duration-150 justify-center flex gap-2 bg-red-800 text-white font-semibold text-md"
          >
            <Link href="/dashboard/sales">
              <SaleIcon />
              Sölur
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
