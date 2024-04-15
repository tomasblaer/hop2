import CompanyLogin from "@/components/forms/company-login";
import { WavyBackground } from "@/components/ui/wavy-background";

export default async function Login() {

  return (
    <WavyBackground>
      <main className="flex w-screen h-screen justify-center">
        <CompanyLogin />
      </main>
    </WavyBackground>
  )

}