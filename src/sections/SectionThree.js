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
  const M1 = new Audio(Tracks(`./M1.mp3`).default);
  const M2 = new Audio(Tracks(`./M2.mp3`).default);
  const M3 = new Audio(Tracks(`./M3.mp3`).default);
  const M4 = new Audio(Tracks(`./M4.mp3`).default);
  const M5 = new Audio(Tracks(`./M5.mp3`).default);
  const M6 = new Audio(Tracks(`./M6.mp3`).default);

  const [exitAnim, setExitAnim] = useState(true);
  const [isPlayedOnce, setIsPlayedOnce] = useState(false);

  const interimAdvanceState = () => {
    setExitAnim(false);
    setTimeout(() => {
      advanceState();
    }, 1100);
  };

  const playTrack = (TrackNumber) => {
    if (TrackNumber === 1 && !isPlayedOnce) {
      M1.load();
      setTimeout(() => {
        M1.play();
      }, 200);
      M1.pause();
    } else if (TrackNumber === 2 && !isPlayedOnce) {
      M2.load();
      setTimeout(() => {
        M2.play();
      }, 200);
      M2.pause();
    } else if (TrackNumber === 3 && !isPlayedOnce) {
      M3.load();
      setTimeout(() => {
        M3.play();
      }, 200);
      M3.pause();
    } else if (TrackNumber === 4 && !isPlayedOnce) {
      M4.load();
      setTimeout(() => {
        M4.play();
      }, 200);
      M4.pause();
    } else if (TrackNumber === 5 && !isPlayedOnce) {
      M5.load();
      setTimeout(() => {
        M5.play();
      }, 200);
      M5.pause();
    } else if (TrackNumber === 6 && !isPlayedOnce) {
      M6.load();
      setTimeout(() => {
        M6.play();
      }, 200);
      M6.pause();
    }

    setIsPlayedOnce(true);
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
              onAnimationStart={() => {
                playTrack(selectedSong.Cover);
              }}
              className="flex flex-row space-x-8 content-center"
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
                delay={6}
              ></NextButton>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SectionThree;
