import { ComponentProps } from "react";
import Image from "next/image";

export function Box() {
  return (
    <div>
        <Image
            src="/icons_svg/box.svg"
            alt="Box"
            width={28}
            height={28}
        />
    </div>
  );
}