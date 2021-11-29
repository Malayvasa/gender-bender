import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import convert from "color-convert";
import data from "./data";
let albumCovers = require.context("../src/assets/albumCovers", true);
let itemImg = albumCovers(`./${3}.png`).default;

function App() {
  const [animState, setAnimState] = useState(14);
  const [currentHoverColor, setCurrentHoverColor] = useState("#000");
  const [currentSongObject, setCurrentSongObject] = useState(null);
  const advanceState = () => {
    setAnimState(animState + 1);
  };

  //function to sort array of hex values by hue and brightness
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

  //function to sort array of songs by location
  const sortLocation = () => {
    let array = data.map((item) => item);
    let sortedArray = array.sort((a, b) => {
      let aLocation = a.Region;
      let bLocation = b.Region;
      if (aLocation > bLocation) {
        return 1;
      } else if (aLocation < bLocation) {
        return -1;
      } else {
        return 0;
      }
    });
    return sortedArray;
  };

  //function to sort array of songs by release year
  const sortYear = () => {
    let array = data.map((item) => item);
    let sortedArray = array.sort((a, b) => {
      let aYear = a.ReleaseYear;
      let bYear = b.ReleaseYear;
      if (aYear > bYear) {
        return 1;
      } else if (aYear < bYear) {
        return -1;
      } else {
        return 0;
      }
    });
    return sortedArray;
  };

  const sortedHexArray = sortHue();
  const sortedLocationArray = sortLocation();
  const sortedYearArray = sortYear();

  return (
    <div>
      <div className="flex w-screen min-h-screen items-center">
        <div className="w-full place-items-stretch">
          <AnimatePresence>
            {
              {
                1: (
                  <AnimatePresence>
                    <div className="mx-auto text-5xl w-max leading-snug place-items-stretch">
                      <motion.div
                        initial={{ y: "-20%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 1, delay: 1 }}
                      >
                        SO,
                      </motion.div>
                      <motion.div
                        initial={{ y: "-20%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 1, delay: 2 }}
                      >
                        YOU KNOW THAT
                      </motion.div>
                      <motion.div
                        initial={{ y: "-20%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 1, delay: 3 }}
                      >
                        MUSIC IS CLASSIFIED
                      </motion.div>
                      <motion.div
                        initial={{ y: "-20%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 1, delay: 4 }}
                      >
                        INTO <span className="italic font-serif">solid </span>
                        CATEGORIES?
                      </motion.div>
                      <motion.div
                        initial={{ x: "0%", y: "-20%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 1, delay: 6 }}
                        whileHover={{ x: "20%" }}
                        className="select-none w-min text-8xl"
                        onClick={advanceState}
                      >
                        ☞
                      </motion.div>
                    </div>
                  </AnimatePresence>
                ),
                2: (
                  <div className="mx-auto text-5xl w-max leading-snug place-items-stretch">
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
                    <motion.div
                      initial={{ y: "-20%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      transition={{ ease: "easeOut", duration: 1, delay: 3 }}
                      className="flex flex-row justify-between text-8x pt-8"
                    >
                      <div
                        className="w-36 h-36 bg-gray-300"
                        onClick={advanceState}
                        style={{
                          backgroundImage: `url(${itemImg})`,
                          backgroundSize: "100%",
                        }}
                      ></div>
                      <div
                        className="w-36 h-36 bg-gray-400"
                        onClick={advanceState}
                      ></div>
                      <div
                        className="w-36 h-36 bg-gray-500"
                        onClick={advanceState}
                      ></div>
                    </motion.div>
                  </div>
                ),
                3: (
                  <div>
                    <div>
                      <motion.div
                        initial={{ y: "-20%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{
                          ease: "easeOut",
                          duration: 1,
                          delay: 3,
                        }}
                        className="absolute top-0 left-1/2 -ml-8 mt-32 text-8xl hover:text-gray-200"
                        onClick={advanceState}
                      >
                        ☞
                      </motion.div>
                    </div>
                    <div className="mx-auto text-5xl w-max leading-snug place-items-stretch">
                      <motion.div
                        initial={{ y: "-20%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{
                          ease: "easeOut",
                          duration: 1,
                          delay: 1,
                        }}
                        className="flex flex-row space-x-8"
                      >
                        <div className="w-36 h-36 bg-gray-500"></div>
                        <div>
                          <motion.div>NEO-SOUL/HIP HOP</motion.div>
                          <div className="text-gray-300 text-3xl">
                            Nina<br></br>Wayne Snow (2021)
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                ),
                4: (
                  <div>
                    <div className="mx-auto text-5xl w-1/3 leading-snug place-items-stretch">
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
                      <motion.div
                        initial={{ y: "-20%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 1, delay: 2 }}
                        className="flex flex-row justify-between text-8x pt-8"
                      >
                        <div
                          className="w-36 h-36 bg-gray-300"
                          onClick={advanceState}
                        ></div>
                        <div
                          className="w-36 h-36 bg-gray-400"
                          onClick={advanceState}
                        ></div>
                        <div
                          className="w-36 h-36 bg-gray-500"
                          onClick={advanceState}
                        ></div>
                      </motion.div>
                    </div>
                  </div>
                ),
                5: (
                  <div>
                    <motion.div
                      initial={{ y: "-20%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      transition={{
                        ease: "easeOut",
                        duration: 1,
                        delay: 2,
                      }}
                      className="absolute bottom-0 left-1/4 -ml-8 mb-64 text-8xl hover:text-gray-200"
                      onClick={advanceState}
                    >
                      ☞
                    </motion.div>
                    <div className="mx-auto text-5xl w-max leading-snug place-items-stretch">
                      <motion.div
                        initial={{ y: "-20%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{
                          ease: "easeOut",
                          duration: 1,
                          delay: 1,
                        }}
                        className="flex flex-row space-x-8"
                      >
                        <div className="w-36 h-36 bg-gray-300"></div>
                        <div>
                          <div>POP/ROCK</div>
                          <div className="text-gray-300 text-3xl">
                            For the Miner<br></br>Samantha Crain (2014)
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                ),
                6: (
                  <div>
                    <div>
                      <motion.div
                        initial={{ y: "-20%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{
                          ease: "easeOut",
                          duration: 1,
                          delay: 5,
                        }}
                        className="absolute top-0 right-1/4 -ml-8 mt-64 text-8xl hover:text-gray-200"
                        onClick={advanceState}
                      >
                        ☞
                      </motion.div>
                    </div>
                    <div className="mx-auto text-5xl w-max leading-snug place-items-stretch">
                      <div>
                        <motion.div
                          initial={{ y: "-20%", opacity: 0 }}
                          animate={{ y: "0%", opacity: 1 }}
                          transition={{
                            ease: "easeOut",
                            duration: 1,
                            delay: 1,
                          }}
                        >
                          THESE CATEGORIES,
                        </motion.div>
                      </div>
                      <div className="flex flex-row">
                        <motion.div
                          initial={{ y: "-20%", opacity: 0 }}
                          animate={{ y: "0%", opacity: 1 }}
                          transition={{
                            ease: "easeOut",
                            duration: 1,
                            delay: 2,
                          }}
                        >
                          SO OBVIOUS...
                        </motion.div>
                        <motion.div
                          initial={{ x: "15%", y: "-20%", opacity: 0 }}
                          animate={{ x: "15%", y: "0%", opacity: 1 }}
                          transition={{
                            ease: "easeOut",
                            duration: 1,
                            delay: 4,
                          }}
                          className="italic font-serif"
                        >
                          {" "}
                          right?
                        </motion.div>
                      </div>
                    </div>
                  </div>
                ),
                7: (
                  <div>
                    <motion.div
                      initial={{ y: "-20%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      transition={{
                        ease: "easeOut",
                        duration: 1,
                        delay: 4,
                      }}
                      className="absolute bottom-0 right-1/4 -ml-8 mb-64 text-8xl hover:text-gray-200"
                      onClick={advanceState}
                    >
                      ☞
                    </motion.div>
                    <div className="flex flex-row mx-auto text-5xl w-max leading-snug place-items-stretch">
                      <motion.div
                        initial={{ y: "-20%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{
                          ease: "easeOut",
                          duration: 1,
                          delay: 1,
                        }}
                      >
                        HOWEVER,
                      </motion.div>{" "}
                      <motion.div
                        initial={{ y: "-20%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{
                          ease: "easeOut",
                          duration: 1,
                          delay: 2,
                        }}
                      >
                        <span className="italic font-serif px-4">
                          {" "}
                          the secret{" "}
                        </span>
                      </motion.div>
                      <motion.div
                        initial={{ y: "-20%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{
                          ease: "easeOut",
                          duration: 1,
                          delay: 3,
                        }}
                      >
                        {" "}
                        IS THAT...
                      </motion.div>
                    </div>
                  </div>
                ),
                8: (
                  <div>
                    <div>
                      <motion.div
                        initial={{ y: "-20%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{
                          ease: "easeOut",
                          duration: 1,
                          delay: 2,
                        }}
                        className="absolute top-0 left-1/4 -ml-8 mt-72 text-8xl hover:text-gray-200"
                        onClick={advanceState}
                      >
                        ☞
                      </motion.div>
                    </div>
                    <motion.div
                      initial={{ y: "-20%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      transition={{
                        ease: "easeOut",
                        duration: 1,
                        delay: 1,
                      }}
                      className="mx-auto text-5xl w-max leading-snug place-items-stretch"
                    >
                      <div className="flex flex-row">
                        <motion.span
                          initial={{ y: "-20%", opacity: 0 }}
                          animate={{ y: "0%", opacity: 1 }}
                          transition={{
                            ease: "easeOut",
                            duration: 1,
                            delay: 0,
                          }}
                          className="w-28"
                        >
                          YOU
                        </motion.span>
                        CAN BREAK
                      </div>{" "}
                      THESE CATEGORIES,<br></br> ALSO KNOWN AS GENRES
                    </motion.div>
                  </div>
                ),
                9: (
                  <div>
                    <motion.div
                      initial={{ y: "-10%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      transition={{
                        ease: "easeIn",
                        duration: 0.8,
                        delay: 1.4,
                      }}
                      className="absolute top-1/2 right-1/4 -mr-32 text-8xl hover:text-gray-200"
                      onClick={advanceState}
                    >
                      ☞
                    </motion.div>
                    <div className="mx-auto text-5xl w-max leading-snug place-items-stretch">
                      <div className="flex flex-row">
                        <motion.span
                          initial={{ y: "-10%", opacity: 0 }}
                          animate={{ y: "0%", opacity: 1 }}
                          transition={{
                            ease: "easeIn",
                            duration: 0.8,
                            delay: 0.2,
                          }}
                          className="w-28 text-center text-6xl italic font-serif"
                        >
                          you
                        </motion.span>
                        CAN BREAK
                      </div>{" "}
                      THESE CATEGORIES,<br></br> ALSO KNOWN AS GENRES
                    </div>
                  </div>
                ),
                10: (
                  <div className="flex h-screen">
                    <div className="text-5xl w-1/2 p-12 leading-none">
                      <motion.div
                        initial={{ y: "-10%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{
                          ease: "easeIn",
                          duration: 0.8,
                          delay: 1,
                        }}
                      >
                        <span className="font-serif">Genre</span> is a category
                        of music, literature or other forms of art <br></br>{" "}
                        based on some set of criteria.
                      </motion.div>
                      <motion.div
                        initial={{ y: "-10%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{
                          ease: "easeIn",
                          duration: 0.8,
                          delay: 4,
                        }}
                        className="absolute bottom-0 left-0 m-12 text-8xl w-min hover:text-gray-200"
                        onClick={advanceState}
                      >
                        ☞
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
                      className="w-1/2 bg-gray-100 p-12 overflow-scroll"
                    >
                      <div className="w-5/6 flex flex-row flex-wrap justify-evenly m-auto gap-2">
                        {data.map((e) => {
                          const del = 1.5 + e.Cover * 0.02;

                          return (
                            <motion.div
                              initial={{ y: "-10%", opacity: 0 }}
                              animate={{ y: "0%", opacity: 1 }}
                              transition={{
                                ease: "easeIn",
                                duration: 0.8,
                                delay: del,
                              }}
                              className="w-24 h-24 bg-gray-300 0"
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
                ),
                11: (
                  <div className="flex h-screen">
                    <div className="text-5xl w-1/2 p-12 leading-none">
                      <p>
                        {" "}
                        <span className="font-serif">Genre</span> is a category
                        of music, literature or other forms of art <br></br>{" "}
                        based on some set of criteria.
                      </p>
                      <motion.p
                        initial={{ y: "-10%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{
                          ease: "easeIn",
                          duration: 0.8,
                          delay: 0.3,
                        }}
                        className="pt-4"
                      >
                        {" "}
                        It is a type of communication with socially-agreed-upon
                        conventions developed over time.
                      </motion.p>
                    </div>
                    <div>
                      <motion.div
                        className="absolute bottom-0 left-0 m-12 text-8xl w-min hover:text-gray-200"
                        onClick={advanceState}
                      >
                        ☞
                      </motion.div>
                    </div>
                    <div className="w-1/2 bg-gray-50 p-12 overflow-scroll">
                      <div className="w-5/6 flex flex-row flex-wrap justify-evenly m-auto gap-2">
                        {data.map((e) => (
                          <div
                            className="w-24 h-24 bg-gray-300 border-gray-500"
                            onClick={advanceState}
                            style={{
                              backgroundImage: `url(${
                                albumCovers(`./${e.Cover}.png`).default
                              })`,
                              backgroundSize: "100%",
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                ),
                12: (
                  <div className="flex h-screen">
                    <div className="text-5xl w-1/2 p-12 leading-none">
                      <p>
                        {" "}
                        <span
                          className="font-serif"
                          style={{
                            color: `${currentHoverColor}`,
                          }}
                        >
                          Genre
                        </span>{" "}
                        is a category of music, literature or other forms of art{" "}
                        <br></br> based on some set of criteria.
                      </p>
                      <p className="pt-4">
                        {" "}
                        It is a type of communication with socially-agreed-upon
                        conventions developed over time.
                      </p>
                      <div className="flex">
                        <motion.div
                          initial={{ y: "-10%", opacity: 0 }}
                          animate={{ y: "0%", opacity: 1 }}
                          transition={{
                            ease: "easeIn",
                            duration: 0.8,
                            delay: 0.3,
                          }}
                          className="pt-4"
                        >
                          {" "}
                          They can be{" "}
                        </motion.div>
                        <motion.div
                          initial={{ y: "-10%", opacity: 0 }}
                          animate={{ y: "0%", opacity: 1 }}
                          transition={{
                            ease: "easeIn",
                            duration: 0.8,
                            delay: 2,
                          }}
                          className="pt-4 pl-4"
                          style={{ color: `${currentHoverColor}` }}
                        >
                          {" "}
                          aesthetic,
                        </motion.div>
                        <AnimatePresence>
                          {currentSongObject && (
                            <motion.div
                              initial={{ y: "-10%", opacity: 0 }}
                              animate={{ y: "0%", opacity: 1 }}
                              exit={{ y: "-10%", opacity: 0 }}
                              transition={{
                                ease: "easeIn",
                                duration: 0.3,
                                delay: 0,
                              }}
                              className="w-64 h-8 text-sm z-50"
                            >
                              <div className="flex flex-col justify-between">
                                <div className="text-xl capitalize font-serif">
                                  {currentSongObject.Genre}
                                </div>
                                <div className="text-sm capitalize font-serif">
                                  {currentSongObject.SongName}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <div
                        className="absolute bottom-0 left-0 m-12 text-8xl w-min hover:text-gray-200 font-display"
                        onClick={advanceState}
                        style={{ color: `${currentHoverColor}` }}
                      >
                        ☞
                      </div>
                    </div>
                    <div className="w-1/2 bg-gray-50 p-12 overflow-scroll">
                      <div className="w-5/6 flex flex-row flex-wrap justify-evenly m-auto gap-2">
                        {data.map((song) => {
                          return (
                            <>
                              <div className="w-24 h-24">
                                <motion.div
                                  className="w-24 h-24"
                                  initial={{ y: "0%", opacity: 1 }}
                                  animate={{ y: "0%", opacity: 0 }}
                                  transition={{
                                    ease: "easeOut",
                                    duration: 1,
                                    delay: 2,
                                  }}
                                  onClick={advanceState}
                                  style={{
                                    backgroundImage: `url(${
                                      albumCovers(`./${song.Cover}.png`).default
                                    })`,
                                    backgroundSize: "100%",
                                  }}
                                ></motion.div>
                              </div>
                              <div className="w-24 h-24 -ml-20 z-10">
                                <motion.div
                                  className="w-24 h-24 "
                                  initial={{ y: "0%", opacity: 0 }}
                                  animate={{ y: "0%", opacity: 1 }}
                                  transition={{
                                    ease: "easeOut",
                                    duration: 0.8,
                                    delay: 2,
                                  }}
                                  style={{
                                    backgroundColor: `${song.ProminentColor1}`,
                                  }}
                                  onMouseEnter={() => {
                                    setCurrentHoverColor(song.ProminentColor1);
                                    setCurrentSongObject(song);
                                  }}
                                  onMouseLeave={() => {
                                    setCurrentHoverColor("#000");
                                    setCurrentSongObject(null);
                                  }}
                                ></motion.div>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ),
                13: (
                  <div className="flex h-screen">
                    <div className="text-5xl w-1/2 p-12 leading-none">
                      <p>
                        {" "}
                        <span
                          className="font-serif"
                          style={{
                            color: `${currentHoverColor}`,
                          }}
                        >
                          Genre
                        </span>{" "}
                        is a category of music, literature or other forms of art{" "}
                        <br></br> based on some set of criteria.
                      </p>
                      <p className="pt-4">
                        {" "}
                        It is a type of communication with socially-agreed-upon
                        conventions developed over time.
                      </p>
                      <div className="flex flex-wrap">
                        <div className="pt-4"> They can be </div>
                        <div className="pt-4 pl-4"> aesthetic,</div>
                        <motion.div
                          initial={{ y: "-10%", opacity: 0 }}
                          animate={{ y: "0%", opacity: 1 }}
                          transition={{
                            ease: "easeIn",
                            duration: 0.8,
                            delay: 1,
                          }}
                          className=""
                          style={{ color: `${currentHoverColor}` }}
                        >
                          {" "}
                          communicative,
                        </motion.div>
                        <AnimatePresence>
                          {currentSongObject && (
                            <motion.div
                              initial={{ y: "-10%", opacity: 0 }}
                              animate={{ y: "0%", opacity: 1 }}
                              exit={{ y: "-10%", opacity: 0 }}
                              transition={{
                                ease: "easeIn",
                                duration: 0.3,
                                delay: 0,
                              }}
                              className="w-64 h-8 text-sm z-50"
                            >
                              <div className="flex flex-col justify-between">
                                <div className="text-xl capitalize font-serif">
                                  {currentSongObject.Genre}
                                </div>
                                <div className="text-sm capitalize font-serif">
                                  {currentSongObject.SongName}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <div
                        className="absolute bottom-0 left-0 m-12 text-8xl w-min hover:text-gray-200 font-display"
                        onClick={advanceState}
                        style={{ color: `${currentHoverColor}` }}
                      >
                        ☞
                      </div>
                    </div>
                    <div className="w-1/2 bg-gray-50 p-12 overflow-scroll">
                      <div className="w-5/6 flex flex-row flex-wrap justify-evenly m-auto gap-2">
                        {data.map((song, index) => {
                          return (
                            <>
                              <motion.div
                                initial={{ y: "0%", opacity: 1 }}
                                animate={{ y: "0%", opacity: 0 }}
                                transition={{
                                  ease: "easeOut",
                                  duration: 0.8,
                                  delay: 1,
                                }}
                                className="w-24 h-24"
                                style={{
                                  backgroundColor: `${song.ProminentColor1}`,
                                }}
                              ></motion.div>
                              <motion.div
                                initial={{ y: "0%", opacity: 0 }}
                                animate={{ y: "0%", opacity: 1 }}
                                transition={{
                                  ease: "easeOut",
                                  duration: 0.8,
                                  delay: 1.4,
                                }}
                                className="w-24 h-24 -ml-20 z-10"
                                style={{
                                  backgroundColor: `${sortedHexArray[index].ProminentColor1}`,
                                }}
                                onMouseEnter={() => {
                                  setCurrentHoverColor(
                                    sortedHexArray[index].ProminentColor1
                                  );
                                  setCurrentSongObject(sortedHexArray[index]);
                                }}
                                onMouseLeave={() => {
                                  setCurrentHoverColor("#000");
                                  setCurrentSongObject(null);
                                }}
                              ></motion.div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ),
                14: (
                  <div className="flex h-screen">
                    <div className="text-5xl w-1/2 p-12 leading-none">
                      <p>
                        {" "}
                        <span
                          className="font-serif"
                          style={{
                            color: `${currentHoverColor}`,
                          }}
                        >
                          Genre
                        </span>{" "}
                        is a category of music, literature or other forms of art{" "}
                        <br></br> based on some set of criteria.
                      </p>
                      <p className="pt-4">
                        {" "}
                        It is a type of communication with socially-agreed-upon
                        conventions developed over time.
                      </p>
                      <div className="flex flex-wrap w-auto">
                        <div className="pt-4"> They can be </div>
                        <div className="pt-4 pl-4"> aesthetic,</div>
                        <div className=""> communicative, </div>
                        <motion.div
                          initial={{ y: "-10%", opacity: 0 }}
                          animate={{ y: "0%", opacity: 1 }}
                          transition={{
                            ease: "easeIn",
                            duration: 0.8,
                            delay: 2,
                          }}
                          className="pl-2"
                          style={{ color: `${currentHoverColor}` }}
                        >
                          {" "}
                          or functional.
                          <AnimatePresence>
                            {currentSongObject && (
                              <motion.div
                                initial={{ y: "-10%", opacity: 0 }}
                                animate={{ y: "0%", opacity: 1 }}
                                exit={{ y: "-10%", opacity: 0 }}
                                transition={{
                                  ease: "easeIn",
                                  duration: 0.3,
                                  delay: 0,
                                }}
                                className="w-64 h-8 text-sm z-50"
                              >
                                <div className="flex flex-col justify-between">
                                  <div className="text-xl capitalize font-serif">
                                    {currentSongObject.Region}
                                  </div>
                                  <div className="text-sm capitalize font-serif">
                                    {currentSongObject.Genre}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      </div>
                      <div
                        className="absolute bottom-0 left-0 m-12 text-8xl w-min hover:text-gray-200 font-display"
                        onClick={advanceState}
                        style={{ color: `${currentHoverColor}` }}
                      >
                        ☞
                      </div>
                    </div>
                    <div className="w-1/2 bg-gray-50 p-12 overflow-scroll">
                      <div className="w-5/6 flex flex-row flex-wrap justify-evenly m-auto gap-2">
                        {data.map((song, index) => {
                          return (
                            <>
                              <div className="w-24 h-24">
                                <motion.div
                                  initial={{ y: "0%", opacity: 1 }}
                                  animate={{ y: "0%", opacity: 0 }}
                                  transition={{
                                    ease: "easeOut",
                                    duration: 0.8,
                                    delay: 2.4,
                                  }}
                                  className="w-24 h-24"
                                  style={{
                                    backgroundColor: `${sortedHexArray[index].ProminentColor1}`,
                                  }}
                                ></motion.div>
                              </div>
                              <div className="w-24 h-24 -ml-20 z-10">
                                <motion.div
                                  initial={{ y: "0%", opacity: 0 }}
                                  animate={{ y: "0%", opacity: 1 }}
                                  transition={{
                                    ease: "easeOut",
                                    duration: 0.8,
                                    delay: 2.4,
                                  }}
                                  className="w-24 h-24"
                                  style={{
                                    backgroundColor: `${sortedLocationArray[index].ProminentColor1}`,
                                  }}
                                  onMouseEnter={() => {
                                    setCurrentHoverColor(
                                      sortedLocationArray[index].ProminentColor1
                                    );
                                    setCurrentSongObject(
                                      sortedLocationArray[index]
                                    );
                                  }}
                                  onMouseLeave={() => {
                                    setCurrentHoverColor("#000");
                                    setCurrentSongObject(null);
                                  }}
                                ></motion.div>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ),
                15: (
                  <div className="flex h-screen">
                    <div className="text-5xl w-1/2 p-12 leading-none">
                      <p>
                        {" "}
                        <span
                          className="font-serif"
                          style={{
                            color: `${currentHoverColor}`,
                          }}
                        >
                          Genre
                        </span>{" "}
                        is a category of music, literature or other forms of art{" "}
                        <br></br> based on some set of criteria.
                      </p>
                      <p className="pt-4">
                        {" "}
                        It is a type of communication with socially-agreed-upon
                        conventions developed over time.
                      </p>
                      <div className="flex flex-wrap w-auto">
                        <div className="pt-4"> They can be </div>
                        <div className="pt-4 pl-4"> aesthetic,</div>
                        <div className=""> communicative, </div>
                        <div className="pl-2"> or functional.</div>
                      </div>
                      <motion.div
                        className="pt-4"
                        initial={{ y: "-10%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{
                          ease: "easeIn",
                          duration: 0.8,
                          delay: 2,
                        }}
                      >
                        <span
                          className="font-serif"
                          style={{
                            color: `${currentHoverColor}`,
                          }}
                        >
                          Genres
                        </span>{" "}
                        <span
                          style={{
                            color: `${currentHoverColor}`,
                          }}
                        >
                          change over time
                        </span>{" "}
                        as cultures invent new genres and discontinue the use of
                        old ones.
                      </motion.div>
                      <AnimatePresence>
                        {currentSongObject && (
                          <motion.div
                            initial={{ y: "-10%", opacity: 0 }}
                            animate={{ y: "0%", opacity: 1 }}
                            exit={{ y: "-10%", opacity: 0 }}
                            transition={{
                              ease: "easeIn",
                              duration: 0.3,
                              delay: 0,
                            }}
                            className="w-64 h-8 text-sm z-50 pt-12"
                          >
                            <div className="flex flex-col justify-between">
                              <div className="text-3xl capitalize font-serif">
                                {currentSongObject.ReleaseYear}
                              </div>
                              <div className="text-sm capitalize font-serif">
                                {currentSongObject.Genre}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <div
                        className="absolute bottom-0 left-0 m-12 text-8xl w-min hover:text-gray-200 font-display"
                        onClick={advanceState}
                        style={{ color: `${currentHoverColor}` }}
                      >
                        ☞
                      </div>
                    </div>
                    <div className="w-1/2 bg-gray-50 p-12 overflow-scroll">
                      <div className="w-5/6 flex flex-row flex-wrap justify-evenly m-auto gap-2">
                        {data.map((song, index) => {
                          return (
                            <>
                              <motion.div
                                initial={{ y: "0%", opacity: 1 }}
                                animate={{ y: "0%", opacity: 0 }}
                                transition={{
                                  ease: "easeOut",
                                  duration: 0.8,
                                  delay: 2.4,
                                }}
                                className="w-24 h-24"
                                style={{
                                  backgroundColor: `${sortedLocationArray[index].ProminentColor1}`,
                                }}
                              ></motion.div>

                              <motion.div
                                initial={{ y: "0%", opacity: 0 }}
                                animate={{ y: "0%", opacity: 1 }}
                                transition={{
                                  ease: "easeOut",
                                  duration: 0.8,
                                  delay: 2.4,
                                }}
                                className="w-24 h-24 -ml-20 z-10"
                                style={{
                                  backgroundColor: `${sortedYearArray[index].ProminentColor1}`,
                                }}
                                onMouseEnter={() => {
                                  setCurrentHoverColor(
                                    sortedYearArray[index].ProminentColor1
                                  );
                                  setCurrentSongObject(sortedYearArray[index]);
                                }}
                                onMouseLeave={() => {
                                  setCurrentHoverColor("#000");
                                  setCurrentSongObject(null);
                                }}
                              ></motion.div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ),
              }[animState]
            }
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;
