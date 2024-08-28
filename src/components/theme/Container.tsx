import { ReactNode } from "react";

interface IContaner {
  children: React.ReactNode;
  classes?: string;
  id?: string
}

export const Container: React.FC<IContaner> = ({ children, classes, id }) => {
  return (
    <section id={id} className={`w-full p-2 lg:p-0 ${classes}`}>
      <div className="lg:max-w-screen-xl lg:min-h-screen m-auto px-2 lg:px-4 py-16 md:flex md:flex-col md:items-center md:justify-center">
        {children}
      </div>
    </section>
  );
};
