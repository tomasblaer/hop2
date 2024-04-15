import Image from "next/image";

export function Box() {
  return (
    <div>
        <Image
            src="/icons_svg/box.svg"
            alt="Box"
            width={26}
            height={26}
        />
    </div>
  );
}