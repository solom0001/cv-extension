"use client";
import { SlArrowDown } from "react-icons/sl";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const DownBut = ({ title,route }) => {

     const router = useRouter();
  const arrowVariants = {
    start: { y: 2, scale: 1 },
    end: {
      y: 0,
      backgroundColor: "rgba(247, 137, 135, 0.7)",
      scale: 1.05,
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div onClick={() => router.push(route)} className="p-4 [&>*]:m-0 [&>*]:p-0 gap-4 [&>*]:w-fit w-fit flex flex-nowrap hover:cursor-pointer justify-items-center items-center bg-(--accent-2)" variants={arrowVariants} initial="start" whileHover="end">
      <p className="font-bold">{title}</p>
      <div>
        <motion.div variants={arrowVariants}>
          <SlArrowDown size={15} style={{ margin: 0, padding: 0 }} className="mt-4 mx-auto text-(--primary)" />
        </motion.div>
        <motion.div variants={arrowVariants}>
          <SlArrowDown size={17} style={{ margin: 0, padding: 0 }} className="mt-4 mx-auto text-(--primary)" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DownBut;
