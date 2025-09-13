import { AuthPage } from "@/components/features/auth/auth";
const data = {
  title: "Register",
  description: "Fill in your details below to create a new account."
}
export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <AuthPage data={data}   formType="register"/>
      </div>
    </div>
  );
}
