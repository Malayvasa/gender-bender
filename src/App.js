import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import convert from "color-convert";
import data from "./data";
let albumCovers = require.context("../src/assets/albumCovers", true);
let sixAlbums = require.context("../src/assets/sixAlbums", true);
const firstSongList = [
  {
    SongName: "Monkeys With 5G",
    Artist: "Arivu & Anto franklin",
    Genre: "Tamil Rap, Hip-Hop",
    ReleaseYear: 2020,
    Cover: 1,
  },
  {
    SongName: "La Llorona (feat. Los Macorinos)",
    Artist: "Natalia Lafourcade",
    Genre: "Latin/Mexican Pop, Folk",
    ReleaseYear: 2018,
    Cover: 2,
  },
  {
    SongName: "Nee-Namah",
    Artist: "Thaikkudam Bridge",
    Genre: "Indian Rock, Heavy Metal, Reggae",
    ReleaseYear: 2019,
    Cover: 3,
  },
];

const secondSongList = [
  {
    SongName: "Selfish",
    Artist: "Little Simz",
    Genre: "Hip-Hop, Rap, Jazz Rap, UK Rap",
    ReleaseYear: 2019,
    Cover: 4,
  },
  {
    SongName: "Cumbai Espacial",
    Artist: "Ondaropica",
    Genre: "Afro-Caribbean Ska, Funk, Jazz",
    ReleaseYear: 2012,
    Cover: 5,
  },
  {
    SongName: "Little Dear",
    Artist: "Spellling",
    Genre: "Progressive Pop, Experimental Pop",
    ReleaseYear: 2021,
    Cover: 6,
  },
];

