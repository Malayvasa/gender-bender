import { motion } from "framer-motion";

function SectionFour({
  advanceState,
  secondSongList,
  setSecondSelectedSong,
  sixAlbums,
}) {
  return (
    <div>
      <div className="mx-auto text-5xl md:-mt-16 md:text-4xl w-1/3 flex flex-col gap-y-2 place-items-stretch">
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
        <div className="flex flex-row justify-between pt-8">
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
                className="w-36 h-36 bg-gray-300 md:w-24 md:h-24"
                onClick={() => {
                  setSecondSelectedSong(item);
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
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
