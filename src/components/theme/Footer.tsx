import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-20 lg:pt-28 lg:pb-10 px-6 bg-txt-light text-back-strong shadow-t shadow-txt">
      <ul className="flex flex-col md:flex-row justify-between max-w-6xl m-auto gap-6 md:gap-0">
        <li className="flex flex-col items-center md:items-start gap-4">
          <div className="flex text-back-strong font-semibold text-2xl">
            Elev
            <div className="text-primary text-3xl relative size-4">
              <div className="absolute left-0">I</div>
              <div className="absolute bottom-neg right-0 elevii">I</div>
            </div>
          </div>
          <p className="text-sm text-back-transparent font-light">
            Transformando através da tecnologia!
          </p>

          <h3 className="text-base text-back-strong font-semibold tracking-widest">
            Contato:
          </h3>
          <Link
            href="tel:71996250928"
            className="text-sm text-back-transparent font-light"
          >
            +55 71 9 9625-0928
          </Link>
          <Link
            href="mailto:suporte@elevii.dev"
            className="text-sm text-back-transparent font-light"
          >
            suporte@elevii.dev
          </Link>
        </li>
        <li className="flex flex-col items-center md:items-start gap-4">
          <h3 className="text-base text-back-strong font-semibold tracking-widest">
            Serviços
          </h3>
          <Link href="#contact" className="text-sm text-back-transparent font-light">
            Quero criar um app!
          </Link>
          <Link href="#contact" className="text-sm text-back-transparent font-light">
            Quero contratar um time de tecnologia!
          </Link>
          <Link href="#contact" className="text-sm text-back-transparent font-light">
            Quero uma consultoria!
          </Link>
        </li>
        <li className="flex flex-col items-center md:items-start gap-4">
          <h3 className="text-base text-back-strong font-semibold tracking-widest">
            Sobre
          </h3>
          <a href="#team" className="text-sm text-back-transparent font-light">
            Quem somos
          </a>
          <Link href="#projeto" className="text-sm text-back-transparent font-light">Projetos</Link>
        </li>
        <li className="flex flex-col items-center md:items-start gap-4">
          <h3 className="text-base text-back-strong font-semibold tracking-widest">
            Redes Sociais
          </h3>
          <div className="flex gap-2">
            <Link
              href="https://www.instagram.com/eleviioficial"
              target="_blank"
              className="text-white size-8"
            >
              <IconBrandInstagram className="size-full" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/elevii-soluções"
              target="_blank"
              className="text-white size-8"
            >
              <IconBrandLinkedin className="size-full" />
            </Link>
            <Link
              href="https://www.facebook.com/eleviioficial"
              target="_blank"
              className="text-white size-8"
            >
              <IconBrandFacebook className="size-full" />
            </Link>
          </div>
        </li>
      </ul>
      <div className="w-full mt-12">
        <p className="w-full text-center text-sm text-back-transparent font-light">
          Copyright © 2024. Elev<span className="text-primary">II</span>.
          Direitos reservados
        </p>
      </div>
    </footer>
  );
};

{
  /* <div className="flex flex-col justify-center items-center gap-2 lg:gap-4 lg:max-w-screen-xl m-auto">
        <div className="flex flex-col items-center gap-2">
          <div className="size-24 bg-back-strong rounded-full flex flex-col justify-center items-center">
            <Image
              src={Logo}
              alt="Logo da empresa Elevii"
              className="w-16 lg:w-32"
            />
          </div>
          <h2 className="font-bold text-lg">ELEVII - SOLUÇÕES TECNOLÓGICAS</h2>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-2 [&_li]:size-10 [&_li]:border-2 [&_li]:border-back-strong [&_li]:rounded-md">
            <li>
              <Link href="#"></Link>
            </li>
            <li>
              <Link href="#"></Link>
            </li>
            <li>
              <Link href="#"></Link>
            </li>
          </ul>
        </div>
      </div> */
}
