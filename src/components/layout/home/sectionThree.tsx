import { Button } from "@/components/theme/Button";
import { Container } from "@/components/theme/Container";
import { Label } from "@/components/theme/Label";
import { Skill } from "@/components/theme/Skill";
import { redirect } from "next/navigation";

export const SectionThree = () => {
  return (
    <Container classes="bg-txt-light" id="skills">
      <div className="h-full flex flex-col justify-center items-center max-w-6xl gap-12 m-auto" >
        <h2 className="text-center text-3xl md:text-5xl font-bold text-back-strong  pop">
          Como a <span className="text-primary">Elevii</span> pode me ajudar?
        </h2>

        <p className="text-back-strong text-center text-lg  pop">
          Possuímos um processo totalmente centrado em você afim de mitigar
          falhas e usar a nossa expertísse para agregar valor ao projeto,
          aumentando a sua satisfação e dos seus clientes.
        </p>

        <div className="flex justify-center flex-wrap gap-8 max-w-5xl m-auto">
          <Skill
            title="Alinhamento"
            description="Nessa primeira etapa serão solicitadas informações sobre o projeto, com
        o objetivo de entender melhor as necessidades para a escolha das
        melhores abordagem para o escopo."
          />
          <Skill
            title="Modelagem"
            description="Nessa etapa a nossa equipe irá estruturar o seu projeto através de uma linguagem computacional, determinando quais dados e suas relações farão parte da aplicação."
          />
          <Skill
            title="Desenvolvimento"
            description="O projeto será então dividido em partes que possibilitarão visualizar a evolução e assim, o código será construído e serão disponibilizadas versões a cada “checkpoint” até a etapa de publicação."
          />
          <Skill
            title="Publicação"
            description="Nessa etapa a nossa equipe realizará a publicação nas lojas Apple e Google, além  da implantação das api's ou painéis se fizer parte do desenvolvimento,"
          />
        </div>

        <Button
          classes="bg-back-strong border-back my-10"
          label="Entrar em contato"
          onclick={() => redirect("/")}
        />
      </div>
    </Container>
  );
};
