"use client";

import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import DownBut from "./DownBut";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 689 });
  const isTablet = useMediaQuery({ minWidth: 690, maxWidth: 1024 });

  const myVariants = {
    start: {
      x: "50%",
      color: "var(--primary)",
      scale: 1.6,
    },
    mobileStart: {
      x: "80%",
      y: "250%",
      scale: 1.6,
    },
    tabletStart: {
      x: "150%",
      y: "250%",
      scale: 1.6,
    },
    mobileEnd: {
      x: "10%",
      y: "5%",
      scale: 1,
    },
    end: {
      x: 0,
      y: 0,
      scale: 0.8,
    },
    start2: { x: "100%" },
    end2: { x: 0 },
  };
  return (
    <div
      className="lg:h-[90vh] md:h-[60vh] h-[70vh] lg:flex lg:flex-row  mx-4 sm:mx-1
    relative
     after:content-['']
     after:absolute
     after:bottom-0
     after:right-0
    
     after:w-5
     after:h-5
     after:border-b-2
     after:border-r-2
     after:border-(--primary)

      before:content-['']
     before:absolute
     before:top-0
     before:left-0
     before:w-5
     before:h-5
     before:border-t-2
     before:border-l-2
     before:border-(--primary)
    "
    >
      <motion.div variants={myVariants} initial={isMobile ? "mobileStart" : isTablet ? "tabletStart" : "start"} animate={isMobile ? "mobileEnd" : "end"} transition={{ duration: 0.5, delay: 0.8 }} className=" mb-4 sm:mb-0  flex flex-col lg:flex-row items-center justify-self-start lg:border-r-2">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold ">
            Solomon<br></br>Mwesigwa
          </h1>
        </motion.div>

        <div className=" flex w-fit mt-4 lg:ml-8">
          <DownBut title="Udforske" route="#mePic" />
        </div>
      </motion.div>
      <motion.div variants={myVariants} initial="start2" animate="end2" transition={{ duration: 0.5, delay: 0.8 }} className="w-fit flex items-center p-4 header-back">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.2 }} className="m-4 grid grid-cols-1 *:col-start-1 *:row-start-1 items-center ">
          <div>
            <Image src="SVG/asset.svg" width={500} height={500} alt="background svg" className="w-full h-full object-cover" />
          </div>
          <div className="p-12">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold ">
              Multimedie-design<br></br>studerende
            </h1>

            <div className="flex w-fit my-2">
              <p>Studere på Erhvervsakademi københavn</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.5 }} className="flex flex-col self-start m-4">
        <h2 className="text-xl lg:text-3xl">AKTIVT SØGER PRAKTIKSTED</h2>
        <p className="mt-1.5">Kan starte: 19.Januar 2026</p>

        <div className="mt-4">
          <DownBut title="Kontakt" route="#foot" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
