import { Footer } from "@/components/footer/footer";
import CompanyRegistry from "@/components/forms/company-registry";
import Header from "@/components/nav/header";

export default async function Register() {
  return (
    <>
      <Header />
      <main className="flex w-screen h-max justify-center">
        <CompanyRegistry />
      </main>
      <Footer />
    </>
  );
}
