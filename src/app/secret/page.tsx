import { Footer } from "@/components/footer/footer";
import Header from "@/components/nav/header";
import { WavyBackground } from "@/components/ui/wavy-background";
import Image from "next/image";

export default function Privacy() {
  return (
    <>
      <Header />
      <WavyBackground>
        <main className="flex flex-col items-center justify-center h-screen">
          <h1 className="hover:scale-110 transition duration-300 text-3xl mt-10 mb-4 md:text-6xl text-center bg-gradient-to-r from-red-700 to-rose-500 text-white p-4 rounded-md w-fit">
            Þú fannst leynitakkann minn
          </h1>
          <Image
            src="/icons_svg/raccoon-rave.gif"
            alt="Analytics"
            width={300}
            height={300}
          />
        </main>
      </WavyBackground>
      <Footer />
    </>
  );
}
