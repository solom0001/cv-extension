"use client";

import { motion } from "framer-motion";
import DownBut from "./DownBut";

const Hero = () => {
  const myVariants = {
    start: {
      x: 0,
      color: "var(--primary)",
      scale: 1,
    },
    end: {
      x: "-40%",
      color: "var(--accent-2)",
      scale: 0.6,
    },
    start2: { x: "100%" },
    end2: { x: "-55%" },
  };
  return (
    <div
      className="min-h-[90vh] flex mx-4 
    relative
     after:content-['']
     after:absolute
     after:bottom-0
     after:right-0
     after:w-[20px]
     after:h-[20px]
     after:border-b-2
     after:border-r-2
     after:border-(--primary)

      before:content-['']
     before:absolute
     before:top-0
     before:left-0
     before:w-[20px]
     before:h-[20px]
     before:border-t-2
     before:border-l-2
     before:border-(--primary)
    "
    >
      <motion.div variants={myVariants} initial="start" animate="end" transition={{ duration: 0.5, delay: 0.8 }} className="w-full flex items-center justify-end border-r-2">
        <motion.div initial={{ opacity: 0, y: 50, color: "#0a090c!" }} animate={{ opacity: 1, y: 0, color: "#90ddf0!" }}>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold p-4">
            Solomon<br></br>Mwesigwa
          </h1>
        </motion.div>

        <div className="mt-4">
          <DownBut title="" route="#mePic" />
        </div>
      </motion.div>
      <motion.div variants={myVariants} initial="start2" animate="end2" transition={{ duration: 0.5, delay: 0.8 }} className="w-full flex items-center justify-between bg-(--secondary) p-6">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.2 }} className="flex flex-col">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold">
            Multimedie-design<br></br>studerende
          </h1>

          <div className="flex w-fit">
            <p>Studere på Erhvervsakademi københavn</p>
          </div>
        </motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.5 }} className="flex flex-col self-start! m-4">
        <h2>AKTIVT SØGER PRAKTIKSTED</h2>
        <p className="mt-1.5">Kan starte: 19.Januar 2026</p>

        <div className="mt-4">
          <DownBut title="Kontakt" route="#foot" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
