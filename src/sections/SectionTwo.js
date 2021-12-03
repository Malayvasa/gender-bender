import { motion } from "framer-motion";

function SectionTwo({
  advanceState,
  sixAlbums,
  setFirstSelectedSong,
  firstSongList,
}) {
  return (
    <div className="mx-auto text-5xl md:-mt-12 md:text-4xl w-max flex flex-col gap-y-2 place-items-stretch">
      <motion.div
        initial={{ y: "-20%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1, delay: 1 }}
        className="italic font-serif"
      >
        for instance,
      </motion.div>
      <motion.div
        initial={{ y: "-20%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1, delay: 2 }}
      >
        PICK A SONG FROM HERE
      </motion.div>
      <motion.div className="flex flex-row justify-between pt-8">
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
              className="w-36 h-36 bg-gray-300 md:w-24 md:h-24"
              onClick={() => {
                setFirstSelectedSong(item);
                advanceState();
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
  );
}

export default SectionTwo;
