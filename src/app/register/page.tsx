import { Footer } from "@/components/footer/footer";
import CompanyRegistry from "@/components/forms/company-registry";
import Header from "@/components/nav/header";
import { WavyBackground } from "@/components/ui/wavy-background";

export default async function Register() {
  return (
    <>
      <Header />
      <WavyBackground>
        <main className="flex w-screen h-max justify-center">
          <CompanyRegistry />
        </main>
      </WavyBackground>
      <Footer />
    </>
  );
}
