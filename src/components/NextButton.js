import { motion } from "framer-motion";

function NextButton({ delay, advanceState }) {
  return (
    <motion.div
      initial={{ x: "0%", y: "-20%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1, delay: delay }}
      className="select-none  w-min text-8xl md:text-7xl hover:text-blue-600 my-auto"
      onClick={advanceState}
    >
      <motion.div
        transition={{ ease: "easeOut", duration: 0.5, delay: 0 }}
        whileHover={{ x: "10%" }}
      >
        ☞
      </motion.div>
    </motion.div>
  );
}

export default NextButton;
