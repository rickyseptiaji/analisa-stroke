import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginForm from "./login/form";
import RegisterForm from "./register/form";

interface AuthPageProps extends React.ComponentProps<"div"> {
  data: {
    title: string;
    description: string;
  };
  formType: "login" | "register";
}

export function AuthPage({
  className,
  data,
  formType,
  ...props
}: AuthPageProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>{data.title} to your account</CardTitle>
          <CardDescription>{data.description}</CardDescription>
        </CardHeader>
        <CardContent>
          {formType === "login" ? <LoginForm data={data.title} /> : <RegisterForm data={data.title}/>}
        </CardContent>
      </Card>
    </div>
  );
}
