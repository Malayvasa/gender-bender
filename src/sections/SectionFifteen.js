import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import NextButton from "../components/NextButton";
import data from "../data/data";

function SectionFifteen({ advanceState, Tracks }) {
  const [currentHoverColor, setCurrentHoverColor] = useState("#000");
  const [currentSongObject, setCurrentSongObject] = useState(null);
  const [animState, setAnimState] = useState(1);

  const [isPlayedOnce, setIsPlayedOnce] = useState(false);

  const TMAIN = new Audio(Tracks(`./TMAIN.mp3`).default);
  const T1 = new Audio(Tracks(`./T1.mp3`).default);

  const playTrack = (TrackNum) => {
    if (TrackNum === 69 && !isPlayedOnce) {
      TMAIN.load();
      setTimeout(() => {
        TMAIN.play();
        setIsPlayedOnce(true);
      }, 1800);
      TMAIN.pause();
    } else if (TrackNum === 1) {
      T1.load();
      setTimeout(() => {
        T1.play();
      }, 9900);
      T1.pause();
    }
  };

  const sortYear = () => {
    let array = data.map((item) => item);
    let sortedArray = array.sort((a, b) => {
      let aYear = a.ReleaseYear;
      let bYear = b.ReleaseYear;
      if (aYear > bYear) {
        return 1;
      } else if (aYear < bYear) {
        return -1;
      } else {
        return 0;
      }
    });
    return sortedArray;
  };

  const interimAdvanceState = () => {
    if (animState === 3) {
      setTimeout(() => {
        advanceState();
      }, 1000);
    } else {
      setAnimState(animState + 1);
    }
  };

  const sortedYearArray = sortYear();

  return (
    <div className="flex h-screen">
      <div className="text-5xl h-screen md:text-4xl w-1/2 p-12 leading-none flex flex-col justify-between gap-y-4">
        <div>
          <AnimatePresence>
            {animState === 1 && (
              <motion.div
                initial={{ y: "-10%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-10%", opacity: 0 }}
                transition={{
                  ease: "easeIn",
                  duration: 0.8,
                  delay: 0.5,
                }}
                className="mt-4"
              >
                Often, identities fit into multiple{" "}
                <span
                  style={{ color: `${currentHoverColor}` }}
                  className="font-serif"
                >
                  {" "}
                  Genres{" "}
                </span>{" "}
                by way of borrowing and recombining these conventions.
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {animState === 2 && (
              <motion.div
                initial={{ y: "-10%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-10%", opacity: 0 }}
                transition={{
                  ease: "easeIn",
                  duration: 0.8,
                  delay: 1.2,
                }}
                className="mt-4"
              >
                The subjective nature of these identities means that that these
                classifications are often arbitrary and controversial, and they
                may overlap.
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {animState === 3 && (
              <motion.div
                initial={{ y: "-10%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-10%", opacity: 0 }}
                transition={{
                  ease: "easeIn",
                  duration: 0.8,
                  delay: 1.9,
                }}
                className="mt-4 mb-8"
                onAnimationStart={() => {
                  playTrack(69);
                }}
              >
                So...
                <div className="mt-8">
                  <span
                    style={{ color: `${currentHoverColor}` }}
                    className="font-serif"
                  >
                    {" "}
                    Genre{" "}
                  </span>{" "}
                  is a style of music that’s A type of communication with
                  socially-agreed-upon conventions that can be aesthetic,
                  communicative, or functional, and changes over time as
                  cultures invent new genres and discontinue the use of old
                  ones.
                </div>
                <motion.div
                  initial={{ y: "-10%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-10%", opacity: 0 }}
                  className="mt-12 font-serif"
                  transition={{
                    ease: "easeIn",
                    duration: 0.8,
                    delay: 9.9,
                  }}
                  onAnimationStart={() => {
                    playTrack(1);
                  }}
                >
                  but you already knew that
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {currentSongObject && (
              <motion.div
                initial={{ y: "-10%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-10%", opacity: 0 }}
                transition={{
                  ease: "easeIn",
                  duration: 0.3,
                  delay: 0,
                }}
                className="w-full text-3xl z-50 py-4"
              >
                <div className="flex flex-col justify-between">
                  <div className="text-xl capitalize font-serif">
                    {currentSongObject.Genre}
                  </div>
                  <div className="text-sm capitalize font-serif">
                    {currentSongObject.Artist}, {currentSongObject.Region},{" "}
                    {currentSongObject.ReleaseYear}
                  </div>
                  <div
                    className="w-full h-1 mt-2"
                    style={{
                      backgroundColor: `${currentHoverColor}`,
                    }}
                  ></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div>
          <NextButton
            advanceState={interimAdvanceState}
            className="pt-24"
            delay={4}
          />
          <div className="font-serif text-gray-400 text-2xl">
            Hover over the album art
          </div>
          <motion.div
            initial={{ y: "-10%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              ease: "easeIn",
              duration: 0.8,
              delay: 0.5,
            }}
            className="font-serif text-gray-400 text-lg"
          >
            Albums have been arranged by release year.
          </motion.div>
        </div>
      </div>

      <div className="w-1/2 bg-white p-2 overflow-scroll h-screen flex justify-evenly">
        <div className="grid grid-cols-6 gap-2 w-max m-auto my-auto">
          {data.map((song, index) => {
            return (
              <div>
                <div>
                  <div
                    initial={{ y: "0%", opacity: 1 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{
                      ease: "easeOut",
                      duration: 0.8,
                      delay: 0.5,
                    }}
                    className="w-24 h-24 z-10"
                    style={{
                      backgroundColor: `${sortedYearArray[index].ProminentColor1}`,
                    }}
                    onMouseEnter={() => {
                      setCurrentHoverColor(
                        sortedYearArray[index].ProminentColor1
                      );
                      setCurrentSongObject(sortedYearArray[index]);
                    }}
                    onMouseLeave={() => {
                      setCurrentHoverColor("#000");
                      setCurrentSongObject(null);
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SectionFifteen;
