interface IButton {
  label: string;
  type?: "button" | "submit" | "reset";
  property?: string;
  classes?: string;
  onclick: () => void;
}

export const Button = ({
  label,
  type = "button",
  property = "default",
  classes = "",
  onclick,
}: IButton) => {
  const props =
    property === "primary"
      ? "bg-primary text-back border-primary hover:ring-primary"
      : "bg-back text-txt border-txt hover:ring-txt";

  return (
    <button
      type={type}
      className={`${props} ${classes} font-medium text-lg py-2 px-4 border-2 rounded-md ring-offset-2 hover:ring-2`}
      onClick={onclick}
    >
      {label}
    </button>
  );
};
