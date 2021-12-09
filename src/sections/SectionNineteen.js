import { motion } from "framer-motion";
import convert from "color-convert";
import NextButton from "../components/NextButton";
import data from "../data/data";

function SectionNineteen({ advanceState }) {
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
                ></div>
              </>
            );
          })}
        </div>
      </div>
      <div className="text-center flex flex-col text-4xl m-auto text-white">
        <motion.div
          initial={{ y: "-30%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            ease: "easeOut",
            duration: 1,
            delay: 0,
          }}
          className="z-40"
        >
          <span className="font-serif">Gender</span> is a type of communication
          <br />
          with socially-agreed-upon conventions.
        </motion.div>
        <motion.div
          initial={{ y: "-30%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            ease: "easeOut",
            duration: 1,
            delay: 1,
          }}
          className="z-40 pt-8"
        >
          <span className="font-serif">Gender</span> can be aesthetic, <br />
          communicative, or functional.
        </motion.div>
        <motion.div
          initial={{ y: "-30%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            ease: "easeOut",
            duration: 1,
            delay: 2,
          }}
          className="z-40 pt-8"
        >
          <span className="font-serif">Genders</span> change over time <br /> as
          cultures invent new genders
          <br /> and discontinue the use of old ones.
        </motion.div>
        <motion.div
          initial={{ y: "-30%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            ease: "easeOut",
            duration: 1,
            delay: 3,
          }}
          className="z-40 pt-8"
        >
          Often, identities fit into multiple genders <br /> by way of borrowing
          and recombining <br /> these conventions.
        </motion.div>
        <motion.div
          initial={{ y: "-30%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            ease: "easeOut",
            duration: 1,
            delay: 4,
          }}
          className="z-40 pt-8"
        >
          The subjective nature of these identities means that <br /> these
          classifications are often arbitrary <br /> and controversial, and they
          may overlap.
        </motion.div>
        <div className="m-auto pt-12 z-50">
          <NextButton advanceState={advanceState} delay={5} />
        </div>
      </div>
    </div>
  );
}

export default SectionNineteen;
