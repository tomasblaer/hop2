import Link from "next/link"
import Image from "next/image"
import localFont from "next/font/local"

import { cn } from "@/lib/utils"




export const Logo = () => {
    return (
        <Link href="/">
            <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
                <Image 
                src="/logo.svg"
                alt="Varningur logo"
                width={30}
                height={30}
                />
                <p className="text-lg text-black pb-1">
                    Varningur
                </p>
            </div>
        </Link>
    )
}