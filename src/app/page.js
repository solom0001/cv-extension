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
                description="Jeg er en 23-årig og studerer Multimediedesign på Erhvervsakademi København (EK). Med et fundament fra 3 semestre som datamatiker og 3 semestre som multimediedesigner tilbyder jeg stærke kompetencer indenfor digitalt design og frontend. Jeg søger en virksomhed, hvor jeg i et praktikforløb på 10 uger kan bidrage med at udvikle webløsninger.
          "
              />
            </ScrollAniDiv>
            <div className="flex justify-end mt-4 gap-4">
              <DownBut title="Se mine kompetencer" route="#HJK" />
              <a href="/CVDec25.pdf" target="_blank">
                <DownBut title="Se Mit CV" />
              </a>
            </div>
          </div>
        </div>
        <ScrollAniDiv>
          <div className="flex flex-col">
            <h3 className="self-end">Mig som moodboard</h3>
            <div className="grid lg:grid-cols-1 grid-rows-[1fr_auto] grid-cols-[0.5fr_6fr_0.5fr] *:col-start-2 gap-1 mt-4 lg:items-center ">
              <div className="text-gray-400 text-left g order-2 lg:order-1 px-2 lg:mx-auto lg:col-start-1 ">
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
          <div id="HJK" className="lg:grid lg:grid-cols-[1fr_0.5fr_1fr] gap-4 flex flex-col">
            <TextTemp
              title="Design"
              subtitle="Figma, UX og Adobe"
              description="Jeg har erfaring med at lave UX optimerede 
            brugerflader og designs i Figma. 
            Jeg har også kendskab til Adobe-pakken, herunder Premier Pro og illustrator og After Effects."
              description2="Gennem mit studie har jeg opnået en lang række kompetencer gennem de projektopgaver, vi har arbejdet med. Jeg har blandt andet lært, hvilken betydning farver, typografi og layout har for en hjemmeside, og hvor vigtigt disse komponenter er for brugeroplevelsen."
            />
            <div className="flex justify-center items-center text-accent-1">
              <StgLoopDiv />
            </div>
            <div className="text-end! ">
              <TextTemp
                title="Webudvikling"
                pushStyle="items-end text-end"
                subtitle="HTML, CSS, JavaScript og React"
                description="Jeg har erfaring med at bygge responsive og interaktive webapplikationer ved hjælp af HTML, CSS og JavaScript. Jeg har også arbejdet med React til at skabe dynamiske brugergrænseflader.
            Denne hjemmeside er bygget i Next.js som er baseret på React. Framer-motion er brugt til animationer og TailwindCSS til styling."
                description2="Jeg har også kendskab til versionkontrolsystemer som Git og GitHub, hvilket gør mig i stand til at samarbejde effektivt i teams. "
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-center">
          <h3 className="self-center">Tidligere Projektor</h3>
          <ScrollAniDiv>
            <div
              class="overflow-x-auto flex gap-4 snap-x snap-mandatory  p-4 carousel-container xl:grid 
                xl:grid-cols-3 xl:gap-4 xl:*:mx-auto [touch-action:pan-x pan-y]
                "
            >
              <div class="flex-none w-4/5 snap-start shadow-md xl:order-2">
                <PastWork img="/bareenProj.png" tag="Bareen X Design Museum" screen="Desktop" title="Bareen skole Projekt" link="https://bareenxdesignmuseum.netlify.app/" desc="Min gruppe og jeg skulle selv vælge en collab for tøj mærke bareen og lave en hjemmeside til den fiktive samaerbejdet" date="25.04.2025" />
              </div>
              <div class="flex-none w-4/5 snap-start shadow-md xl:order-1">
                <PastWork
                  img="/familyfriends.png"
                  tag="Fetch fra API"
                  screen="Mobile"
                  title="Fetch og implementer et design"
                  link="https://family-friends-ochre.vercel.app/"
                  desc="Jeg skulle fetch noget dummyJSON fra et
                    API og implementere det i et design på mobil tilstand vi blevet givet af læren. Vi skulle benytte react og tailwind og brug hooks som zustand"
                  date="11.25.2025"
                />
              </div>
              <div class="flex-none w-4/5 snap-start shadow-md xl:order-3">
                <PastWork
                  img="/bareenFigma.png"
                  tag="Bareen Figma"
                  screen="Desktop"
                  title="Eksempel på -fra Research til produkt"
                  link="https://www.figma.com/design/lsLgMduJXEElNPsEFLjRvF/Bareen-x-Designmuseum?node-id=13-3&t=PPVqwqYdD13wDl9y-1/"
                  desc="Figmaen til Bareen projektet vedhæftet, hvor min gruppe og jeg lavet research, udviklet design systemer og lavet user-tests
                    som førte til vores endelig projekt"
                  date="--.04.2025"
                />
              </div>
            </div>
          </ScrollAniDiv>
        </div>

        <div className="flex flex-col lg:max-w-[40%]" id="meAgain">
          <TextTemp
            title="Hvem er Solomon?"
            subtitle="Lidt mere me"
            description={`Min baggrund er lidt mindre normal end den gennemsnitlige EK-studerende. Jeg kommer oprindeligt fra et lille land kaldet Uganda, og jeg taler derfor både engelsk og dansk flydende. Jeg har altid haft en passion for teknologi og kreativitet, hvilket førte mig til at studere multimediedesign.

                    Jeg har en stor passion for alle former for kunst, om det er tegninger, malerier, animationer eller film. Heldigvis er det emner, der ofte gør det let at falde i snak med nye mennesker :). Jeg er den ældste af fire søskende, så jeg sætter en ære i at kunne tage ansvar og have blik for de små detaljer. Og hvis du også følger med i NBA, så er jeg en ægte ride or die Golden State Warriors-fan!
                    `}
            description2="Jeg elsker og foretrækker sunde gruppearbejde.
                Jeg kan se mig selv både som en del af et digitalt designteam og/eller et frontend-designteam."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
