import Image from "next/image"


export function SaleIcon() {
    return (
        <div>
            <Image
                src="/icons_svg/sale.svg"
                alt="Sale"
                width={24}
                height={24}
            />
        </div>
    )
}