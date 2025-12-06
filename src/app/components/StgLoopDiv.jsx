"use client";
import { motion } from "framer-motion";

const List = () => {
  const ulVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0,
        
      },
    },
  };

  const liVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0.5,
      },
    },
  };

  return (
    <motion.ul
      variants={ulVariants}
      initial="hidden"
      animate="visible"
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0.7, 
        duration:1,
      }}
      className="flex flex-col [&>*]:p-2 "
    >
      <motion.li variants={liVariants}>
        <h3 className="text-lg font-semibold">Figma</h3>
      </motion.li>

      <motion.li variants={liVariants}>
        <h3 className="text-lg font-semibold">HTML & CSS</h3>
      </motion.li>

      <motion.li variants={liVariants}>
        <h3 className="text-lg font-semibold">Tailwind CSS</h3>
      </motion.li>

      <motion.li variants={liVariants}>
        <h3 className="text-lg font-semibold">JavaScript</h3>
      </motion.li>

      <motion.li variants={liVariants}>
        <h3 className="text-lg font-semibold">React / Next.js</h3>
      </motion.li>
    </motion.ul>
  );
};

export default List;
