interface ISkill {
  title: string;
  description: string;
}

export const Skill = ({ title, description }: ISkill) => {
  return (
    <figure className="bg-txt max-w-full md:max-w-md rounded-lg p-4 md:p-8 flex flex-col gap-4 md:gap-6 transition-all animate-fade">
      <h2 className="text-2xl font-bold text-back-strong  pop">{title}</h2>
      <p className="text-back-transparent text-base font-light  pop">{description}</p>
    </figure>
  );
};
