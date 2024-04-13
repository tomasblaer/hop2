import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="items-center gap-x-2 hidden md:flex p-2 rounded-md w-fit">
        <Image src="/logo.svg" alt="Kassi" width={30} height={30} />
        <p className="text-lg font-extrabold text-white">Varningur</p>
      </div>
    </Link>
  );
};
