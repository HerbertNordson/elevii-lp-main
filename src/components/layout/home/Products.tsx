"use client";

import Image, { StaticImageData } from "next/image";
import { Container } from "@/components/theme/Container";

import Waste from "@/assets/wastezero.png";
import Oilema from "@/assets/Oilema.jpg";
import Vizzua from "@/assets/vizzua.jpg";
import Sementes from "@/assets/sementes.jpg";
import MoldeSmart from "@/assets/molde_phone.png";
import Check from "@/assets/checkmark.png";
import { Fragment, useMemo, useState } from "react";
import {
  IconChevronLeft,
  IconChevronRight,
  IconLoader3,
} from "@tabler/icons-react";
import { Button } from "@/components/theme/Button";
import { redirect } from "next/navigation";
import Link from "next/link";

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
    <Container id="project">
      <div className="w-full h-full max-w-7xl m-auto">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-txt mb-8 md:mb-32">
          Projetos desenvolvidos
        </h2>
        {product && (
          <>
            <div
              className={`relative h-full min-w-3xl max-w-3xl lg:min-w-3xl lg:max-w-3xl md:min-w-2xl md:max-w-2xl m-auto flex justify-center`}
            >
              <button
                className={`absolute top-[40%] left-0 md:left-[-10%] rounded-full bg-primary ${
                  index === 0 ? "hidden" : ""
                }`}
                onClick={handleBack}
              >
                {""}
                <IconChevronLeft color="white" size={40} />
              </button>
              <div className="flex w-full flex-col md:flex-row justify-between items-center gap-16 md:gap-0 md:items-between">
                {ListProduct.map((item: Product, idx: number) => (
                  <Fragment key={item.id}>
                    <figure
                      className={`relative w-56 flex justify-center items-center gap-4 pt-2 pb-4  ${
                        idx === index ? "visible" : "hidden"
                      }`}
                      
                    >
                      <IconLoader3 className="animate-spin absolute text-primary" />
                      <Image
                        className={`w-52 h-full transition-all animate-fade z-10`}
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
                      className={`w-full md:w-6/12 h-full flex justify-evenly flex-col transition-all animate-fade ${
                        idx === index ? "visible" : "hidden"
                      }`}
                    >
                      <div
                        className={`h-full w-full flex flex-col gap-4 text-justify`}
                      >
                        <h3 className="text-2xl text-txt text-center font-bold md:text-left pop">
                          {product.name}
                        </h3>
                        <p className="text-sm text-txt font-normal pop">
                          {product.description}
                        </p>
                        <p className="text-sm text-txt font-normal pop">
                          Características:
                        </p>

                        <ul className="pl-4 text-left flex flex-col gap-2">
                          {product.characteristics.map((char: string) => (
                            <li className="flex items-center gap-4" key={char}>
                              <Image
                                className="size-6"
                                src={Check}
                                alt="checkmark"
                              />
                              <p className="text-sm text-txt font-normal pop">
                                {char}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex justify-center">
                        <Link
                          href="#contact"
                          className="w-52 py-2 px-4 bg-primary text-white text-center rounded-md mt-6 pop"
                        >
                          Entrar em contato
                        </Link>
                      </div>
                    </div>
                  </Fragment>
                ))}
              </div>
              <button
                className={`absolute top-[40%] right-0 md:right-[-10%] rounded-full bg-primary ${
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
