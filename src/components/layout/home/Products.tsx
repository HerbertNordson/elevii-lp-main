"use client";

import Image, { StaticImageData } from "next/image";
import { Container } from "@/components/theme/Container";

import Waste from "@/assets/wastezero.png";
import Oilema from "@/assets/Oilema.jpg";
import Vizzua from "@/assets/vizzua.jpg";
import Sementes from "@/assets/sementes.jpg";
import MoldeSmart from "@/assets/molde_phone.png";
import Check from "@/assets/checkmark.png";
import { useMemo, useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const ListProduct: Array<Product> = [
  {
    id: 0,
    name: "Wastezero",
    description:
      "Aplicativo de compra e vendas de produtos com base na data de validade.",
    image: Waste,
    characteristics: [
      "Layout exclusivo",
      "Gateway de pagamento",
      "Push notification",
      "Arquitetura modular",
      "Painel integrado",
      "Rotinas automatizadas de verificação de estoque",
      "MultiPlataforma",
    ],
  },
  {
    id: 1,
    name: "Sementes Oilema",
    description:
      "Aplicativo de gestão de compras e vendas de insumos agrícolas.",
    image: Oilema,
    characteristics: [
      "Layout exclusivo",
      "Integrações com apis sociais",
      "Integrações com serviços de assinatura",
      "Geração e exportação de documentos",
    ],
  },
  {
    id: 2,
    name: "Progresso Sementes",
    description:
      "Aplicativo de gestão de compras e vendas de insumos agrícolas. ",
    image: Sementes,
    characteristics: [
      "Layout exclusivo",
      "Gateway de pagamento",
      "Push notification",
      "Arquitetura modular",
      "Painel integrado",
      "Rotinas automatizadas de verificação de estoque",
      "MultiPlataforma",
    ],
  },
  {
    id: 3,
    name: "Vizzua",
    description: "Aplicativo de gestão e controle de serviços estéticos.",
    image: Vizzua,
    characteristics: [
      "Layout exclusivo",
      "Integrações com login social",
      "Composto por 3 aplicações mobile e web",
      "Push Notifications",
      "Rotinas Automatizadas",
      "Compras no aplicativo",
    ],
  },
];

export const Product = () => {
  const [index, setIndex] = useState<number>(0);
  const [fade, setFade] = useState<string>("animate-fade");

  const product = useMemo(() => {
    if (index === ListProduct.length) return;
    return ListProduct[index];
  }, [index]);

  function handleNext() {
    setFade("");
    if (index === ListProduct.length - 1) return;

    const count = index + 1;
    setIndex(count);
    setFade("animate-fade");
  }

  function handleBack() {
    setFade("");
    if (index === 0) return;

    const count = index - 1;
    setIndex(count);
    setFade("animate-fade");
  }

  return (
    <Container>
      <div className="w-full h-full max-w-7xl m-auto">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-txt mb-8 md:mb-32">
          Projetos desenvolvidos
        </h2>
        {product && (
          <>
            <div
              className={`relative max-w-4xl m-auto flex flex-col md:flex-row justify-center items-center gap-16 `}
            >
              <button
                className={`absolute top-[40%] left-0 rounded-full bg-primary ${
                  index === 0 ? "hidden" : ""
                }`}
                onClick={handleBack}
              >
                {""}
                <IconChevronLeft color="white" size={40} />
              </button>
              {ListProduct.map((item: Product, idx: number) => (
                <>
                  <figure
                    className={`relative w-56 flex justify-center items-center gap-4 pt-2 pb-4  ${
                      idx === index ? "visible" : "hidden"
                    }`}
                    key={item.id}
                  >
                    <Image
                      className={`w-52 h-full  transition-all animate-fade`}
                      src={product.image}
                      alt="Aplicativo wastezero home page"
                    />
                    <Image
                      className="absolute w-full h-full z-10"
                      src={MoldeSmart}
                      alt="Aplicativo wastezero home page"
                    />
                  </figure>
                  <div
                    className={`h-full min-h-96 max-w-72 flex flex-col gap-4 text-justify transition-all animate-fade ${
                      idx === index ? "visible" : "hidden"
                    }`}
                  >
                    <h3 className="text-2xl text-txt text-center md:text-left">
                      {product.name}
                    </h3>
                    <p className="text-sm text-txt font-light">
                      {product.description}
                    </p>
                    <p className="text-sm text-txt font-medium">
                      Características:
                    </p>

                    <ul className="pl-4 text-left flex flex-col gap-2">
                      {product.characteristics.map((char: string) => (
                        <li className="flex items-center gap-2" key={char}>
                          <Image
                            className="size-4"
                            src={Check}
                            alt="checkmark"
                          />
                          <p className="text-sm text-txt font-light">{char}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ))}
              <button
                className={`absolute top-[40%] right-0 rounded-full bg-primary ${
                  index === ListProduct.length - 1 ? "hidden" : ""
                }`}
                onClick={handleNext}
              >
                {""}
                <IconChevronRight color="white" size={40} />
              </button>
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

type Product = {
  id: number;
  name: string;
  characteristics: Array<string>;
  description: string;
  image: string | StaticImageData;
};
