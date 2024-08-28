import { Button } from "@/components/theme/Button";
import { Container } from "@/components/theme/Container";
import { Input } from "@/components/theme/Input";
import { Textarea } from "@/components/theme/Textarea";

export const Contact = () => {
  return (
    <Container classes="bg-txt-light" id="contact">
      <div className="h-full max-w-2xl m-auto">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-back mb-12 md:mb-24">
          Converse com a gente
        </h2>

        <form>
          <p className="text-lg text-back-transparent my-4 text-center md:text-left">
            Informações para facilitar o nosso contato
          </p>
          <div className="flex justify-between gap-4 py-2">
            <label htmlFor="name" className="w-full">
              <Input label="Nome" name="name" />
            </label>
            <label htmlFor="corporate" className="w-full">
              <Input label="Empresa" name="corporate" />
            </label>
          </div>
          <div className="flex justify-between gap-4 py-2">
            <label htmlFor="email" className="w-full">
              <Input label="E-mail" name="email" />
            </label>
            <label htmlFor="phone" className="w-full">
              <Input label="Telefone" name="phone" />
            </label>
          </div>

          <p className="text-lg text-back-transparent my-4 text-center md:text-left">
            Algumas informações iniciais sobre o projeto
          </p>
          <div className="flex justify-between gap-4 mb-4">
            <label htmlFor="corporate" className="w-full">
              <Input label="Título do projeto" name="title" />
            </label>
            <label htmlFor="corporate" className="w-full">
              <Input label="Orçamento em R$" name="mount" />
            </label>
          </div>
          <Textarea
            label="Descreva um pouco o seu projeto"
            name="description"
          />

          <div className="w-full py-6">
            <Button
              label="Enviar"
              type="submit"
              onclick={() => {}}
              classes="bg-txt !text-back-strong w-full hover:bg-primary"
            />
          </div>
        </form>
      </div>
    </Container>
  );
};
