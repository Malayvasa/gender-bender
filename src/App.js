import { useState } from "react";

import { AnimatePresence } from "framer-motion";

import firstSongList from "./data/firstSongList";
import secondSongList from "./data/secondSongList";

import SectionZero from "./sections/SectionZero";
import SectionOne from "./sections/SectionOne";
import SectionTwo from "./sections/SectionTwo";
import SectionThree from "./sections/SectionThree";
import SectionFour from "./sections/SectionFour";
import SectionSix from "./sections/SectionSix";
import SectionSeven from "./sections/SectionSeven";
import SectionEight from "./sections/SectionEight";
import SectionNine from "./sections/SectionNine";
import SectionTen from "./sections/SectionTen";
import SectionEleven from "./sections/SectionEleven";
import SectionTwelve from "./sections/SectionTwelve";
import SectionThirteen from "./sections/SectionThirteen";
import SectionFourteen from "./sections/SectionFourteen";
import SectionFifteen from "./sections/SectionFifteen";
import SectionSixteen from "./sections/SectionSixteen";
import SectionSeventeen from "./sections/SectionSeventeen";
import SectionEighteen from "./sections/SectionEighteen";
import SectionNineteen from "./sections/SectionNineteen";
import SectionTwenty from "./sections/SectionTwenty";
import BackButton from "./components/BackButton";

let sixAlbums = require.context("../src/assets/sixAlbums", true);
let Tracks = require.context("../src/assets/tracks", true);

function App() {
  console.log("ReRender");
  const [animState, setAnimState] = useState(0);
  const [firstSelectedSong, setFirstSelectedSong] = useState(firstSongList[0]);
  const [secondSelectedSong, setSecondSelectedSong] = useState(
    secondSongList[0]
  );
  const advanceState = () => {
    if (animState === 20) {
      setAnimState(0);
    } else setAnimState(animState + 1);
  };

  const prevState = () => {
    setAnimState(animState - 1);
  };

  return (
    <div>
      <div
        className="flex w-screen min-h-screen items-center"
        style={{ fontVariantLigatures: "none" }}
      >
        {animState !== 0 && (
          <div className="absolute top-0 left-0 text-3xl text-gray-400 ml-2 mt-2 z-200">
            <BackButton advanceState={prevState} delay={0} />
          </div>
        )}
        <div className="w-full place-items-stretch">
          <AnimatePresence>
            {
              {
                0: <SectionZero advanceState={advanceState} />,
                1: <SectionOne advanceState={advanceState} Tracks={Tracks} />,
                2: (
                  <SectionTwo
                    advanceState={advanceState}
                    setFirstSelectedSong={setFirstSelectedSong}
                    sixAlbums={sixAlbums}
                    firstSongList={firstSongList}
                  ></SectionTwo>
                ),
                3: (
                  <SectionThree
                    advanceState={advanceState}
                    sixAlbums={sixAlbums}
                    selectedSong={firstSelectedSong}
                    Tracks={Tracks}
                    TrackNum={firstSelectedSong.Cover}
                  ></SectionThree>
                ),
                4: (
                  <SectionFour
                    advanceState={advanceState}
                    sixAlbums={sixAlbums}
                    secondSongList={secondSongList}
                    setSecondSelectedSong={setSecondSelectedSong}
                  ></SectionFour>
                ),
                5: (
                  <SectionThree
                    advanceState={advanceState}
                    sixAlbums={sixAlbums}
                    selectedSong={secondSelectedSong}
                    Tracks={Tracks}
                    TrackNum={8}
                  ></SectionThree>
                ),
                6: (
                  <SectionSix
                    advanceState={advanceState}
                    Tracks={Tracks}
                  ></SectionSix>
                ),
                7: (
                  <SectionSeven
                    advanceState={advanceState}
                    Tracks={Tracks}
                  ></SectionSeven>
                ),
                8: (
                  <SectionEight
                    advanceState={advanceState}
                    Tracks={Tracks}
                  ></SectionEight>
                ),
                9: <SectionNine advanceState={advanceState}></SectionNine>,
                10: <SectionTen advanceState={advanceState}></SectionTen>,
                11: <SectionEleven advanceState={advanceState}></SectionEleven>,
                12: <SectionTwelve advanceState={advanceState}></SectionTwelve>,
                13: <SectionThirteen advanceState={advanceState} />,
                14: <SectionFourteen advanceState={advanceState} />,
                15: (
                  <SectionFifteen advanceState={advanceState} Tracks={Tracks} />
                ),
                16: (
                  <SectionSixteen advanceState={advanceState} Tracks={Tracks} />
                ),
                17: (
                  <SectionSeventeen
                    advanceState={advanceState}
                    Tracks={Tracks}
                  />
                ),
                18: <SectionEighteen advanceState={advanceState} />,
                19: <SectionNineteen advanceState={advanceState} />,
                20: (
                  <SectionTwenty advanceState={advanceState} Tracks={Tracks} />
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
