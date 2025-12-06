"use client";

const Footer = () => {
  return (
    <div id="foot" className="p-6 flex justify-center items-center border-t mt-16 ">
      <footer className="w-full lg:w-1/2 flex flex-col items-center gap-8">
        <div className="w-full lg:flex grid grid-cols-2 gap-8 justify-around *:max-w-full *:mx-auto">
          <p>
            <strong>Email: </strong>somw0001@stud.ek.dk
          </p>
          <p>
            <strong>Tlf.</strong> +45 41400063
          </p>
          <a href="https://github.com/solom0001/cv-extension" className="text-accent-2 underline font-bold">
            Denne Sides Git Repo
          </a>
          <span className="flex flex-nowrap items-baseline">
            <p className="font-bold">Mit-</p>
            <a href="/CVDec25.pdf" target="_blank" className="text-accent-2 underline font-bold">
              CV
            </a>
          </span>
        </div>

        <div className="text-center">
          <h2>Tak for at besøge min side</h2>
        </div>

        <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="p-4 text-primary bg-accent-2 hover:text-white hover:bg-accent-2-5! transition-all duration-150 ease-in-out hover:cursor-pointer">
          Tilbage til toppen
        </div>
      </footer>
    </div>
  );
};

export default Footer;
