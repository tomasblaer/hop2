import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Box } from "@/components/icons/box";
import { SaleIcon } from "@/components/icons/saleicon";

export default function SidePanel() {
  return (
    <>
      <div className="pb-12 w-1/6 h-screen bg-white rounded-lg">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Stjórnborð
            </h2>
            <div className="space-y-1">
              <Button
                asChild
                variant="ghost"
                className="hover:bg-slate-300 w-fit justify-start flex gap-2 bg-white px-3"
              >
                <Link href="">
                  <Box />
                  Vörur
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="hover:bg-slate-300 w-fit justify-start flex gap-2 bg-white px-3"
              >
                <Link href="">
                  <SaleIcon />
                  Sölur
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
