import { Logo } from "../logo";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <div className="z-40 fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-gradient-to-r from-pink-400 to-sky-400 flex items-center ">
        <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
            <Logo />
            <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
                <Button size="sm" variant="outline" asChild>
                    <Link href="/sign-in">
                    Innskráning
                    </Link>
                </Button>
                <Button className="hover:opacity-85 transition bg-gradient-to-r from-purple-600 to-pink-400" size="sm" asChild>
                    <Link href="/sign-up">
                    Nýskráning
                    </Link>
                </Button>
            </div>
        </div>
    </div>
)
}