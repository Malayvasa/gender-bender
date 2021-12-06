import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function SectionTwo({
  advanceState,
  sixAlbums,
  setFirstSelectedSong,
  firstSongList,
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
          transition={{ ease: "easeOut", duration: 1, delay: 0 }}
          className="min-w-1/3"
        >
          <div className="mx-auto w-max text-4xl -mt-12 md:text-4xl flex flex-col gap-y-2 place-items-stretch">
            <motion.div
              initial={{ y: "-20%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1, delay: 1 }}
              className="italic font-serif"
            >
              as an example,
            </motion.div>
            <motion.div
              initial={{ y: "-20%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1, delay: 2 }}
            >
              TAKE A PICK
            </motion.div>
            <motion.div className="flex flex-row justify-between pt-8 gap-x-12">
              {firstSongList.map((item, index) => {
                return (
                  <motion.div
                    initial={{ y: "-20%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{
                      ease: "easeOut",
                      duration: 1,
                      delay: 3 + index * 0.5,
                    }}
                    className="w-36 h-36 bg-gray-300"
                    onClick={() => {
                      setFirstSelectedSong(item);
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
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SectionTwo;
