import Hero from "./components/Hero";

import Image from "next/image";
import TextTemp from "./components/TextTemp";
import ScrollAniDiv from "./components/ScrollDiv";
import DownBut from "./components/DownBut";
import StgLoopDiv from "./components/StgLoopDiv";
import Footer from "./components/Footer";
import PastWork from "./components/PastWork";

export default function Home() {
  return (
    <main className="overflow-hidden p-0 lg:p-8 pb-0! mt-4">
      <Hero />
      <section className="grid grid-cols-[0.2fr_minmax(0,1200px)_0.2fr] lg:grid-cols-[1fr_minmax(0,1200px)_1fr] *:col-start-2 *:mt-12 gap-3 ">
        <div className="lg:grid lg:grid-cols-2 flex flex-col">
          <div className="pfPicBackScreen w-full flex justify-center items-center ">
            <Image id="mePic" loading="eager" src="/mebackgroundless.png" alt="Profile Picture" width={500} height={500} className="mx-auto object-cover" />
          </div>
          <div className="flex flex-col ">
            <ScrollAniDiv>
              <TextTemp
                title="Hvem er jeg"
                subtitle="En kort introduktion"
                description="
          Jeg er en 23-årig studerende på Erhvervsakademi København(EK).
          Det er ikke den første vidergående uddannelse, jeg har gået på, da jeg gik 3 semestre på
          datamatikker kursen på Cph-Business Lyngby
          "
                description2="
          Jeg går nu på 3.sem af min Multimedie-design studie hos EK, og kunne godt tænke mig at tag på et
          praktikophold som front-end designer hos en brancheekspert!
          "
              />
            </ScrollAniDiv>
            <div className="flex justify-end mt-4">
              <DownBut title="Se mine kompetencer" route="#HJK" />
            </div>
          </div>
        </div>
        <ScrollAniDiv>
          <div className="flex flex-col">
            <h3 className="self-end">Mig men som moodboard</h3>
            <div className="grid lg:grid-cols-1 grid-rows-[1fr_auto] grid-cols-[0.5fr_6fr_0.5fr] *:col-start-2 gap-1 mt-4 lg:items-center ">
              <div className="text-gray-400 text-left gap-2 order-2 lg:order-1 px-2 lg:mx-auto lg:col-start-1 ">
                <h3 className="text-accent-1">Relevante billede kilder:</h3>
                <p className="text-[0.5rem]!">Stephen Currypic: https://www.flickr.com/photos/mattbritt00/8561855249/in/photostream/</p>
                <p className="text-[0.5rem]!">Black/white Naruto: https://www.flickr.com/photos/44124390434@N01/338628</p>
                <a href="#meAgain">
                  <p className="font-bold text-[#f78987]! mt-8 underline">Lidt mere om hvem jeg er &#10511;</p>
                </a>
              </div>
              <div className=" order-1 lg:order-2">
                <Image loading="eager" src="/meMoodboard.png" alt="Moodboard" width={600} height={400} className="mx-auto w-full h-full object-cover object-center" />
              </div>
            </div>
          </div>
        </ScrollAniDiv>

        <div className="lg:col-span-full! m-2 h-[fit] flex flex-col mt-12">
          <h2 className="text-end mb-4">Hvad jeg kan</h2>
          <div id="HJK" className="lg:grid lg:grid-cols-3 gap-4 flex flex-col">
            <TextTemp title="Design" subtitle="Figma, UX og Adobe" description="Jeg har erfaring med at lave UX optimerede brugerflader og designs i Figma. Jeg har også kendskab til Adobe-pakken, herunder Premier Pro og illustrator og After Effects." description2="Jeg har igennem mit studie lærte igennem forskellige projekter hvilke betydning komponenter som farver, typografi og layout har for brugeroplevelsen." />
            <div className="flex justify-center items-center text-accent-1-5">
              <StgLoopDiv />
            </div>
            <div className="text-end flex flex-col justify-end">
              <TextTemp
                title="Webudvikling"
                pushStyle="w-full!"
                subtitle="HTML, CSS, JavaScript og React"
                description="Jeg har erfaring med at bygge responsive og interaktive webapplikationer ved hjælp af HTML, CSS og JavaScript. Jeg har også arbejdet med React til at skabe dynamiske brugergrænseflader.
            Denne hjemmeside er bygget i Next.js som er baseret på React. Framer-motion er brugt til animationer og TailwindCSS til styling."
                description2="Jeg har også kendskab til versionkontrolsystemer som Git og GitHub, hvilket gør mig i stand til at samarbejde effektivt i teams. "
              />
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="self-center">Tidligere Projektor</h3>
          <ScrollAniDiv>
            <div
              class="overflow-x-auto flex gap-4 snap-x snap-mandatory touch-pan-x p-4 carousel-container lg:grid 
                lg:grid-cols-[1.5fr_2fr_1.5fr] lg:gap-4
                "
            >
              <div class="flex-none w-4/5 snap-start p-2 shadow-md lg:order-2">
                <PastWork img="/bareenProj.png" tag="Bareen X Design Museum" screen="Desktop" title="Bareen school Project" link="https://bareenxdesignmuseum.netlify.app/" desc="Her er et skoleprojekt, hvor jeg og min gruppe skulle selv vælge en collab for tøj mærke bareen og lave en hjemmeside til den fiktive samaerbejdet" date="12.04.2025" />
              </div>
              <div class="flex-none w-4/5 snap-start  p-2 shadow-md lg:order-1">
                <PastWork
                  img="/familyfriends.png"
                  tag="Fetch fra API"
                  screen="Mobile"
                  title="Fetch og implementer et design"
                  link="https://family-friends-ochre.vercel.app/"
                  desc="Her er et skoleprojekt,hvor jeg skulle fetch noget dummyJSON fra et
                    API og implementere det i et design på mobil tilstand vi blevet givet af læren. Vi skulle benytte react og tailwind og brug hooks som zustand"
                  date="11.25.2025"
                />
              </div>
              <div class="flex-none w-4/5 snap-start p-2 shadow-md lg:order-3">
                <PastWork
                  img="/bareenFigma.png"
                  tag="Bareen Figma"
                  screen="Desktop"
                  title="Eksempel på -fra Research til produkt"
                  link="https://www.figma.com/design/lsLgMduJXEElNPsEFLjRvF/Bareen-x-Designmuseum?node-id=13-3&t=PPVqwqYdD13wDl9y-1/"
                  desc="Her er Figmaen til Bareen projektet vedhæftet, hvor min gruppe og jeg lavet research, udviklet design systemer og lavet user-tests
                    som førte til vores endelig projekt"
                  date="12.04.2025"
                />
              </div>
            </div>
          </ScrollAniDiv>
        </div>

        <div className="flex flex-col lg:max-w-[40%]" id="meAgain">
          <TextTemp
            title="Hvem er Solomon?"
            subtitle="Lidt mere me"
            description="Min baggrund er lidt mindre normal end den gennemsnitlige EK-studerende. Jeg kommer oprindeligt fra
                    et lille land kaldet
                    Uganda, og jeg taler derfor både engelsk og dansk flydende. Jeg har altid haft en passion for teknologi og kreativitet, hvilket førte mig til at studere multimediedesign."
            description2="Jeg elsker og foretrækker sunde gruppearbejde.
                Jeg kan se mig selv både som en del af et digitalt designteam og/eller et frontend-designteam."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
