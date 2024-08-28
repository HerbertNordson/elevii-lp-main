import Image from "next/image";
import { Container } from "@/components/theme/Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Waste from "@/assets/wastezero.png";
import Check from "@/assets/checkmark.png";

export const Product = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };
  return (
    <Container>
      <div className="h-full max-w-6xl m-auto">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-txt mb-8 md:mb-32">
          Projetos desenvolvidos
        </h2>
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <figure className="flex flex-col md:flex-row justify-center items-center gap-4 pr-4">
                <Image
                  className="w-52"
                  src={Waste}
                  alt="Aplicativo wastezero home page"
                />
                <div className="flex flex-col gap-4 text-justify">
                  <h3 className="text-2xl text-txt text-center md:text-left">
                    Wastezero
                  </h3>
                  <p className="text-sm text-txt font-light">
                    Aplicativo de compra e vendas de produtos com base na data
                    de validade.
                  </p>
                  <p className="text-sm text-txt font-medium">
                    Características:
                  </p>

                  <ul className="pl-4 text-left flex flex-col gap-2">
                    <li className="flex items-center gap-2">
                      <Image className="size-4" src={Check} alt="checkmark" />
                      <p className="text-sm text-txt font-light">
                        Layout exclusivo
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image className="size-4" src={Check} alt="checkmark" />
                      <p className="text-sm text-txt font-light">
                        Gateway de pagamento
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image className="size-4" src={Check} alt="checkmark" />
                      <p className="text-sm text-txt font-light">
                        Push notification
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image className="size-4" src={Check} alt="checkmark" />
                      <p className="text-sm text-txt font-light">
                        Arquitetura modular
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image className="size-4" src={Check} alt="checkmark" />
                      <p className="text-sm text-txt font-light">
                        Painel integrado
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image className="size-4" src={Check} alt="checkmark" />
                      <p className="text-sm text-txt font-light">
                        Rotinas automatizadas de verificação de estoque
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image className="size-4" src={Check} alt="checkmark" />
                      <p className="text-sm text-txt font-light">
                        MultiPlataforma
                      </p>
                    </li>
                  </ul>
                </div>
              </figure>
            </div>
            <div>
              <figure className="flex flex-col md:flex-row items-center gap-4 pr-4">
                <Image
                  className="w-52"
                  src={Waste}
                  alt="Aplicativo wastezero home page"
                />
                <div className="flex flex-col gap-4 text-justify">
                  <h3 className="text-2xl text-txt text-center md:text-left">
                    Wastezero
                  </h3>
                  <p className="text-sm text-txt font-light">
                    Aplicativo de compra e vendas de produtos com base na data
                    de validade.
                  </p>
                  <p className="text-sm text-txt font-medium">
                    Características:
                  </p>

                  <ul className="pl-4 text-left flex flex-col gap-2">
                    <li className="flex items-center gap-2">
                      <Image className="size-4" src={Check} alt="checkmark" />
                      <p className="text-sm text-txt font-light">
                        Layout exclusivo
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image className="size-4" src={Check} alt="checkmark" />
                      <p className="text-sm text-txt font-light">
                        Gateway de pagamento
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image className="size-4" src={Check} alt="checkmark" />
                      <p className="text-sm text-txt font-light">
                        Push notification
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image className="size-4" src={Check} alt="checkmark" />
                      <p className="text-sm text-txt font-light">
                        Arquitetura modular
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image className="size-4" src={Check} alt="checkmark" />
                      <p className="text-sm text-txt font-light">
                        Painel integrado
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image className="size-4" src={Check} alt="checkmark" />
                      <p className="text-sm text-txt font-light">
                        Rotinas automatizadas de verificação de estoque
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image className="size-4" src={Check} alt="checkmark" />
                      <p className="text-sm text-txt font-light">
                        MultiPlataforma
                      </p>
                    </li>
                  </ul>
                </div>
              </figure>
            </div>
            <div>
              <figure className="flex flex-col md:flex-row items-center gap-4 pr-4">
                <Image
                  className="w-52"
                  src={Waste}
                  alt="Aplicativo wastezero home page"
                />
                <div className="flex flex-col gap-4 text-justify">
                  <h3 className="text-2xl text-txt text-center md:text-left">
                    Wastezero
                  </h3>
                  <p className="text-sm text-txt font-light">
                    Aplicativo de compra e vendas de produtos com base na data
                    de validade.
                  </p>
                  <p className="text-sm text-txt font-medium">
                    Características:
                  </p>

                  <ul className="pl-4 text-left flex flex-col gap-2">
                    <li className="flex items-center gap-2">
                      <Image className="size-4" src={Check} alt="checkmark" />
                      <p className="text-sm text-txt font-light">
                        Layout exclusivo
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image className="size-4" src={Check} alt="checkmark" />
                      <p className="text-sm text-txt font-light">
                        Gateway de pagamento
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image className="size-4" src={Check} alt="checkmark" />
                      <p className="text-sm text-txt font-light">
                        Push notification
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image className="size-4" src={Check} alt="checkmark" />
                      <p className="text-sm text-txt font-light">
                        Arquitetura modular
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image className="size-4" src={Check} alt="checkmark" />
                      <p className="text-sm text-txt font-light">
                        Painel integrado
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image className="size-4" src={Check} alt="checkmark" />
                      <p className="text-sm text-txt font-light">
                        Rotinas automatizadas de verificação de estoque
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image className="size-4" src={Check} alt="checkmark" />
                      <p className="text-sm text-txt font-light">
                        MultiPlataforma
                      </p>
                    </li>
                  </ul>
                </div>
              </figure>
            </div>
            <div>
              <figure className="flex flex-col md:flex-row items-center gap-4 pr-4">
                <Image
                  className="w-52"
                  src={Waste}
                  alt="Aplicativo wastezero home page"
                />
                <div className="flex flex-col gap-4 text-justify">
                  <h3 className="text-2xl text-txt text-center md:text-left">
                    Wastezero
                  </h3>
                  <p className="text-sm text-txt font-light">
                    Aplicativo de compra e vendas de produtos com base na data
                    de validade.
                  </p>
                  <p className="text-sm text-txt font-medium">
                    Características:
                  </p>

                  <ul className="pl-4 text-left flex flex-col gap-2">
                    <li className="flex items-center gap-2">
                      <Image className="size-4" src={Check} alt="checkmark" />
                      <p className="text-sm text-txt font-light">
                        Layout exclusivo
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image className="size-4" src={Check} alt="checkmark" />
                      <p className="text-sm text-txt font-light">
                        Gateway de pagamento
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image className="size-4" src={Check} alt="checkmark" />
                      <p className="text-sm text-txt font-light">
                        Push notification
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image className="size-4" src={Check} alt="checkmark" />
                      <p className="text-sm text-txt font-light">
                        Arquitetura modular
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image className="size-4" src={Check} alt="checkmark" />
                      <p className="text-sm text-txt font-light">
                        Painel integrado
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image className="size-4" src={Check} alt="checkmark" />
                      <p className="text-sm text-txt font-light">
                        Rotinas automatizadas de verificação de estoque
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image className="size-4" src={Check} alt="checkmark" />
                      <p className="text-sm text-txt font-light">
                        MultiPlataforma
                      </p>
                    </li>
                  </ul>
                </div>
              </figure>
            </div>
            <div>
              <figure className="flex flex-col md:flex-row items-center gap-4 pr-4">
                <Image
                  className="w-52"
                  src={Waste}
                  alt="Aplicativo wastezero home page"
                />
                <div className="flex flex-col gap-4 text-justify">
                  <h3 className="text-2xl text-txt text-center md:text-left">
                    Wastezero
                  </h3>
                  <p className="text-sm text-txt font-light">
                    Aplicativo de compra e vendas de produtos com base na data
                    de validade.
                  </p>
                  <p className="text-sm text-txt font-medium">
                    Características:
                  </p>

                  <ul className="pl-4 text-left flex flex-col gap-2">
                    <li className="flex items-center gap-2">
                      <Image className="size-4" src={Check} alt="checkmark" />
                      <p className="text-sm text-txt font-light">
                        Layout exclusivo
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image className="size-4" src={Check} alt="checkmark" />
                      <p className="text-sm text-txt font-light">
                        Gateway de pagamento
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image className="size-4" src={Check} alt="checkmark" />
                      <p className="text-sm text-txt font-light">
                        Push notification
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image className="size-4" src={Check} alt="checkmark" />
                      <p className="text-sm text-txt font-light">
                        Arquitetura modular
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image className="size-4" src={Check} alt="checkmark" />
                      <p className="text-sm text-txt font-light">
                        Painel integrado
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image className="size-4" src={Check} alt="checkmark" />
                      <p className="text-sm text-txt font-light">
                        Rotinas automatizadas de verificação de estoque
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <Image className="size-4" src={Check} alt="checkmark" />
                      <p className="text-sm text-txt font-light">
                        MultiPlataforma
                      </p>
                    </li>
                  </ul>
                </div>
              </figure>
            </div>
          </Slider>
        </div>
      </div>
    </Container>
  );
};
