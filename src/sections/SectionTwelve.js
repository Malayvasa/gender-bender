import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import convert from "color-convert";
import NextButton from "../components/NextButton";
import data from "../data/data";

function SectionTwelve({ advanceState }) {
  const [currentHoverColor, setCurrentHoverColor] = useState("#000");
  const [currentSongObject, setCurrentSongObject] = useState(null);

  const sortHue = () => {
    let array = data.map((item) => item);
    let sortedArray = array.sort((a, b) => {
      let aHue = convert.hex.hsl(a.ProminentColor1)[0];
      let bHue = convert.hex.hsl(b.ProminentColor1)[0];
      let aBrightness = convert.hex.hsl(a.ProminentColor1)[2];
      let bBrightness = convert.hex.hsl(b.ProminentColor1)[2];
      if (aHue > bHue) {
        return 1;
      } else if (aHue < bHue) {
        return -1;
      } else if (aBrightness > bBrightness) {
        return 1;
      } else if (aBrightness < bBrightness) {
        return -1;
      } else {
        return 0;
      }
    });
    return sortedArray;
  };

  const sortedHexArray = sortHue();

  return (
    <div className="flex h-screen">
      <div className="text-5xl h-screen md:text-4xl w-1/2 p-12 leading-none flex flex-col justify-between gap-y-4">
        <div>
          {" "}
          <span className="font-serif">Genres</span> can be aesthetic, <br />
          <motion.span
            initial={{ y: "-10%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-10%", opacity: 0 }}
            transition={{
              ease: "easeIn",
              duration: 0.3,
              delay: 0,
            }}
            style={{ color: `${currentHoverColor}` }}
          >
            communicative
          </motion.span>
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
                    {currentSongObject.SongName}
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
          <motion.div
            initial={{ y: "-10%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              ease: "easeIn",
              duration: 0.8,
              delay: 1,
            }}
            className="font-serif text-gray-400 text-2xl"
          >
            Hover over the album art
          </motion.div>
          <motion.div
            initial={{ y: "-10%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              ease: "easeIn",
              duration: 0.8,
              delay: 1,
            }}
            className="font-serif text-gray-400 text-lg"
          >
            Albums have been arranged by hue of the prominent color in album
            art.
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
                    className="w-24 h-24 "
                    initial={{ y: "0%", opacity: 1, display: "block" }}
                    animate={{ y: "0%", opacity: 0, display: "none" }}
                    transition={{
                      ease: "easeOut",
                      duration: 0.8,
                      delay: 2,
                    }}
                    style={{
                      backgroundColor: `${song.ProminentColor1}`,
                    }}
                    onMouseEnter={() => {
                      setCurrentHoverColor(song.ProminentColor1);
                      setCurrentSongObject(song);
                    }}
                    onMouseLeave={() => {
                      setCurrentHoverColor("#000");
                      setCurrentSongObject(null);
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
                      delay: 1.4,
                    }}
                    className="w-24 h-24 -mt-24 z-10"
                    style={{
                      backgroundColor: `${sortedHexArray[index].ProminentColor1}`,
                    }}
                    onMouseEnter={() => {
                      setCurrentHoverColor(
                        sortedHexArray[index].ProminentColor1
                      );
                      setCurrentSongObject(sortedHexArray[index]);
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

export default SectionTwelve;
