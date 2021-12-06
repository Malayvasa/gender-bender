import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function SectionSix({ advanceState }) {
  const [animState, setAnimState] = useState(true);
  const interimAdvanceState = () => {
    setAnimState(false);
    setTimeout(() => {
      advanceState();
    }, 1000);
  };
  return (
    <div className="w-screen flex flex-col text-5xl md:text-4xl -mt-12 leading-snug place-items-stretch">
      <AnimatePresence>
        {animState && (
          <>
            <motion.div
              initial={{ y: "-20%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-20%", opacity: 0 }}
              className="mx-auto w-max"
              transition={{
                ease: "easeOut",
                duration: 1,
                delay: 0,
              }}
            >
              <motion.div
                initial={{ y: "-20%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                className="w-max"
                transition={{
                  ease: "easeOut",
                  duration: 1,
                  delay: 1,
                }}
              >
                SOUND ON
              </motion.div>

              <div className="mx-auto mt-12 w-full">
                <div className="mx-auto w-min">
                  <motion.div
                    initial={{ y: "-20%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-20%", opacity: 0 }}
                    transition={{ ease: "easeOut", duration: 1, delay: 2 }}
                    className="w-24 -ml-8 pb-8 text-black hover:text-blue-600"
                    onClick={interimAdvanceState}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="100%"
                      width="100%"
                      fill="currentColor"
                      stroke="currentColor"
                      viewBox="0 0 700 700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M313.45 454c19 1 31.69 8.42 43.18 19.6v6c0 26.41-23.76 40.28-48 39-17.9-.94-45.11-12.73-43.68-34.45 1.45-21.95 30.22-31.15 48.49-30.2m43.18-6.68a81 81 0 00-42.06-14.59c-37.19-1.95-68.91 20.47-70.85 50.06s26.62 55.15 63.81 57.1 70.39-22 70.39-60.27v-256c6.64 11.44 13.91 20.25 21.1 29 12.34 14.95 20.75 27.26 26.28 41.26s8.47 30.39 9.82 53.28h21.26c-1.3-21.15-3.39-41.22-11.25-61.12-6.48-16.39-15.93-30.34-29.69-47-25.35-30.71-24.7-39-35.87-75.14h-22.93z"
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SectionSix;
