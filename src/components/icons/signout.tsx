import Image from "next/image";

export function SignOut() {
    return (
        <div>
            <Image
                src="/icons_svg/signout.svg"
                alt="SignOut"
                width={24}
                height={24}
                style={{filter: "invert(1)"}}
            />
        </div>
    )
}