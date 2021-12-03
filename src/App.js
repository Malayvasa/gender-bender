import { useState } from "react";

import { AnimatePresence } from "framer-motion";
import useKeypress from "react-use-keypress";

import firstSongList from "./data/firstSongList";
import secondSongList from "./data/secondSongList";

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

let sixAlbums = require.context("../src/assets/sixAlbums", true);

function App() {
  const [animState, setAnimState] = useState(18);
  const [firstSelectedSong, setFirstSelectedSong] = useState(firstSongList[0]);
  const [secondSelectedSong, setSecondSelectedSong] = useState(
    secondSongList[0]
  );
  const advanceState = () => {
    if (animState >= 19) {
      setAnimState(1);
    } else {
      setAnimState(animState + 1);
    }
  };
  const previousState = () => {
    if (animState <= 1) {
      setAnimState(19);
    } else {
      setAnimState(animState - 1);
    }
  };

  useKeypress(["ArrowLeft", "ArrowRight"], (event) => {
    if (event.key === "ArrowLeft") {
      previousState();
    } else {
      advanceState();
    }
  });

  return (
    <div>
      <div
        className="flex w-screen min-h-screen items-center"
        style={{ fontVariantLigatures: "none" }}
      >
        <div className="w-full place-items-stretch">
          <AnimatePresence>
            {
              {
                1: <SectionOne advanceState={advanceState} />,
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
                  ></SectionThree>
                ),
                6: <SectionSix advanceState={advanceState}></SectionSix>,
                7: <SectionSeven advanceState={advanceState}></SectionSeven>,
                8: <SectionEight advanceState={advanceState}></SectionEight>,
                9: <SectionNine advanceState={advanceState}></SectionNine>,
                10: <SectionTen advanceState={advanceState}></SectionTen>,
                11: <SectionEleven advanceState={advanceState}></SectionEleven>,
                12: <SectionTwelve advanceState={advanceState}></SectionTwelve>,
                13: <SectionThirteen advanceState={advanceState} />,
                14: <SectionFourteen advanceState={advanceState} />,
                15: <SectionFifteen advanceState={advanceState} />,
                16: <SectionSixteen advanceState={advanceState} />,
                17: <SectionSeventeen advanceState={advanceState} />,
                18: <SectionEighteen advanceState={advanceState} />,
                19: <SectionNineteen advanceState={advanceState} />,
              }[animState]
            }
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;
