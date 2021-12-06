import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NextButton from "../components/NextButton";

function SectionThree({
  advanceState,
  selectedSong,
  sixAlbums,
  Tracks,
  TrackNum,
}) {
  const T4 = new Audio(Tracks(`./T4.mp3`).default);
  const T8 = new Audio(Tracks(`./T8.mp3`).default);
  const [exitAnim, setExitAnim] = useState(true);
  const [isPlayedOnce, setIsPlayedOnce] = useState(false);

  const interimAdvanceState = () => {
    setExitAnim(false);
    setTimeout(() => {
      advanceState();
    }, 1100);
  };

  const playTrack = (TrackNumber) => {
    if (TrackNumber === 4 && !isPlayedOnce) {
      T4.load();
      setTimeout(() => {
        T4.play();
      }, 200);
      T4.pause();
    } else if (TrackNumber === 8 && !isPlayedOnce) {
      T8.load();
      setTimeout(() => {
        T8.play();
      }, 200);
      T8.pause();
      setIsPlayedOnce(true);
    }
  };

  return (
    <AnimatePresence>
      {exitAnim && (
        <motion.div
          initial={{ y: "0%", opacity: 1 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-20%", opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0 }}
        >
          <div></div>
          <div className="mx-auto text-4xl w-max leading-snug flex flex-col justify-center place-items-stretch">
            <motion.div
              initial={{ y: "-20%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                ease: "easeOut",
                duration: 1,
                delay: 0.2,
              }}
              className="flex flex-row space-x-8 content-center"
              onAnimationStart={playTrack(TrackNum)}
            >
              <div
                className="w-36 h-36 bg-gray-500  my-auto"
                style={{
                  backgroundImage: `url(${
                    sixAlbums(`./${selectedSong.Cover}.png`).default
                  })`,
                  backgroundSize: "100%",
                }}
              ></div>
              <div className="flex flex-col justify-evenly">
                <motion.div className="font-serif ">
                  {selectedSong.Genre}
                </motion.div>
                <div className="text-gray-300 text-xl flex flex-col justify-end">
                  <div>{selectedSong.SongName}</div>

                  <div>
                    {selectedSong.Artist} ({selectedSong.ReleaseYear})
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="mx-auto mt-12">
              <NextButton
                advanceState={interimAdvanceState}
                delay={1}
              ></NextButton>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SectionThree;
