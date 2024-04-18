"use client";

import { removeToken } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { SignOut } from "../icons/signout";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = useCallback(() => {
    removeToken();
    router.push("/");
  }, [router]);

  return (
    <Button
      asChild
      size="sm"
      className="ml-2 gap-1 bottom-2 overflow-hidden fixed h-10 text-white font-semibold"
      onClick={handleLogout}
    >
      <Link href="/">
        <SignOut />
        Útskráning
      </Link>
    </Button>
  );
}
