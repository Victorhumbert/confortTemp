import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { RequestClimatizador, RequestDisableClimatizador } from "@/api";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "react-responsive";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";

export const Climatizador = () => {
  const { user } = useAuth();
  const FormTemp = useForm({
    defaultValues: {
      climatizacao: 22, // Valor padrão da temperatura
    },
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 624px)" });

  async function onSubmit() {
    const { climatizacao } = FormTemp.getValues();
    if (!user) {
      toast.error("Usuário não autenticado.");
      return;
    }
    try {
      toast.loading("Enviando dados...");
      const response = await RequestClimatizador({ climatizacao }, +user.id);
      toast.dismiss();
      toast.success("Dados enviados!");
    } catch (error) {
      toast.dismiss();
      toast.error(`Erro ao enviar dados: ${error}`);
      console.error(error);
    } finally {
      toast.dismiss();
    }
  }

  async function handleDisableClimatizador() {
    if (!user) {
      toast.error("Usuário não autenticado.");
      return;
    }
    try {
      toast.loading("Desativando climatizador...");
      const response = await RequestDisableClimatizador(user?.token, +user.id);
      toast.dismiss();
      toast.success("Climatizador desativado!");
    } catch (error) {
      toast.dismiss();
      toast.error(`Erro ao desativar climatizador: ${error}`);
      console.error(error);
    } finally {
      toast.dismiss();
    }
  }

  if (isDesktop) {
    return (
      <Dialog onOpenChange={() => false}>
        <DialogTrigger className="mx-auto my-2 grid" asChild>
          <Button>Climatizador</Button>
        </DialogTrigger>
        <DialogContent
          aria-describedby={undefined}
          className="sm:max-w-[425px]"
        >
          <DialogHeader>
            <DialogTitle>Qual temperatura deseja?</DialogTitle>
            <DialogDescription>
              Selecione a temperatura ideal para seu ambiente.
            </DialogDescription>
          </DialogHeader>
          <Form {...FormTemp}>
            <form
              className="w-1/2 mx-auto grid gap-2 justify-center"
              onSubmit={FormTemp.handleSubmit(onSubmit)}
            >
              <FormField
                control={FormTemp.control}
                name="climatizacao"
                render={() => (
                  <FormItem>
                    <FormLabel>Temperatura</FormLabel>
                    <div className="flex gap-1 items-center">
                      <FormControl {...FormTemp.register("climatizacao")}>
                        <Slider
                          defaultValue={[22]}
                          max={31}
                          min={16}
                          step={1}
                        />
                      </FormControl>
                      <span className="p-1 px-3 bg-muted rounded-md">
                        {FormTemp.getValues("climatizacao")
                          ? FormTemp.getValues("climatizacao")
                          : 22}
                      </span>
                    </div>
                  </FormItem>
                )}
              />
              <div className="flex gap-2">
                <Button type="submit" variant="default">
                  Ativar climatizador
                </Button>
                <Button
                  type="button"
                  variant="destructive"
                  onClick={handleDisableClimatizador}
                >
                  Desativar climatizador
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    );
  } else {
    return (
      <Drawer fadeFromIndex={0} snapPoints={[1]}>
        <DrawerTrigger className="mx-auto my-2 grid" asChild>
          <Button>Climatizador</Button>
        </DrawerTrigger>
        <DrawerContent className="mb-10">
          <DrawerHeader>
            <DrawerTitle>Qual temperatura deseja?</DrawerTitle>
            <DrawerDescription>
              Selecione a temperatura ideal para o ambiente.
            </DrawerDescription>
          </DrawerHeader>
          <Form {...FormTemp}>
            <form
              className="w-1/2 mx-auto grid gap-2"
              onSubmit={FormTemp.handleSubmit(onSubmit)}
            >
              <FormField
                control={FormTemp.control}
                name="climatizacao"
                render={() => (
                  <FormItem>
                    <FormLabel>Temperatura</FormLabel>
                    <div className="flex gap-1 items-center">
                      <FormControl {...FormTemp.register("climatizacao")}>
                        <Slider
                          defaultValue={[22]}
                          min={16}
                          max={31}
                          step={1}
                        />
                      </FormControl>
                      <span className="p-1 px-3 bg-muted rounded-md">
                        {FormTemp.getValues("climatizacao")
                          ? FormTemp.getValues("climatizacao")
                          : 22}
                      </span>
                    </div>
                  </FormItem>
                )}
              />
              <Button type="submit" variant="default">
                Ativar climatizador
              </Button>
              <Button
                type="button"
                variant="destructive"
                onClick={handleDisableClimatizador}
              >
                Desativar climatizador
              </Button>
            </form>
          </Form>
        </DrawerContent>
      </Drawer>
    );
  }
};
