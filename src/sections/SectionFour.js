import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function SectionFour({
  advanceState,
  secondSongList,
  setSecondSelectedSong,
  sixAlbums,
}) {
  const [exitAnim, setExitAnim] = useState(true);

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
          transition={{ ease: "easeOut", duration: 0.5, delay: 0 }}
          className="min-w-1/3"
        >
          <div className="mx-auto -mt-16 text-4xl w-max flex flex-col gap-y-2 place-items-stretch">
            <div>
              <motion.div
                initial={{ y: "-20%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  ease: "easeOut",
                  duration: 1,
                  delay: 1,
                }}
                className="italic font-serif"
              >
                try another,
              </motion.div>
            </div>
            <div className="flex flex-row justify-between pt-8 gap-x-12">
              {secondSongList.map((item, index) => {
                return (
                  <motion.div
                    initial={{ y: "-20%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{
                      ease: "easeOut",
                      duration: 1,
                      delay: 1.5 + index * 0.5,
                    }}
                    className="w-36 h-36 bg-gray-300 "
                    onClick={() => {
                      setSecondSelectedSong(item);
                      interimAdvanceState();
                    }}
                    style={{
                      backgroundImage: `url(${
                        sixAlbums(`./${item.Cover}.png`).default
                      })`,
                      backgroundSize: "100%",
                    }}
                  ></motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SectionFour;
