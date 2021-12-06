import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NextButton from "../components/NextButton";

function SectionEight({ advanceState, Tracks }) {
  const T9 = new Audio(Tracks(`./T9.mp3`).default);
  const [isPlayedOnce, setIsPlayedOnce] = useState(false);
  const playTrack = (TrackNum) => {
    if (TrackNum === 9 && !isPlayedOnce) {
      T9.load();
      setTimeout(() => {
        T9.play();
      }, 0);
      T9.pause();
    }
  };
  const [animState, setAnimState] = useState(true);
  const interimAdvanceState = () => {
    playTrack(9);
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
              initial={{ y: "0%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-20%", opacity: 0 }}
              className="mx-auto w-max"
              transition={{
                ease: "easeOut",
                duration: 1,
                delay: 0,
              }}
            >
              <div className="flex flex-row w-max place-items-stretch justify-between">
                <motion.div className="font-serif">right?</motion.div>
              </div>
              <div className="mx-auto mt-12 w-max">
                <NextButton advanceState={interimAdvanceState} delay={1} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SectionEight;
