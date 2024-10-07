import { Button } from "@/components/theme/Button";
import { Container } from "@/components/theme/Container";
import { leadsAPI } from "@/services/leads";
import { normalizeFormatCurrency, normalizePhoneNumber } from "@/utils/mask";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type Inputs = {
  name: string;
  corporate: string;
  email: string;
  phone: string;
  title: string;
  description: string;
  budget: string;
};

export const Contact = () => {
  const {
    register,
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [ip, setIp] = useState("");

  const phoneValue = watch("phone");
  const { post } = leadsAPI();

  const onSubmit: SubmitHandler<Inputs> = async (values) => {
    setValue("budget", normalizeFormatCurrency(values.budget));

    const data = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      title: values.title,
      description: values.description,
      budget: values.budget,
      ip: ip,
      refer: document.referrer,
    };

    const response = await post(data);

    if (response) {
      toast.success(
        "Informações enviadas com sucesso! Em breve nossa equipe entrará em contato."
      );

      reset({
        name: "",
        email: "",
        phone: "",
        title: "",
        description: "",
        budget: "",
        corporate: ""
      });

      return;
    }

    toast.error(
      "Erro ao tentar enviar as informações. Tente novamente masi tarde!"
    );

    return;
  };

  useEffect(() => {
    setValue("phone", normalizePhoneNumber(phoneValue));
  }, [phoneValue, setValue]);

  useEffect(() => {
    const fetchIp = async () => {
      const res = await fetch("https://api.ipify.org?format=json");
      const data = await res.json();
      setIp(data.ip);
    };

    fetchIp();
  }, []);

  return (
    <Container classes="bg-txt-light" id="contact">
      <div className="h-full max-w-xl m-auto">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-back mb-12 md:mb-24 pop">
          Converse com a gente
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="text-lg text-back-transparent my-4 text-center md:text-left pop">
            Informações para facilitar o nosso contato
          </p>
          <div className="flex justify-between gap-4 py-2">
            <label htmlFor="name" className="w-full pop">
              <input
                {...register("name", { required: true, minLength: 3 })}
                className="w-full bg-back-strong rounded-md px-4 py-2 outline-none ring-offset-2 focus:ring-2 focus:ring-primary"
                name="name"
                placeholder="Nome"
              />
              {errors.name && (
                <span className="text-red-600 text-sm font-medium">
                  Por favor, insira um nome contendo três ou mais caracteres.
                </span>
              )}
            </label>
            <label htmlFor="corporate" className="w-full pop">
              <input
                {...register("corporate", { required: true, minLength: 3 })}
                className="w-full bg-back-strong rounded-md px-4 py-2 outline-none ring-offset-2 focus:ring-2 focus:ring-primary"
                name="corporate"
                placeholder="Empresa"
              />
              {errors.corporate && (
                <span className="text-red-600 text-sm font-medium">
                  Por favor, insira o nome da empresa contendo três ou mais
                  caracteres.
                </span>
              )}
            </label>
          </div>
          <div className="flex justify-between gap-4 py-2">
            <label htmlFor="email" className="w-full pop">
              <input
                {...register("email", {
                  required: true,
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Por favor insira um endereço de e-mail válido.",
                  },
                })}
                placeholder="E-mail"
                name="email"
                className="w-full bg-back-strong rounded-md px-4 py-2 outline-none ring-offset-2 focus:ring-2 focus:ring-primary"
              />
              {errors.email && (
                <span className="text-red-600 text-sm font-medium">
                  {errors.email.message}
                </span>
              )}
            </label>
            <label className="w-full pop">
              <input
                {...register("phone", {
                  required: true,
                  pattern: {
                    value: /(\([0-9]{2}\))\s([9]{1})?([0-9]{5})-([0-9]{4})/,
                    message: "Informe um número de celular válido.",
                  },
                })}
                className="w-full bg-back-strong rounded-md px-4 py-2 outline-none ring-offset-2 focus:ring-2 focus:ring-primary"
                name="phone"
                placeholder="Telefone"
              />
              {errors.phone && (
                <span className="text-red-600 text-sm font-medium">
                  {errors.phone.message}
                </span>
              )}
            </label>
          </div>

          <p className="text-lg text-back-transparent my-4 text-center md:text-left pop">
            Algumas informações iniciais sobre o projeto
          </p>
          <div className="flex justify-between gap-4 mb-4">
            <label htmlFor="title" className="w-full">
              <input
                {...register("title", { required: true })}
                placeholder="Título do projeto"
                name="title"
                className="w-full bg-back-strong rounded-md px-4 py-2 outline-none ring-offset-2 focus:ring-2 focus:ring-primary"
              />
              {errors.title && (
                <span className="text-red-600 text-sm font-medium">
                  Por favor, adicione um título ao seu projeto.
                </span>
              )}
            </label>
            <label className="w-full">
              <input
                {...register("budget", { required: true })}
                placeholder="Orçamento em R$"
                name="budget"
                className="w-full bg-back-strong rounded-md px-4 py-2 outline-none ring-offset-2 focus:ring-2 focus:ring-primary"
              />
            </label>
          </div>
          <textarea
            {...register("description", { required: true })}
            name="description"
            placeholder="Descreva um pouco o seu projeto"
            className="w-full bg-back-strong rounded-md px-4 py-2 outline-none ring-offset-2 focus:ring-2 focus:ring-txt"
          />

          <div className="w-full py-6">
            <Button
              label="Enviar"
              type="submit"
              onclick={() => {}}
              classes="bg-txt !text-back-strong w-full hover:bg-primary"
            />
          </div>
        </form>
      </div>
    </Container>
  );
};
