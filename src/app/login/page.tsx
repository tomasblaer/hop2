import { Footer } from "@/components/footer/footer";
import CompanyLogin from "@/components/forms/company-login";
import Header from "@/components/nav/header";

export default async function Login() {
  return (
    <>
      <Header />
      <main className="flex w-screen h-screen justify-center">
        <CompanyLogin />
      </main>
      <Footer />
    </>
  );
}
