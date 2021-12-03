import { motion, AnimatePresence } from "framer-motion";
import NextButton from "../components/NextButton";

function SectionOne({ advanceState }) {
  return (
    <AnimatePresence>
      <div className="flex flex-col mx-auto md:-mt-12 text-5xl md:text-4xl w-max gap-y-2 place-items-stretch">
        <motion.div
          initial={{ y: "-20%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1, delay: 1 }}
        >
          SO,
        </motion.div>
        <motion.div
          initial={{ y: "-20%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1, delay: 2 }}
        >
          YOU KNOW THAT
        </motion.div>
        <motion.div
          initial={{ y: "-20%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1, delay: 3 }}
        >
          MUSIC IS CLASSIFIED
        </motion.div>
        <motion.div
          initial={{ y: "-20%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1, delay: 4 }}
        >
          INTO <span className="italic font-serif">solid </span>
          CATEGORIES?
        </motion.div>
        <NextButton advanceState={advanceState} delay={5}></NextButton>
      </div>
    </AnimatePresence>
  );
}

export default SectionOne;
