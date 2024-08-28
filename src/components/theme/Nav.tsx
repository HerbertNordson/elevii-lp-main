import Link from "next/link";
import { useState } from "react";

export const Nav = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <nav>
      <div className="visible lg:hidden relative flex">
        <div
          className="flex flex-col items-center justify-center p-2 z-10"
          onClick={() => setVisible(!visible)}
        >
          <div
            className={`h-1 w-8 mb-1 transition duration-1000 rounded-md ${
              visible ? "rotate-45 translate-y-2 bg-back" : "bg-txt"
            }`}
          />
          <div
            className={`h-1 w-8 mb-1 transition duration-1000 rounded-md ${
              visible ? "rotate-_45 bg-back" : "bg-primary"
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
          } transition-width duration-500 flex-col font-medium text-xl h-screen fixed pt-20 top-0 right-0 bg-half-transparent `}
        >
          <li className="flex text-back hover:text-primary w-full m-1 p-5 justify-center">
            <Link href="#team">Quem somos</Link>
          </li>
          <li className="flex text-back hover:text-primary w-full m-1 p-5 justify-center">
            <Link href="#skills">Nossos serviços</Link>
          </li>
          <li className="flex text-back hover:text-primary w-full m-1 p-5 justify-center">
            <Link href="/">Projetos</Link>
          </li>
          <li className="flex text-back hover:text-primary w-full m-1 p-5 justify-center">
            <Link href="#contact">Contato</Link>
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
          <Link href="/">Projetos</Link>
        </li>
        <li className="text-txt hover:text-primary p-2 cursor-pointer">
          <Link href="#contact">Contato</Link>
        </li>
      </ul>
    </nav>
  );
};
