import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import convert from "color-convert";
import NextButton from "../components/NextButton";
import data from "../data/data";

function SectionEighteen({ advanceState }) {
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
    <div className="flex bg-gray-900 h-screen">
      <div className="absolute w-full h-screen z-10  overflow-scroll">
        <div className="w-full flex flex-row justify-around m-auto z-10 opacity-90">
          {data.map((song, index) => {
            return (
              <>
                <div
                  className="w-8 -ml-2 h-screen z-10 filter blur-2xl saturate-150"
                  style={{
                    backgroundColor: `${sortedHexArray[index].ProminentColor1}`,
                  }}
                  onMouseEnter={() => {
                    setCurrentSongObject(sortedHexArray[index]);
                  }}
                  onMouseLeave={() => {
                    setCurrentSongObject(null);
                  }}
                ></div>
              </>
            );
          })}
        </div>
      </div>
      <div className="absolute w-full h-screen z-50  overflow-scroll">
        <div className="w-full flex flex-row justify-around m-auto z-50 opacity-90">
          {data.map((song, index) => {
            return (
              <>
                <div
                  className="w-8 -ml-2 h-screen z-50 filter blur-2xl saturate-150"
                  style={{
                    backgroundColor: `${sortedHexArray[index].ProminentColor1}`,
                  }}
                  onMouseEnter={() => {
                    setCurrentSongObject(sortedHexArray[index]);
                  }}
                  onMouseLeave={() => {
                    setCurrentSongObject(null);
                  }}
                ></div>
              </>
            );
          })}
        </div>
      </div>
      <div className="text-center flex flex-col text-5xl m-auto text-white">
        <motion.div
          initial={{ y: "-30%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            ease: "easeOut",
            duration: 1,
            delay: 4,
          }}
          className="z-10"
        >
          <span className="font-serif">Gender</span> is in fact, fluid, like the{" "}
          <br /> English translation of the french <br /> word{" "}
          <span className="font-serif">Genre.</span>
        </motion.div>
        <div className="m-auto pt-12 z-50">
          <NextButton advanceState={advanceState} delay={8} />
        </div>
      </div>
      <AnimatePresence>
        {currentSongObject && (
          <>
            <motion.div
              initial={{ y: "-10%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-10%", opacity: 0 }}
              transition={{
                ease: "easeIn",
                duration: 0.3,
                delay: 0,
              }}
              className="absolute bottom-0 bg-gray-900 text-center pb-8 right-0 h-16 w-screen text-sm  z-30 pt-12 filter blur-3xl saturate-150 bg-opacity-70"
            ></motion.div>
            <motion.div
              className="z-40 text-center absolute bottom-0 flex w-screen h-16 mb-8 text-white flex-col justify-around filter saturate-150"
              initial={{ y: "-10%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-10%", opacity: 0 }}
              transition={{
                ease: "easeIn",
                duration: 0.3,
                delay: 0,
              }}
            >
              <div className="truncate text-3xl capitalize font-serif">
                {currentSongObject.Genre}
              </div>
              <div className="text-lg capitalize font-serif">
                {currentSongObject.SongName}, {currentSongObject.Artist},{" "}
                {currentSongObject.ReleaseYear}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SectionEighteen;
