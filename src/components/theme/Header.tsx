"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

//Image
import Logo from "@/assets/logo_elevii.png";

//Components
import { Nav } from "./Nav";

export const Header = () => {
  const [fixedHeader, setFixedHeader] = useState<boolean>(false);

  function scrollListener() {
    if (window.scrollY > 10) {
      setFixedHeader(true);
    } else {
      setFixedHeader(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <header
      className={`${
        fixedHeader &&
        " transition duration-500 bg-back-transparent shadow-md z-10"
      } fixed left-0 top-0 w-full mb-4`}
    >
      <div
        className={`flex justify-between items-center lg:max-w-screen-xl m-auto p-2 lg:p-4`}
      >
        <Link href="#home" className="z-10">
          <Image
            src={Logo}
            alt="Logo da empresa Elevii"
            className="w-20 lg:w-32"
          />
        </Link>
        <Nav />
      </div>
    </header>
  );
};
