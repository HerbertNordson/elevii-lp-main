import { Container } from "@/components/theme/Container";

export const SectionFour = () => {
  return (
    <Container>
      <div className="h-full max-w-6xl m-auto">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-txt mb-16 md:mb-32">
          Modelos de contratação
        </h2>
        <div className="flex flex-wrap gap-2 md:gap-0 md:flex-nowrap justify-center items-start divide-dashed md:divide-x-2 divide-txt-light">
          <div>
            <h2 className="text-xl md:text-3xl text-txt text-center">FÁBRICA</h2>
            <div className="px-0 py-4 md:p-6 max-w-lg">
              <h3 className="text-xl text-primary mt-3 md:mt-6 mb-1 md:mb-3">
                Projeto individual
              </h3>
              <p className="text-lg text-txt">
                Nesse modelo de contratação definiremos o escopo do seu projeto
                e realizaremos o desenvolvimento da parte técnica.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-xl md:text-3xl text-txt text-center">OUTSOURCING</h2>
            <div className="px-0 py-4 md:p-6 max-w-lg">
              <h3 className="text-xl text-primary mt-3 md:mt-6 mb-1 md:mb-3">
                Alocação de profissional
              </h3>
              <p className="text-lg text-txt">
                Nesse modelo de contratação selecionaremos membros da equipe com
                as skills necessárias para dar suporte e agilidade de forma
                contínua para a sua operação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
