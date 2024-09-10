"use client";

import { Contact } from "@/components/layout/home/Contact";
import { Product } from "@/components/layout/home/Products";
import { SectionFour } from "@/components/layout/home/sectionFour";
import { SectionOne } from "@/components/layout/home/sectionOne";
import { SectionThree } from "@/components/layout/home/sectionThree";
import { SectionTwo } from "@/components/layout/home/sectionTwo";
import { Footer } from "@/components/theme/Footer";
import { Header } from "@/components/theme/Header";

export default function Page() {
  return (
    <main className="max-w-full bg-back">
      <Header />
      <div className="w-full">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <Product />
        <SectionFour />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
