"use client";

import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { Container } from "@/components/theme/Container";

import phone from "@/assets/smatphone_app_elevii.png";
import { Button } from "@/components/theme/Button";
import { redirect } from "next/navigation";

export const SectionOne = () => {
  return (
    <Container id="home">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-32 pb-8 pt-16 lg:pt-0 pmax-w-6xl m-auto transition-all animate-fade">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-4xl md:text-5xl  text-txt font-bold mb-4">
              Criamos 
              <TypeAnimation
                sequence={[
                  " aplicativos",
                  1000,
                  " sistemas",
                  1000,
                  " web sites",
                  1000,
                ]}
                wrapper="span"
                speed={40}
                style={{ color: "#C92037" }}
                repeat={Infinity}
              />{" "}
              <br />
              incríveis para a sua empresa.
            </h1>
            <p className="text-lg">
              Construímos aplicativos e sistemas com as tecnologias mais
              modernas do mercado. Oferecemos um suporte totalmente sob medida.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <Button
              property="primary"
              label="Entrar em contato"
              onclick={() => redirect("/")}
            />
            <Button label="Saiba mais..." onclick={() => redirect("/")} />
          </div>
        </div>

        <Image
          src={phone}
          alt="imagem de um smartphone executando um app elevii"
          className="size-1/3 hidden lg:inline-block"
        />
      </div>
    </Container>
  );
};
