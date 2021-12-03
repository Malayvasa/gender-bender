import { motion } from "framer-motion";
import NextButton from "../components/NextButton";

function SectionSix({ advanceState }) {
  return (
    <div>
      <div className="w-screen flex flex-col text-center content-center text-5xl md:text-4xl -mt-12 leading-snug place-items-stretch">
        <motion.div
          initial={{ y: "-20%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          className="w-max mx-auto"
          transition={{
            ease: "easeOut",
            duration: 1,
            delay: 1,
          }}
        >
          THESE CATEGORIES,
        </motion.div>
        <div className="flex flex-row w-max mx-auto place-items-stretch justify-between">
          <motion.div
            initial={{ y: "-20%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              ease: "easeOut",
              duration: 1,
              delay: 2,
            }}
          >
            SO OBVIOUS... <span className="font-serif">right?</span>
          </motion.div>
        </div>
        <div className="mx-auto mt-12">
          <NextButton advanceState={advanceState} delay={3} />
        </div>
      </div>
    </div>
  );
}

export default SectionSix;
