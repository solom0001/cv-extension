import Hero from "./components/Hero";

import Image from "next/image";
import TextTemp from "./components/TextTemp";
import ScrollAniDiv from "./components/ScrollDiv";
import DownBut from "./components/DownBut";
import StgLoopDiv from "./components/StgLoopDiv";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <section className="grid grid-cols-[1fr_minmax(0,1200px)_1fr] [&>*]:col-start-2 [&>*]:mt-12 gap-12">
        <div className="grid grid-cols-2">
          <div className="pfPicBackScreen w-full flex justify-center items-center object-fill ">
            <Image id="mePic" src="/mebackgroundless.png" alt="Profile Picture" width={500} height={500} className="mx-auto" />
          </div>
          <div className=" flex flex-col ">
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
          <div className="flex flex-col text-center justify-items-end">
            <h3 className="">Mig men som moodboard</h3>
            <div className="grid grid-cols-[1fr_3fr] gap-4 mt-8">
              <div className="text-gray-400 text-start! flex flex-col gap-2 my-auto">
                <h3 className="text-accent-1">Relevante billede kilder:</h3>
                <p>Stephen Currypic: https://www.flickr.com/photos/mattbritt00/8561855249/in/photostream/</p>
                <p>Black/white Naruto: https://www.flickr.com/photos/44124390434@N01/338628</p>
                <p className="font-bold text-accent-2! mt-8">Lidt mere om hvem jeg er &#10511;</p>
              </div>
              <Image src="/meMoodboard.png" alt="Moodboard" width={600} height={400} className=" mx-auto" />
            </div>
          </div>
        </ScrollAniDiv>

        <div className="col-span-full! m-2 h-[400px] flex flex-col mt-12">
          <h2 className="text-end mb-4">Hvad jeg kan</h2>
          <div id="HJK" className="grid grid-cols-3 gap-4">
            <TextTemp title="Design" subtitle="Figma, UX og Adobe" description="Jeg har erfaring med at lave UX optimerede brugerflader og designs i Figma. Jeg har også kendskab til Adobe-pakken, herunder Premier Pro og illustrator og After Effects." description2="Jeg har igennem mit studie lærte igennem forskellige projekter hvilke betydning komponenter som farver, typografi og layout har for brugeroplevelsen." />
            <div className="flex justify-center items-center text-accent-1-5">
              <StgLoopDiv />
            </div>
            <div className="text-end">
              <TextTemp
                title="Webudvikling"
                subtitle="HTML, CSS, JavaScript og React"
                description="Jeg har erfaring med at bygge responsive og interaktive webapplikationer ved hjælp af HTML, CSS og JavaScript. Jeg har også arbejdet med React til at skabe dynamiske brugergrænseflader.
            Denne hjemmeside er bygget i Next.js som er baseret på React. Framer-motion er brugt til animationer og TailwindCSS til styling."
                description2="Jeg har også kendskab til versionkontrolsystemer som Git og GitHub, hvilket gør mig i stand til at samarbejde effektivt i teams. "
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col max-w-[40%]">
          <TextTemp
            title="Hvem er Solomon?"
            subtitle="HTML, CSS, JavaScript og React"
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
