import { Logo } from "../logo";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <div className="z-40 fixed top-0 w-full h-14 px-4 shadow-sm bg-black flex items-center ">
        <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
            <Logo />
            <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
                <Button size="sm" asChild>
                    <Link href="/login">
                    Innskráning
                    </Link>
                </Button>
                <Button className="hover:opacity-85 transition bg-gradient-to-r from-red-800 to-rose-600" size="sm" asChild>
                    <Link href="/register">
                    Nýskráning
                    </Link>
                </Button>
            </div>
        </div>
    </div>
)
}