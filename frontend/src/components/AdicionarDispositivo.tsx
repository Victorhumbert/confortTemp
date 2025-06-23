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
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { RequestCreateDispositivo } from "@/api";
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
import { useAuth } from "@/contexts/AuthContext";
import { Input } from "./ui/input";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispositivo } from "@/contexts/DispositivoContext";

const registerDispositivoSchema = z.object({
  nome: z
    .string({ message: "O nome do dispositivo é obrigatório" })
    .min(3, "O nome deve ter pelo menos 3 caracteres"),
  local: z.string({ message: "O local é obrigatório" }),
  //   codigo: z
  //     .string({ message: "O código do dispositivo é necessário" })
  //     .length(6, {
  //       message: "O código deve ter exatamente 6 caracteres", // Futuramente implementar validação de código para conectar ao hardware
  //     }),
});

export const AdicionarDispositivoBtn = () => {
  const { user } = useAuth();
  const { requestDispositivos } = useDispositivo();
  const createDispositivoForm = useForm<
    z.infer<typeof registerDispositivoSchema>
  >({
    resolver: zodResolver(registerDispositivoSchema),
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 624px)" });
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isModalCreateDipositivoOpen, setIsModalCreateDipositivoOpen] =
    useState(false);

  async function createDispositivo(
    data: z.infer<typeof registerDispositivoSchema>
  ) {
    if (!user) {
      return <Navigate to="/login" replace />;
    }
    const idUser = +user.id;
    try {
      setIsSubmiting(true);
      await RequestCreateDispositivo({
        nome: data.nome,
        userId: idUser,
        local: data.local,
      });
      requestDispositivos();
    } catch (error) {
      console.error("Erro ao criar dispositivo:", error);
    } finally {
      setIsSubmiting(false);
      setIsModalCreateDipositivoOpen(false);
    }
  }

  if (isDesktop) {
    return (
      <Dialog
        open={isModalCreateDipositivoOpen}
        onOpenChange={(open) => setIsModalCreateDipositivoOpen(open)}
      >
        <DialogTrigger asChild>
          <Button
            onClick={() => setIsModalCreateDipositivoOpen(true)}
            className="w-full mt-2"
          >
            Adicionar dispositivo
          </Button>
        </DialogTrigger>
        <DialogContent
          aria-describedby={undefined}
          className="sm:max-w-[425px]"
        >
          <DialogHeader>
            <DialogTitle>Adicionar dispositivo</DialogTitle>
            <DialogDescription>
              Coloque o nome e o local do dispositivo que deseja cadastrar.
            </DialogDescription>
          </DialogHeader>
          <Form {...createDispositivoForm}>
            <form
              onSubmit={createDispositivoForm.handleSubmit(createDispositivo)}
              className="grid gap-2"
            >
              <FormField
                name="nome"
                control={createDispositivoForm.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome do dispositivo</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        onChange={(e) => field.onChange(e.target.value)}
                        placeholder="Ex: Dispositivo 1, etc."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="local"
                control={createDispositivoForm.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Local do dispositivo</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        onChange={(e) => field.onChange(e.target.value)}
                        placeholder="Ex: Sala, Quarto, Cozinha"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button disabled={isSubmiting} className="w-full mt-2">
                {isSubmiting ? "Adicionando" : "Adicionar"}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    );
  } else {
    return (
      <Drawer
        open={isModalCreateDipositivoOpen}
        onOpenChange={(open) => setIsModalCreateDipositivoOpen(open)}
        fadeFromIndex={0}
        snapPoints={[1]}
      >
        <DrawerTrigger className="w-full mt-2" asChild>
          <Button>Adicionar dispositivo</Button>
        </DrawerTrigger>
        <DrawerContent className="mb-10">
          <DrawerHeader>
            <DrawerTitle>Adicionar dispositivo</DrawerTitle>
            <DrawerDescription>
              Coloque o nome e o local do dispositivo que deseja cadastrar.
            </DrawerDescription>
          </DrawerHeader>
          <Form {...createDispositivoForm}>
            <form
              className="grid mx-8 gap-2"
              onSubmit={createDispositivoForm.handleSubmit(createDispositivo)}
            >
              <FormField
                name="nome"
                control={createDispositivoForm.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome do dispositivo</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        onChange={(e) => field.onChange(e.target.value)}
                        placeholder="Ex: Dispositivo 1, etc."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="local"
                control={createDispositivoForm.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Local do dispositivo</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        onChange={(e) => field.onChange(e.target.value)}
                        placeholder="Ex: Sala, Quarto, Cozinha"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button disabled={isSubmiting} className="w-full mt-2">
                {isSubmiting ? "Adicionando" : "Adicionar"}
              </Button>
            </form>
          </Form>
        </DrawerContent>
      </Drawer>
    );
  }
};
