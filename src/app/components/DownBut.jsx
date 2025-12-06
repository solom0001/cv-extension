"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const DownBut = ({ title, route }) => {
  const router = useRouter();
  const arrowVariants = {
    init: { scale: 1, backgroundColor: "var(--accent-2)" },
    hover: {
      scale: 1.05,
      backgroundColor: "var(--accent-2-5)",
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      onClick={() => router.push(route)}
      className="px-4 py-2.5 gap-3 flex items-center 
    justify-center hover:cursor-pointer hover:bg-accent-2-5 w-fit min-w-3.5 rounded-xs"
      variants={arrowVariants}
      initial="init"
      whileHover="hover"
      style={{ backgroundColor: "var(--accent-2)" }}
    >
      <p className=" text-sm! lg:text-xl! font-bold text-(--primary)">{title}</p>
    </motion.div>
  );
};

export default DownBut;
