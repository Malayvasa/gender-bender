import { motion } from "framer-motion";
import NextButton from "../components/NextButton";

function SectionThree({ advanceState, selectedSong, sixAlbums }) {
  return (
    <div>
      <div></div>
      <div className="mx-auto text-5xl md:text-4xl w-max leading-snug flex flex-col justify-center place-items-stretch">
        <motion.div
          initial={{ y: "-20%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            ease: "easeOut",
            duration: 1,
            delay: 1,
          }}
          className="flex flex-row space-x-8 content-center"
        >
          <div
            className="w-36 h-36 bg-gray-500 md:w-24 md:h-24 my-auto"
            style={{
              backgroundImage: `url(${
                sixAlbums(`./${selectedSong.Cover}.png`).default
              })`,
              backgroundSize: "100%",
            }}
          ></div>
          <div className="flex flex-col ">
            <motion.div className="font-serif ">
              {selectedSong.Genre}
            </motion.div>
            <div className="text-gray-300 text-3xl md:text-xl flex flex-col justify-end">
              <div>{selectedSong.SongName}</div>

              <div>
                {selectedSong.Artist} ({selectedSong.ReleaseYear})
              </div>
            </div>
          </div>
        </motion.div>
        <div className="mx-auto mt-12">
          <NextButton advanceState={advanceState} delay={2}></NextButton>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
