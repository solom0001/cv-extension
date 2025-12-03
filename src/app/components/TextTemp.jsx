"use client";
const TextTemp = ({ title, subtitle, description, description2 }) => {
  return (
    <div>
      <h2 className="uppercase font-bold">{title}</h2>
      <h3 className="text-(--accent-1)! font-medium">{subtitle}</h3>
      <p className="leading-relaxed">{description}</p>
      <p className="mt-2 leading-relaxed">{description2}</p>
    </div>
  );
};

export default TextTemp;
