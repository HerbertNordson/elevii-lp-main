"use client";

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

export const Nav = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <nav>
      <div className="visible lg:hidden relative flex ">
        <div
          className="flex flex-col items-center justify-center p-2 z-10"
          onClick={() => setVisible(!visible)}
        >
          <div
            className={`h-1 w-8 mb-1 transition duration-1000 rounded-md ${
              visible ? "rotate-45 translate-y-2 bg-primary" : "bg-txt"
            }`}
          />
          <div
            className={`h-1 w-8 mb-1 transition duration-1000 rounded-md ${
              visible ? "rotate-_45 bg-primary" : "bg-primary"
            } `}
          />
          <div
            className={`${
              visible ? "hidden" : "flex"
            } h-1 w-8 bg-txt transition duration-500 rounded-md`}
          />
        </div>
        <ul
          className={`${
            visible ? "w-full  flex" : "w-0 hidden"
          } transition-width duration-500 flex-col justify-center font-medium text-xl h-screen fixed mt-14 top-0 right-0 bg-txt z-20 transition-all animate-fade`}
        >
          <li className="flex text-back hover:text-primary w-full m-1 p-5 justify-center">
            <Link href="#team" onClick={() => setVisible(!visible)}>Quem somos</Link>
          </li>
          <li className="flex text-back hover:text-primary w-full m-1 p-5 justify-center">
            <Link href="#skills" onClick={() => setVisible(!visible)}>Nossos serviços</Link>
          </li>
          <li className="flex text-back hover:text-primary w-full m-1 p-5 justify-center">
            <Link href="#project" onClick={() => setVisible(!visible)}>Projetos</Link>
          </li>
          <li className="flex text-back hover:text-primary w-full m-1 p-5 justify-center">
            <Link href="#contact" onClick={() => setVisible(!visible)}>Contato</Link>
          </li>
          <li>
            <footer className="p-4 flex flex-col items-center gap-4 mt-20">
              <p className="text-base text-primary">
                Acesse nossas redes sociais:
              </p>
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
                <Link
                  href="mailto:suporte@elevii.dev"
                  target="_blank"
                  className="text-white size-8"
                >
                  <IconMail className="size-full" />
                </Link>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <p className="text-primary text-sm">Telefone para contato: </p>
                <a
                  href="tel:71996250928"
                  target="_blank"
                  className="text-white text-base"
                >
                  +55 71 9 9625-0928
                </a>
              </div>
            </footer>
          </li>
        </ul>
      </div>
      <ul className="font-medium text-xl hidden lg:flex gap-16">
        <li className="text-txt hover:text-primary p-2 cursor-pointer">
          <Link href="#team">Quem somos</Link>
        </li>
        <li className="text-txt hover:text-primary p-2 cursor-pointer">
          <Link href="#skills">Nossos serviços</Link>
        </li>
        <li className="text-txt hover:text-primary p-2 cursor-pointer">
          <Link href="#project">Projetos</Link>
        </li>
        <li className="text-txt hover:text-primary p-2 cursor-pointer">
          <Link href="#contact">Contato</Link>
        </li>
      </ul>
    </nav>
  );
};
