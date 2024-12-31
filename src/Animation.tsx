import React from "react";
import { motion } from "framer-motion";

const AnimatedBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={
        {
          // Gợi ý animation ở đây
        }
      }
      transition={
        {
          // Gợi ý transition ở đây
        }
      }
    >
      Animated Box
    </motion.div>
  );
};

export default AnimatedBox;
