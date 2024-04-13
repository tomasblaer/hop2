import CompanyLogin from "@/components/forms/company-login";
import { setToken } from "../actions";


export default async function Register() {

  return (
    <main className="flex w-screen h-screen justify-center">
      <CompanyLogin />
    </main>
  )

}