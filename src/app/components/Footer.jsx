"use client";

const Footer = () => {
  return (
    <div id="foot" className="p-6 flex justify-center items-center border-t-1 mt-16">
      <footer className="w-[50%] flex flex-col items-center gap-8">
        <div className="w-full flex justify-around gap-8">
          <p>Email:somw0001@stud.ek.dk</p>
          <p>Tlf. +45-41400063</p>
          <a href="https://github.com/solom0001/cv-extension" className="text-accent-2 underline">
            Denne Sides Git Repo
          </a>
          <a href="/newCVsolomon.pdf" target="_blank" className="text-accent-2 underline">
            CV
          </a>
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
