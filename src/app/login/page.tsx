import { Footer } from "@/components/footer/footer";
import CompanyLogin from "@/components/forms/company-login";
import Header from "@/components/nav/header";
import { WavyBackground } from "@/components/ui/wavy-background";

export default async function Login() {
  return (
    <>
      <Header />
      <WavyBackground>
        <main className="flex w-screen h-screen justify-center">
          <CompanyLogin />
        </main>
      </WavyBackground>
      <Footer />
    </>
  );
}
