import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const signInForm = z.object({
  email: z.string().email(),
});
type SignInForm = z.infer<typeof signInForm>;

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>();

  async function handleSignin(data: SignInForm) {
    console.log(data);
    toast.success("Enviamos um link de autenticação para o seu email", {
      action: {
        label: "Reenviar",
        onClick: () => {},
      },
    });
    await new Promise((resolve) => setTimeout(resolve, 3000));
  }
  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <div className="w-[340px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center ">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>
          <form onSubmit={handleSubmit(handleSignin)} className="space-y-4">
            <div className="space-y-2 ">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" {...register("email")} type="email" />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
