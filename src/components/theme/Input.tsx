"use client";
import { useState } from "react";

interface IInput {
  type?: string;
  name: string;
  label: string;
}

export const Input = ({ type = "text", name, label }: IInput) => {
  const [value, setValue] = useState<any>();

  return (
    <input
      type={type}
      name={name}
      placeholder={label}
      className="w-full bg-back-strong rounded-md px-4 py-2 outline-none ring-offset-2 focus:ring-2 focus:ring-primary"
      value={value}
      onChange={(ev) => setValue(ev.target.value)}
    />
  );
};
