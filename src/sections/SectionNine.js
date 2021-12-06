import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NextButton from "../components/NextButton";

function SectionNine({ advanceState }) {
  const [animState, setAnimState] = useState(true);
  const interimAdvanceState = () => {
    setAnimState(false);
    setTimeout(() => {
      advanceState();
    }, 1100);
  };

  return (
    <AnimatePresence>
      {animState && (
        <motion.div
          initial={{ y: "-20%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-20%", opacity: 0 }}
          className="mx-auto w-max"
          transition={{
            ease: "easeOut",
            duration: 1,
            delay: 0,
          }}
        >
          <div className="flex flex-col mx-auto text-5xl -mt-12 md:text-4xl w-max place-items-stretch">
            <motion.div
              initial={{ y: "-20%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                ease: "easeOut",
                duration: 1,
                delay: 2,
              }}
            >
              THE THING IS
            </motion.div>{" "}
            <motion.div
              initial={{ y: "-20%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                ease: "easeOut",
                duration: 1,
                delay: 4,
              }}
            >
              YOU CAN BREAK THESE SO
            </motion.div>{" "}
            <motion.div
              initial={{ y: "-20%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                ease: "easeOut",
                duration: 1,
                delay: 4,
              }}
            >
              CALLED <span className="font-serif">categories</span>
            </motion.div>{" "}
            <motion.div
              className="pt-8"
              initial={{ y: "-20%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                ease: "easeOut",
                duration: 1,
                delay: 6,
              }}
            >
              YOU CAN BREAK <span className="font-serif">genre</span>
              <motion.span
                className="font-serif"
                initial={{ y: "-20%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  ease: "easeOut",
                  duration: 1,
                  delay: 7.5,
                }}
              >
                .
              </motion.span>
            </motion.div>{" "}
            <div className="mt-12 mx-auto">
              <NextButton advanceState={interimAdvanceState} delay={9.5} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SectionNine;
