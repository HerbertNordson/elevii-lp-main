interface ILabel {
  text: string;
}

export const Label = ({ text }: ILabel) => {
  return <label className="text-sm font-medium text-txt">{text}</label>;
};
