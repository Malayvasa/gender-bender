import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import NextButton from "../components/NextButton";
import data from "../data/data";

function SectionFourteen({ advanceState }) {
  const [currentHoverColor, setCurrentHoverColor] = useState("#000");
  const [currentSongObject, setCurrentSongObject] = useState(null);

  const sortLocation = () => {
    let array = data.map((item) => item);
    let sortedArray = array.sort((a, b) => {
      let aLocation = a.Region;
      let bLocation = b.Region;
      if (aLocation > bLocation) {
        return 1;
      } else if (aLocation < bLocation) {
        return -1;
      } else {
        return 0;
      }
    });
    return sortedArray;
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

  const sortedLocationArray = sortLocation();
  const sortedYearArray = sortYear();

  return (
    <div className="flex h-screen">
      <div className="text-5xl h-screen md:text-4xl w-1/2 p-12 leading-none flex flex-col justify-between gap-y-4">
        <div>
          {" "}
          <span className="font-serif">Genres</span> can be aesthetic, <br />
          communicative, or <span>functional</span>
          <motion.div
            initial={{ y: "-10%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              ease: "easeIn",
              duration: 0.8,
              delay: 0.5,
            }}
            className="mt-4"
          >
            They change{" "}
            <span style={{ color: `${currentHoverColor}` }}>over time</span> as
            cultures invent new genres and discontinue the use of old ones.
          </motion.div>
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
                    {currentSongObject.ReleaseYear}
                  </div>
                  <div className="text-sm capitalize font-serif">
                    {currentSongObject.Genre}
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
          <NextButton advanceState={advanceState} className="pt-24" delay={4} />
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
                <div className="w-24 h-24">
                  <motion.div
                    initial={{ y: "0%", opacity: 1 }}
                    animate={{ y: "0%", opacity: 0 }}
                    transition={{
                      ease: "easeOut",
                      duration: 0.8,
                      delay: 0.5,
                    }}
                    className="w-24 h-24"
                    style={{
                      backgroundColor: `${sortedLocationArray[index].ProminentColor1}`,
                    }}
                  ></motion.div>
                </div>
                <div>
                  <motion.div
                    initial={{ y: "0%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{
                      ease: "easeOut",
                      duration: 0.8,
                      delay: 0.5,
                    }}
                    className="w-24 h-24 -mt-24 z-10"
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
                  ></motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SectionFourteen;
