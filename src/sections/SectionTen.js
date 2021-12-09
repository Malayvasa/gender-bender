import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import data from "../data/data";
let albumCovers = require.context("../../src/assets/albumCovers", true);

function SectionTen({ advanceState }) {
  const [textAnimation, setTextAnimation] = useState(true);
  setTimeout(() => {
    setTextAnimation(false);
  }, 4500);

  return (
    <div className="flex h-screen">
      <div className="text-5xl md:text-4xl w-1/2 p-12 leading-none flex flex-col space-y-4">
        <motion.div
          initial={{ y: "-10%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            ease: "easeIn",
            duration: 0.8,
            delay: 2,
          }}
        >
          <span className="font-serif">Genre</span> is a style of music,
          literature, <br /> any sort of art, or whatnot.
        </motion.div>
        <AnimatePresence>
          {textAnimation && (
            <motion.div
              className="font-serif pt-16"
              initial={{ y: "0%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "0%", opacity: 0 }}
              transition={{
                ease: "easeIn",
                duration: 0.2,
                delay: 4,
              }}
            >
              big words incoming
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          initial={{ y: "-10%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            ease: "easeIn",
            duration: 0.8,
            delay: 9,
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
            delay: 13.5,
          }}
          className="font-serif pt-24"
        >
          but you already knew that...
        </motion.div>
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
            const del = 1 + e.Cover * 0.02;
            if (
              e.Cover === 3 ||
              e.Cover === 11 ||
              e.Cover === 19 ||
              e.Cover === 24 ||
              e.Cover === 32 ||
              e.Cover === 40 ||
              e.Cover === 50 ||
              e.Cover === 53
            ) {
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
                  style={{
                    backgroundImage: `url(${
                      albumCovers(`./${e.Cover}.png`).default
                    })`,
                    backgroundSize: "100%",
                  }}
                ></motion.div>
              );
            } else if (e.Cover === 28) {
              return (
                <motion.div
                  initial={{ y: "-10%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    ease: "easeIn",
                    duration: 0.8,
                    delay: 15.5,
                  }}
                  className="w-24 h-24 hover hover:text-blue-600"
                  onClick={advanceState}
                >
                  <motion.div
                    initial={{ x: "-40%", y: "-40%", opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 0.5, delay: 0 }}
                    whileHover={{ x: "-30%" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="100%"
                      width="100%"
                      fill="currentColor"
                      stroke="currentColor"
                      viewBox="0 0 700 700"
                    >
                      <path d="M602.12 281.22h-73.21a6.54 6.54 0 00-6.54 6.54v20.92l-43.92-43.93a68.21 68.21 0 00-41.05-19.35l31.9-32a32.15 32.15 0 000-45.49 32.54 32.54 0 00-45.49 0l-24.31 24.42-52.29 52.29h-49.16a67.92 67.92 0 00-48.37 20.13l-110.2 109.94a32.67 32.67 0 000 45.88 33.33 33.33 0 0022 9.55l-40.27 40.13a8.76 8.76 0 00-1.17 1.83l-27.59 63.8a6.54 6.54 0 006 9.15 9.51 9.51 0 002.61 0l63.79-27.72a6.52 6.52 0 001.71-1.18l45.36-45.36a42.74 42.74 0 0023.51 7.23h97a37.35 37.35 0 0120.26 6 110.47 110.47 0 0059.87 17.64h48.63A110.48 110.48 0 00521.07 484h.78v23.53a6.54 6.54 0 006.54 6.53h73.21a6.52 6.52 0 006.53-6.53V287.75a6.52 6.52 0 00-6-6.54zM149 384l109.83-110.49a55.73 55.73 0 0139.22-16.22h35.69L265.5 325.8a62.72 62.72 0 00-15.5 11.63l-73.6 73.47a19.37 19.37 0 01-27.4-27.45zm78.44 8h-2.22a37 37 0 00-5.36 1.57l-2.22.92a50.12 50.12 0 00-5.76 3.14h-.78l193-191.39 26.9 26.87-96 96-62 62.09h-37a39.82 39.82 0 00-7.85.79zm110.59-48a37.88 37.88 0 019.97 25.33 21.4 21.4 0 01-6.41 15.42 21.66 21.66 0 01-14.77 6.41h-35.3zm94.39-166.81a19.12 19.12 0 0113.07-5.5 19.41 19.41 0 0113.08 5.5 19.22 19.22 0 010 26.93L438.71 224l-26.92-27.1zM128.1 486.33l22.9 22.49-39.87 17.39zm34.12 15.43l-26.92-26.93 65.36-65.36a3.47 3.47 0 010 .91 34.57 34.57 0 00-3 5.75 11.91 11.91 0 00-.91 2.22c-.66 1.7-1.18 3.4-1.7 5.23s0 1.57 0 2.36a39 39 0 00-.79 7.84 46.22 46.22 0 00.92 8.37 19.91 19.91 0 00.65 2.61 44 44 0 001.83 5.36 25.62 25.62 0 001.31 2.75 38.29 38.29 0 002.62 4.57c0 .92 1.18 1.84 1.83 2.62l.65.91zm352.19-29.29A97 97 0 01462.12 488h-49a96.55 96.55 0 01-52.29-15.55 50.58 50.58 0 00-27.46-8.11H236a30.45 30.45 0 01-29.41-30.07 30 30 0 0130.06-30.06h91.51a33.77 33.77 0 0024.58-10.33A34.55 34.55 0 00363 369.33a52.29 52.29 0 00-13-34.77l76.73-76.87h5.1A55.32 55.32 0 01471 274l53.07 53.08v140.3zM595.46 501h-60.13V294.3h60.13zm-29.15-22.1a20.63 20.63 0 11.13 0zm0-26.14a4.91 4.91 0 10.13.4z"></path>
                    </svg>
                  </motion.div>
                </motion.div>
              );
            } else {
              return (
                <motion.div
                  initial={{ y: "-10%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    ease: "easeIn",
                    duration: 0.8,
                    delay: del,
                  }}
                  className="w-24 h-24 bg-white "
                ></motion.div>
              );
            }
          })}
        </div>
      </motion.div>
    </div>
  );
}

export default SectionTen;