function App() {
  const [animState, setAnimState] = useState(1);
  const [firstSelectedSong, setFirstSelectedSong] = useState(firstSongList[0]);
  const [secondSelectedSong, setSecondSelectedSong] = useState(
    secondSongList[0]
  );

  const [currentHoverColor, setCurrentHoverColor] = useState("#000");
  const [currentSongObject, setCurrentSongObject] = useState(null);
  const advanceState = () => {
    setAnimState(animState + 1);
  };
  const previousState = () => {
    setAnimState(animState - 1);
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
      {animState !== 1 && (
        <div
          className="absolute items-stretch content-center p-2 m-2 bg-white text-center rounded-full 
     border-gray-300 text-gray-300 hover:text-gray-900 hover:border-gray-900 border-2"
          onClick={previousState}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
      )}
      <div
        className="flex w-screen min-h-screen items-center"
        style={{ fontVariantLigatures: "none" }}
      >
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
                        transition={{ ease: "easeOut", duration: 1, delay: 5 }}
                        whileHover={{ x: "20%" }}
                        className="select-none w-min text-8xl hover:text-gray-200"
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
                      {firstSongList.map((item, index) => {
                        return (
                          <div
                            className="w-36 h-36 bg-gray-300"
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
                          ></div>
                        );
                      })}
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
                          delay: 2,
                        }}
                        className="select-none absolute top-0 left-1/2 -ml-8 mt-32 text-8xl hover:text-gray-200"
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
                        <div
                          className="w-36 h-36 bg-gray-500"
                          style={{
                            backgroundImage: `url(${
                              sixAlbums(`./${firstSelectedSong.Cover}.png`)
                                .default
                            })`,
                            backgroundSize: "100%",
                          }}
                        ></div>
                        <div>
                          <motion.div>{firstSelectedSong.Genre}</motion.div>
                          <div className="text-gray-300 text-3xl">
                            {firstSelectedSong.SongName}
                            <br></br>
                            {firstSelectedSong.Artist} (
                            {firstSelectedSong.ReleaseYear})
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
                        {secondSongList.map((item, index) => {
                          return (
                            <div
                              className="w-36 h-36 bg-gray-300"
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
                            ></div>
                          );
                        })}
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
                      className="select-none absolute bottom-0 left-1/4 -ml-8 mb-64 text-8xl hover:text-gray-200"
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
                        <div
                          className="w-36 h-36 bg-gray-500"
                          style={{
                            backgroundImage: `url(${
                              sixAlbums(`./${secondSelectedSong.Cover}.png`)
                                .default
                            })`,
                            backgroundSize: "100%",
                          }}
                        ></div>
                        <div>
                          <motion.div>{secondSelectedSong.Genre}</motion.div>
                          <div className="text-gray-300 text-3xl">
                            {secondSelectedSong.SongName}
                            <br></br>
                            {secondSelectedSong.Artist} (
                            {secondSelectedSong.ReleaseYear})
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
                        className="select-none absolute top-0 right-1/4 -ml-8 mt-64 text-8xl hover:text-gray-200"
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
                      className="select-none absolute bottom-0 right-1/4 -ml-8 mb-64 text-8xl hover:text-gray-200"
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
                        className="select-none absolute top-0 left-1/4 -ml-8 mt-72 text-8xl hover:text-gray-200"
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
                        delay: 1.2,
                      }}
                      className="select-none absolute top-1/2 right-1/4 -mr-32 text-8xl hover:text-gray-200"
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
                          delay: 3.5,
                        }}
                        className="select-none absolute bottom-0 left-0 m-12 text-8xl w-min hover:text-gray-200"
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
                        className="select-none absolute bottom-0 left-0 m-12 text-8xl w-min hover:text-gray-200"
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
                        className="select-none absolute bottom-0 left-0 m-12 text-8xl w-min hover:text-gray-200 font-display"
                        onClick={advanceState}
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
                        className=" select-none absolute bottom-0 left-0 m-12 text-8xl w-min hover:text-gray-200 font-display"
                        onClick={advanceState}
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
                            delay: 1,
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
                        className="select-none absolute bottom-0 left-0 m-12 text-8xl w-min hover:text-gray-200 font-display"
                        onClick={advanceState}
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
                          delay: 1,
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
                        className="select-none absolute bottom-0 left-0 m-12 text-8xl w-min hover:text-gray-200 font-display"
                        onClick={advanceState}
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
                                  delay: 1.4,
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
                                  delay: 1.4,
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
                16: (
                  <div className="relative flex h-screen">
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
                      <div className="pt-4">
                        <span
                          className="font-serif"
                          style={{
                            color: `${currentHoverColor}`,
                          }}
                        >
                          Genres
                        </span>{" "}
                        change over time as cultures invent new genres and
                        discontinue the use of old ones.
                      </div>
                      <motion.div
                        className="pt-4"
                        initial={{ y: "-10%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{
                          ease: "easeIn",
                          duration: 0.8,
                          delay: 1,
                        }}
                      >
                        Often, identities fit into multiple genres by way of
                        borrowing and recombining these conventions.
                      </motion.div>

                      <div
                        className="select-none absolute bottom-0 left-0 m-12 text-8xl w-min hover:text-gray-200 font-display"
                        onClick={advanceState}
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
                                    delay: 1.4,
                                  }}
                                  className="w-24 h-24"
                                  style={{
                                    backgroundColor: `${sortedYearArray[index].ProminentColor1}`,
                                  }}
                                ></motion.div>
                              </div>
                              <div className="w-24 h-24 -ml-20 z-10 filter blur-2xl saturate-150">
                                <motion.div
                                  initial={{ y: "0%", opacity: 0 }}
                                  animate={{ y: "0%", opacity: 1 }}
                                  transition={{
                                    ease: "easeOut",
                                    duration: 0.8,
                                    delay: 1.4,
                                  }}
                                  className="w-24 h-24"
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
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ),
                17: (
                  <div className="flex bg-gray-900 h-screen">
                    <div className="absolute w-full h-screen z-10  overflow-scroll">
                      <div className="w-full flex flex-row justify-around m-auto z-10 opacity-90">
                        {data.map((song, index) => {
                          const del = index * 0.25;
                          return (
                            <>
                              <motion.div
                                initial={{ y: "-30%", opacity: 0 }}
                                animate={{ y: "0%", opacity: 1 }}
                                transition={{
                                  ease: "easeOut",
                                  duration: 1,
                                  delay: del,
                                }}
                                className="w-8 -ml-2 h-screen z-10 filter blur-2xl saturate-150"
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
                    <div className="absolute w-full h-screen z-50  overflow-scroll">
                      <div className="w-full flex flex-row justify-around m-auto z-50 opacity-90">
                        {data.map((song, index) => {
                          const del = index * 0.25;
                          return (
                            <>
                              <motion.div
                                initial={{ y: "-30%", opacity: 0 }}
                                animate={{ y: "0%", opacity: 0 }}
                                transition={{
                                  ease: "easeOut",
                                  duration: 1,
                                  delay: del,
                                }}
                                className="w-8 -ml-2 h-screen z-50 filter blur-2xl saturate-150"
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
                    <div className="z-40 select-none h-max text-5xl w-1/2 p-12 leading-none text-gray-50">
                      <p>
                        {" "}
                        <span className="font-serif">Genre</span> is a category
                        of music, literature or other forms of art <br></br>{" "}
                        based on some set of criteria.
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
                      <div className="pt-4">
                        <span className="font-serif">Genres</span> change over
                        time as cultures invent new genres and discontinue the
                        use of old ones.
                      </div>
                      <div className="pt-4">
                        Often, identities fit into multiple genres by way of
                        borrowing and recombining these conventions.
                      </div>

                      {/* <div
                        className="absolute bottom-0 left-0 m-12 text-8xl w-min hover:text-gray-200 font-display"
                        onClick={advanceState}
                      >
                        ☞
                      </div> */}
                    </div>
                    <div className="z-40 select-none text-5xl w-1/2 p-12 leading-none text-gray-50">
                      <motion.div
                        initial={{ y: "-10%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{
                          ease: "easeIn",
                          duration: 0.8,
                          delay: 15,
                        }}
                      >
                        ...the subjective nature of these identities means that
                        that these classifications are often arbitrary and
                        controversial,
                        <br></br>
                        and they may overlap.
                      </motion.div>
                    </div>
                    <motion.div
                      style={{ zIndex: "100" }}
                      initial={{ y: "-10%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      transition={{
                        ease: "easeIn",
                        duration: 0.3,
                        delay: 17,
                      }}
                      className="select-none absolute top-0 right-0  mt-72 z-100 text-white m-12 text-8xl w-min hover:text-gray-200 font-display"
                      onClick={advanceState}
                    >
                      ☞
                    </motion.div>
                    <AnimatePresence>
                      {currentSongObject && (
                        <>
                          <motion.div
                            initial={{ y: "-10%", opacity: 0 }}
                            animate={{ y: "0%", opacity: 1 }}
                            exit={{ y: "-10%", opacity: 0 }}
                            transition={{
                              ease: "easeIn",
                              duration: 0.3,
                              delay: 0,
                            }}
                            className="absolute bottom-0 bg-gray-900 text-center pb-8 right-0 h-16 w-screen text-sm  z-30 pt-12 filter blur-3xl saturate-150 bg-opacity-70"
                          ></motion.div>
                          <motion.div
                            className="z-40 text-center absolute bottom-0 flex w-screen h-16 mb-8 text-white flex-col justify-around filter saturate-150"
                            initial={{ y: "-10%", opacity: 0 }}
                            animate={{ y: "0%", opacity: 1 }}
                            exit={{ y: "-10%", opacity: 0 }}
                            transition={{
                              ease: "easeIn",
                              duration: 0.3,
                              delay: 0,
                            }}
                          >
                            <div className="truncate text-3xl capitalize font-serif">
                              {currentSongObject.Genre}
                            </div>
                            <div className="text-sm capitalize font-serif">
                              {currentSongObject.SongName}
                            </div>
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                ),
                18: (
                  <div className="flex bg-gray-900 h-screen">
                    <div className="absolute w-full h-screen z-10  overflow-scroll">
                      <div className="w-full flex flex-row justify-around m-auto z-10 opacity-90">
                        {data.map((song, index) => {
                          return (
                            <>
                              <div
                                className="w-8 -ml-2 h-screen z-10 filter blur-2xl saturate-150"
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
                              ></div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                    <div className="absolute w-full h-screen z-50  overflow-scroll">
                      <div className="w-full flex flex-row justify-around m-auto z-50 opacity-90">
                        {data.map((song, index) => {
                          return (
                            <>
                              <div
                                className="w-8 -ml-2 h-screen z-50 filter blur-2xl saturate-150"
                                style={{
                                  opacity: 0,
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
                              ></div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                    <div className="z-40 select-none h-max text-5xl w-1/2 p-12 leading-none text-gray-50">
                      <p>
                        {" "}
                        <span className="font-serif">Genre</span> is a category
                        of music, literature or other forms of art <br></br>{" "}
                        based on some set of criteria.
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
                      <div className="pt-4">
                        <span className="font-serif">Genres</span> change over
                        time as cultures invent new genres and discontinue the
                        use of old ones.
                      </div>
                      <div className="pt-4">
                        Often, identities fit into multiple genres by way of
                        borrowing and recombining these conventions.
                      </div>
                    </div>
                    <div className="z-40 select-none text-5xl w-1/2 p-12 leading-none text-gray-50">
                      <div>
                        ...the subjective nature of these identities means that
                        that these classifications are often arbitrary and
                        controversial,
                        <br></br>
                        and they may overlap.
                      </div>
                      <motion.div
                        className="pt-12"
                        initial={{ y: "-10%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{
                          ease: "easeIn",
                          duration: 0.3,
                          delay: 2,
                        }}
                      >
                        <span className="font-serif">Genre</span> is in fact
                        fluid, like the English translation of the french word
                        <span className="font-serif"> Genre.</span>
                      </motion.div>
                    </div>
                    <motion.div
                      style={{ zIndex: "100" }}
                      initial={{ y: "-10%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      transition={{
                        ease: "easeIn",
                        duration: 0.3,
                        delay: 3,
                      }}
                      className="select-none absolute bottom-0 right-1/3  mb-72 z-100 text-white m-12 text-8xl w-min hover:text-gray-400 font-display"
                      onClick={advanceState}
                    >
                      ✺
                    </motion.div>
                    <AnimatePresence>
                      {currentSongObject && (
                        <>
                          <motion.div
                            initial={{ y: "-10%", opacity: 0 }}
                            animate={{ y: "0%", opacity: 1 }}
                            exit={{ y: "-10%", opacity: 0 }}
                            transition={{
                              ease: "easeIn",
                              duration: 0.3,
                              delay: 0,
                            }}
                            className="absolute bottom-0 bg-gray-900 text-center pb-8 right-0 h-16 w-screen text-sm  z-30 pt-12 filter blur-3xl saturate-150 bg-opacity-70"
                          ></motion.div>
                          <motion.div
                            className="z-40 text-center absolute bottom-0 flex w-screen h-16 mb-8 text-white flex-col justify-around filter saturate-150"
                            initial={{ y: "-10%", opacity: 0 }}
                            animate={{ y: "0%", opacity: 1 }}
                            exit={{ y: "-10%", opacity: 0 }}
                            transition={{
                              ease: "easeIn",
                              duration: 0.3,
                              delay: 0,
                            }}
                          >
                            <div className="truncate text-3xl capitalize font-serif">
                              {currentSongObject.Genre}
                            </div>
                            <div className="text-sm capitalize font-serif">
                              {currentSongObject.SongName}
                            </div>
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                ),
                19: (
                  <div className="flex bg-gray-900 h-screen">
                    <div className="absolute w-full h-screen z-10  overflow-scroll">
                      <div className="w-full flex flex-row justify-around m-auto z-10 opacity-90">
                        {data.map((song, index) => {
                          return (
                            <>
                              <div
                                className="w-8 -ml-2 h-screen z-10 filter blur-2xl saturate-150"
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
                              ></div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                    <div className="absolute w-full h-screen z-50  overflow-scroll">
                      <div className="w-full flex flex-row justify-around m-auto z-50 opacity-90">
                        {data.map((song, index) => {
                          return (
                            <>
                              <div
                                className="w-8 -ml-2 h-screen z-50 filter blur-2xl saturate-150"
                                style={{
                                  opacity: 0,
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
                              ></div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                    <div className="z-40 select-none h-max text-5xl w-1/2 p-12 leading-none text-gray-50">
                      <p>
                        {" "}
                        <motion.span
                          initial={{ y: "-10%", opacity: 0 }}
                          animate={{ y: "0%", opacity: 1 }}
                          transition={{
                            ease: "easeIn",
                            duration: 0.8,
                            delay: 1,
                          }}
                          className="w-28 text-center text-5xl italic font-serif"
                        >
                          Gender
                        </motion.span>{" "}
                        is<br></br>{" "}
                        <span className="pt-12">
                          based on some set of criteria.
                        </span>
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
                      <div className="pt-4">
                        <motion.span
                          initial={{ y: "-10%", opacity: 0 }}
                          animate={{ y: "0%", opacity: 1 }}
                          transition={{
                            ease: "easeIn",
                            duration: 0.8,
                            delay: 2,
                          }}
                          className="w-28 mr-2 text-center text-5xl italic font-serif"
                        >
                          Genders
                        </motion.span>
                        change over time as cultures invent new genders and
                        discontinue the use of old ones.
                      </div>
                      <div className="pt-4">
                        Often, identities fit into multiple genres by way of
                        borrowing and recombining these conventions.
                      </div>
                    </div>
                    <div className="z-40 select-none text-5xl w-1/2 p-12 leading-none text-gray-50">
                      <div>
                        ...the subjective nature of these identities means that
                        that these classifications are often arbitrary and
                        controversial,
                        <br></br>
                        and they may overlap.
                      </div>
                      <div className="pt-12">
                        <motion.span
                          initial={{ y: "-10%", opacity: 0 }}
                          animate={{ y: "0%", opacity: 1 }}
                          transition={{
                            ease: "easeIn",
                            duration: 0.8,
                            delay: 3,
                          }}
                          className="w-28 text-center text-5xl italic font-serif"
                        >
                          Gender
                        </motion.span>{" "}
                        is in fact fluid, like the English translation of the
                        french word
                        <span className="font-serif"> Genre.</span>
                      </div>
                    </div>

                    <AnimatePresence>
                      {currentSongObject && (
                        <>
                          <motion.div
                            initial={{ y: "-10%", opacity: 0 }}
                            animate={{ y: "0%", opacity: 1 }}
                            exit={{ y: "-10%", opacity: 0 }}
                            transition={{
                              ease: "easeIn",
                              duration: 0.3,
                              delay: 0,
                            }}
                            className="absolute bottom-0 bg-gray-900 text-center pb-8 right-0 h-16 w-screen text-sm  z-30 pt-12 filter blur-3xl saturate-150 bg-opacity-70"
                          ></motion.div>
                          <motion.div
                            className="z-40 text-center absolute bottom-0 flex w-screen h-16 mb-8 text-white flex-col justify-around filter saturate-150"
                            initial={{ y: "-10%", opacity: 0 }}
                            animate={{ y: "0%", opacity: 1 }}
                            exit={{ y: "-10%", opacity: 0 }}
                            transition={{
                              ease: "easeIn",
                              duration: 0.3,
                              delay: 0,
                            }}
                          >
                            <div className="truncate text-3xl capitalize font-serif">
                              {currentSongObject.Genre}
                            </div>
                            <div className="text-sm capitalize font-serif">
                              {currentSongObject.SongName}
                            </div>
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
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
