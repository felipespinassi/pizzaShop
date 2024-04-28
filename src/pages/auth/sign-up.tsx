import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
});
type SignUpForm = z.infer<typeof signUpForm>;

export default function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();

  async function handleSignUp(data: SignUpForm) {
    console.log(data);
    toast.success("Restaurante cadastrado com sucesso!", {
      action: {
        label: "Login",
        onClick: () => {
          navigate("/sign-in");
        },
      },
    });
    await new Promise((resolve) => setTimeout(resolve, 3000));
  }
  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8 ">
        <Button variant={"ghost"} asChild className="absolute right-8 top-8">
          <Link to={"/sign-in"} className="">
            Fazer login
          </Link>
        </Button>

        <div className="w-[340px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center ">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e comece suas vendas!
            </p>
          </div>
          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2 ">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <Input
                id="restaurantName"
                {...register("restaurantName")}
                type="text"
              />
            </div>
            <div className="space-y-2 ">
              <Label htmlFor="managerName">Seu nome</Label>
              <Input
                id="managerName"
                {...register("managerName")}
                type="text"
              />
            </div>
            <div className="space-y-2 ">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" {...register("email")} type="email" />
            </div>
            <div className="space-y-2 ">
              <Label htmlFor="phone">Seu celular</Label>
              <Input id="phone" {...register("phone")} type="tel" />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Finalizar cadastro
            </Button>
            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos{" "}
              <a className="underline underline-offset-4" href="">
                termos de serviço
              </a>{" "}
              e{" "}
              <a className="underline underline-offset-4" href="">
                políticas de privacidade.
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
