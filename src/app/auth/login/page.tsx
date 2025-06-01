import { AuthPage } from "@/components/features/auth/auth";
const data = {
  title: "Login",
  description: "Enter your email below to login to your account"
}
export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <AuthPage data={data} formType="login" />
      </div>
    </div>
  );
}
