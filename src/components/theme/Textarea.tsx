"use client";

import { useState } from "react";

interface ITextArea {
  name: string;
  label: string;
}

export const Textarea = ({ name, label }: ITextArea) => {
  const [value, setValue] = useState<any>();

  return (
    <textarea
      name={name}
      placeholder={label}
      className="w-full bg-back-strong rounded-md px-4 py-2 outline-none ring-offset-2 focus:ring-2 focus:ring-txt"
      value={value}
      onChange={(ev) => setValue(ev.target.value)}
    />
  );
};
