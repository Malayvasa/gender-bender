import { motion } from "framer-motion";
import NextButton from "../components/NextButton";
import data from "../data/data";
let albumCovers = require.context("../../src/assets/albumCovers", true);

function SectionTen({ advanceState }) {
  return (
    <div className="flex h-screen">
      <div className="text-5xl md:text-4xl w-1/2 p-12 leading-none flex flex-col space-y-4">
        <motion.div
          initial={{ y: "-10%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            ease: "easeIn",
            duration: 0.8,
            delay: 1,
          }}
        >
          <span className="font-serif">Genre</span> is a style of music,
          literature, <br /> any sort of art, or whatnot.
        </motion.div>
        <motion.div
          initial={{ y: "-10%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            ease: "easeIn",
            duration: 0.8,
            delay: 4,
          }}
        >
          It’s a type of communication with socially-agreed-upon conventions
          developed <br /> over time.
        </motion.div>
        <motion.div
          initial={{ y: "-10%", opacity: 0 }}
          animate={{ y: "0%", opacity: 2 }}
          transition={{
            ease: "easeIn",
            duration: 0.8,
            delay: 6,
          }}
          className="font-serif pt-24"
        >
          but you already knew that...
        </motion.div>
        <NextButton advanceState={advanceState} delay={8} />
      </div>
      <motion.div
        initial={{ y: "-10%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{
          ease: "easeIn",
          duration: 1,
          delay: 0,
        }}
        className="w-1/2 bg-white p-2 overflow-scroll h-screen flex justify-evenly"
      >
        <div className="grid grid-cols-6 gap-2 w-max m-auto my-auto">
          {data.map((e) => {
            const del = 1 + e.Cover * 0.002;

            return (
              <motion.div
                initial={{ y: "-10%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  ease: "easeIn",
                  duration: 0.8,
                  delay: del,
                }}
                className="w-24 h-24 bg-gray-300 "
                onClick={advanceState}
                style={{
                  backgroundImage: `url(${
                    albumCovers(`./${e.Cover}.png`).default
                  })`,
                  backgroundSize: "100%",
                }}
              ></motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

export default SectionTen;
