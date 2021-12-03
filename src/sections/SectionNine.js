import { motion } from "framer-motion";
import NextButton from "../components/NextButton";

function SectionNine({ advanceState }) {
  return (
    <div>
      <div className="w-max mx-auto place-items-stretch -mt-12">
        <div className="flex  text-5xl md:text-4xl w-max leading-snug place-items-stretch">
          <motion.div
            initial={{ y: "-20%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              ease: "easeOut",
              duration: 1,
              delay: 1,
            }}
            className="w-22 text-center font-serif"
          >
            you
          </motion.div>{" "}
          <div>CAN BREAK</div>
        </div>
        <div className=" text-5xl md:text-4xl w-max leading-snug place-items-stretch">
          THESE CATEGORIES,
        </div>
        <div className="text-5xl md:text-4xl w-max leading-snug place-items-stretch">
          ALSO KNOWN AS GENRES
        </div>
      </div>

      <div className="w-full">
        <div className="mx-auto w-min pt-12">
          <NextButton advanceState={advanceState} delay={2}></NextButton>
        </div>
      </div>
    </div>
  );
}

export default SectionNine;
