import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NextButton from "../components/NextButton";

function SectionOne({ advanceState, Tracks }) {
  const T1 = new Audio(Tracks(`./T1.mp3`).default);
  const T1B = new Audio(Tracks(`./T1B.mp3`).default);
  const T1C = new Audio(Tracks(`./T1C.mp3`).default);
  const [exitAnim, setExitAnim] = useState(true);
  const [isItalic, setIsItalic] = useState(true);
  const [isPlayedOnce, setIsPlayedOnce] = useState(false);

  const playTrack = (TrackNum) => {
    if (TrackNum === 1 && !isPlayedOnce) {
      T1.load();
      setTimeout(() => {
        T1.play();
      }, 1000);
      T1.pause();
    } else if (TrackNum === 2 && !isPlayedOnce) {
      T1B.load();
      setTimeout(() => {
        T1B.play();
      }, 3000);
      T1B.pause();
    } else if (TrackNum === 3 && !isPlayedOnce) {
      T1C.load();
      setTimeout(() => {
        T1C.play();
      }, 5000);
      T1C.pause();
      setTimeout(() => {
        setIsItalic(!isItalic);
      }, 7000);
      setIsPlayedOnce(true);
    }
  };

  const interimAdvanceState = () => {
    setExitAnim(false);
    setTimeout(() => {
      advanceState();
    }, 1100);
  };

  return (
    <AnimatePresence>
      {exitAnim && (
        <motion.div
          initial={{ y: "0%", opacity: 1 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-20%", opacity: 0 }}
          transition={{ ease: "easeOut", duration: 1, delay: 0 }}
        >
          <div className="flex flex-col mx-auto md:-mt-12 text-5xl md:text-4xl w-max place-items-stretch">
            <motion.div
              initial={{ y: "-20%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-20%", opacity: 0 }}
              transition={{ ease: "easeOut", duration: 1, delay: 1 }}
              className="w-24 -ml-8 pb-8 text-black"
              onAnimationStart={playTrack(1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                width="100%"
                fill="currentColor"
                stroke="currentColor"
                viewBox="0 0 700 700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M313.45 454c19 1 31.69 8.42 43.18 19.6v6c0 26.41-23.76 40.28-48 39-17.9-.94-45.11-12.73-43.68-34.45 1.45-21.95 30.22-31.15 48.49-30.2m43.18-6.68a81 81 0 00-42.06-14.59c-37.19-1.95-68.91 20.47-70.85 50.06s26.62 55.15 63.81 57.1 70.39-22 70.39-60.27v-256c6.64 11.44 13.91 20.25 21.1 29 12.34 14.95 20.75 27.26 26.28 41.26s8.47 30.39 9.82 53.28h21.26c-1.3-21.15-3.39-41.22-11.25-61.12-6.48-16.39-15.93-30.34-29.69-47-25.35-30.71-24.7-39-35.87-75.14h-22.93z"
                />
              </svg>
            </motion.div>
            <motion.div
              initial={{ y: "-20%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-20%", opacity: 0 }}
              transition={{ ease: "easeOut", duration: 1, delay: 3 }}
              onAnimationStart={playTrack(2)}
            >
              YOU KNOW HOW MUSIC
            </motion.div>
            <motion.div
              initial={{ y: "-20%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-20%", opacity: 0 }}
              transition={{ ease: "easeOut", duration: 1, delay: 5 }}
              onAnimationStart={playTrack(3)}
              className="flex flex-row gap-x-2 "
            >
              IS
              <div className="flex flex-row">
                <AnimatePresence>
                  {isItalic && (
                    <motion.div
                      initial={{
                        x: "0%",
                        y: "0%",
                        opacity: 1,
                        width: "12.875rem",
                      }}
                      animate={{
                        x: "0%",
                        y: "0%",
                        opacity: 1,
                        width: "12.875rem",
                      }}
                      exit={{ x: "-20%", opacity: 0, width: "0rem" }}
                      transition={{ ease: "easeOut", duration: 0.3, delay: 0 }}
                      className="text-center"
                    >
                      {" "}
                      CLASSIFIED{" "}
                    </motion.div>
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {!isItalic && (
                    <motion.div>
                      <motion.div
                        initial={{
                          y: "0%",
                          opacity: 0,
                          width: "0rem",
                        }}
                        animate={{
                          y: "0%",
                          opacity: 1,
                          display: "block",
                          width: "7.5rem",
                        }}
                        transition={{
                          ease: "easeOut",
                          duration: 0.3,
                          delay: 0.4,
                        }}
                        className="text-center font-serif w-full"
                      >
                        {" "}
                        classified{" "}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>{" "}
              INTO
            </motion.div>
            <motion.div
              initial={{ y: "-20%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-20%", opacity: 0 }}
              transition={{ ease: "easeOut", duration: 1, delay: 5 }}
              onAnimationStart={playTrack(3)}
              className="flex flex-row gap-x-2"
            >
              <div className="flex flex-row">
                <AnimatePresence>
                  {isItalic && (
                    <motion.div
                      initial={{ y: "0%", opacity: 1, width: "6.75rem" }}
                      animate={{ y: "0%", opacity: 1, width: "6.75rem" }}
                      exit={{ y: "0%", opacity: 0, width: "0rem" }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.5,
                        delay: 0.5,
                      }}
                      className="text-center"
                    >
                      {" "}
                      SOLID{" "}
                    </motion.div>
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {!isItalic && (
                    <motion.div>
                      <motion.div
                        initial={{ y: "0%", opacity: 0, width: "0rem" }}
                        animate={{
                          y: "0%",
                          opacity: 1,
                          display: "block",
                          width: "3.875rem",
                        }}
                        transition={{
                          ease: "easeOut",
                          duration: 0.5,
                          delay: 1,
                        }}
                        className="text-center font-serif w-full"
                      >
                        {" "}
                        solid{" "}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>{" "}
              CATEGORIES
            </motion.div>
            <div className="pt-8">
              <NextButton advanceState={interimAdvanceState} delay={9.5} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SectionOne;
