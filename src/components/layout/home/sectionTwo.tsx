import { Button } from "@/components/theme/Button";
import { Container } from "@/components/theme/Container";
import { redirect } from "next/navigation";
import Light from "@/assets/lampada.png";
import Image from "next/image";

export const SectionTwo = () => {
  return (
    <Container id="team">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12 max-w-6xl m-auto">
        <div className="lg:size-5/12">
          <figure>
            <Image src={Light} alt="lampada preta" />
          </figure>
        </div>
        <div className="lg:size-6/12 text-left text-txt flex flex-col gap-4">
          <h2 className="text-center text-3xl md:text-5xl font-bold mb-5 md:mb-10 pop">
            Sobre nós
          </h2>
          <p className="text-lg">
            A Elevii nasceu com o desejo de permitir que pequenas empresas
            tivessem acesso a uma equipe competente para contrução de
            aplicativos e sistemas para os seus negócios.
          </p>
          <p className="text-lg">
            Nós mantemos essa essência em nosso DNA, mas desde agosto de 2023
            entendemos que o nosso foco não é segmentar e sim construir. Somos
            jovens, apaixonados e focados em{" "}
            <span className="text-primary">
              fazer com que ideias e necessidades tecnologicas ganhem vida.
            </span>
          </p>
          <p className="text-lg">
            Embora a nossa maior expertisse esteja na construção de aplicativos
            android e ios, também estamos antenados nas melhores tendências
            tecnologicas. Ou seja, sendo você grande ou pequeno,
            <span className="text-primary">
              nós podemos construir juntos o aplicativo e/ou sistema que a sua
              empresa precisa.
            </span>
          </p>
          <p className="font-medium text-lg">
            Conte com a gente para elevar o seu negócio ao próximo nível!
          </p>
          <div className="w-full text-center mt-10">
            <Button
              property="primary"
              label="Entrar em contato"
              onclick={() => redirect("/")}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
