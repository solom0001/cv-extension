"use client";

const TextTemp = ({ title, subtitle, description, description2, pushStyle }) => {
  return (
    <div className={`customSpacing flex! flex-col ${pushStyle}`}>
      <h2 className="uppercase font-bold text-2xl lg:text-3xl">{title}</h2>
      <h3 className="text-accent-1 font-medium bg-accent-1 px-3 w-fit">{subtitle}</h3>
      <p className="leading-relaxed max-w-[58ch]">{description}</p>
      <p className="mt-2 leading-relaxed max-w-[58ch]">{description2}</p>
    </div>
  );
};

export default TextTemp;
