import { motion } from "framer-motion";
import NextButton from "../components/NextButton";

function SectionSeven({ advanceState }) {
  return (
    <div>
      <div className="flex flex-col mx-auto text-5xl -mt-12 md:text-4xl w-max place-items-stretch">
        <motion.div
          initial={{ y: "-20%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            ease: "easeOut",
            duration: 1,
            delay: 1,
          }}
        >
          HOWEVER,
          <span className="italic font-serif px-4"> the secret </span>
          IS THAT...
        </motion.div>{" "}
        <div className="mt-12 mx-auto">
          <NextButton advanceState={advanceState} delay={2} />
        </div>
      </div>
    </div>
  );
}

export default SectionSeven;
