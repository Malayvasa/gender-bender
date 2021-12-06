import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NextButton from "../components/NextButton";

function SectionSix({ advanceState, Tracks }) {
  const T7 = new Audio(Tracks(`./T7.mp3`).default);
  const [isPlayedOnce, setIsPlayedOnce] = useState(false);
  const playTrack = (TrackNum) => {
    if (TrackNum === 7 && !isPlayedOnce) {
      T7.load();
      setTimeout(() => {
        T7.play();
      }, 0);
      T7.pause();
    }
  };
  const [animState, setAnimState] = useState(true);
  const interimAdvanceState = () => {
    playTrack(7);
    setAnimState(false);
    setIsPlayedOnce(true);
    setTimeout(() => {
      advanceState();
    }, 1000);
  };
  return (
    <div className="w-screen flex flex-col text-5xl md:text-4xl -mt-12 leading-snug place-items-stretch">
      <AnimatePresence>
        {animState && (
          <>
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
              <motion.div
                initial={{ y: "-20%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                className="w-max"
                transition={{
                  ease: "easeOut",
                  duration: 1,
                  delay: 1,
                }}
              >
                CATEGORIES,
              </motion.div>
              <div className="flex flex-row w-max place-items-stretch justify-between">
                <motion.div
                  initial={{ y: "-20%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    ease: "easeOut",
                    duration: 1,
                    delay: 3,
                  }}
                >
                  OBVIOUS ENOUGH... RIGHT?
                </motion.div>
              </div>
              <div className="mx-auto mt-12 w-full">
                <div className="mx-auto w-min">
                  <NextButton advanceState={interimAdvanceState} delay={5} />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SectionSix;
