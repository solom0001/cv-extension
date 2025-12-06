"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const PastWork = ({ desc, date, title, link, tag, img, screen }) => {
  const isMobile = useMediaQuery({ maxWidth: 689 });

  const myVariants = {
    mobileRest: { opacity: 1, y: 0 },
    hiddenUp: { opacity: 0, y: 100 },
    hover: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  return (
    <>
      {isMobile ? (
        <a href={link}>
          <motion.div variants={myVariants} initial="rest" whileHover="hover" className=" grid grid-rows-[minmax(0,300px)_0.2fr] overflow-hidden border-2 border-(--accent-2) rounded cursor-pointer ">
            <div className="grid grid-cols-1 grid-rows-1 *:col-start-1 *:row-start-1">
              <div className="col-start-1 col-span-full relative z-5">
                <Image loading="eager" src={img} alt="event of month" width={400} height={400} className="w-full h-full object-contain object-bottom" />
              </div>
              <motion.span
                variants={myVariants}
                initial={isMobile ? "mobileRest" : "hiddenUp"}
                whileHover="hover"
                className="grid grid-rows-2 w-full h-full col-start-2 
        bg-white/10 lg:bg-white/70 relative z-10 backdrop-blur-xs lg:backdrop-blur-xl shadow-lg"
              >
                <div className=" hidden m-auto lg:flex">
                  <a className="px-4 py-2 mx-auto bg-accent-2 hover:bg-(--accent-2-5) hover:scale-110 transition-all duration-150 ease-in-out" href={link}>
                    Besøg
                  </a>
                </div>
                <span className="flex flex-col flex-1 p-4">
                  <h2 className="">{title}</h2>
                  <p>{desc}</p>
                </span>
              </motion.span>
            </div>
            <span className="bg-accent-2 p-4 relative z-15 ">
              <ul className="flex flex-nowrap justify-between ml-auto gap-8 list-none">
                <li className="font-bold">{tag}</li>
                <li className="text-sm">
                  <span className="flex flex-col m-auto text-end">
                    <p className="font-bold">{screen}</p>
                    <p>{date}</p>
                  </span>
                </li>
              </ul>
            </span>
          </motion.div>
        </a>
      ) : (
        <motion.div variants={myVariants} initial="rest" whileHover="hover" className=" grid grid-rows-[minmax(0,300px)_0.2fr] overflow-hidden border-2 border-(--accent-2) rounded cursor-pointer ">
          <div className="grid grid-cols-1 grid-rows-1 *:col-start-1 *:row-start-1">
            <div className="col-start-1 col-span-full relative z-5">
              <Image loading="eager" src={img} alt="event of month" width={400} height={400} className="w-full h-full object-contain object-bottom" />
            </div>
            <motion.span
              variants={myVariants}
              initial={isMobile ? "mobileRest" : "hiddenUp"}
              whileHover="hover"
              className="grid grid-rows-2 w-full h-full col-start-2 
        bg-white/10 relative z-10 backdrop-blur-xs lg:backdrop-blur-md shadow-lg"
            >
              <div className=" hidden m-auto lg:flex">
                <a className="px-4 py-2 mx-auto bg-accent-2 hover:bg-(--accent-2-5) hover:scale-110 transition-all duration-150 ease-in-out" href={link}>
                  Besøg
                </a>
              </div>
              <span className="flex flex-col flex-1 p-4">
                <h2 className="">{title}</h2>
                <p>{desc}</p>
              </span>
            </motion.span>
          </div>
          <span className="bg-accent-2 p-4 relative z-15 ">
            <ul className="flex flex-nowrap justify-between ml-auto gap-8 list-none">
              <li className="font-bold">{tag}</li>
              <li className="text-sm">
                <span className="flex flex-col m-auto text-end">
                  <p className="font-bold">{screen}</p>
                  <p>{date}</p>
                </span>
              </li>
            </ul>
          </span>
        </motion.div>
      )}
    </>
  );
};

export default PastWork;
