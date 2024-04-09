import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import TagLine from "./Tagline";
import { fadeIn, fadeInBlur } from "../design/animationVariants";

const Heading = ({ className, title, text, tag }) => {
  const controls = useAnimation();

  return (
    <InView as="div" onChange={(inView) => inView && controls.start("visible")}>
      <div
        className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
      >
        {tag && (
          <motion.div
            initial="hidden"
            animate={controls}
            variants={fadeInBlur(0.2)}
          >
            <TagLine className="mb-4 md:justify-center">{tag}</TagLine>
          </motion.div>
        )}
        {title && (
          <motion.h2
            className="h2 gradient-text"
            initial="hidden"
            animate={controls}
            variants={fadeInBlur(0.7)}
          >
            {title}
          </motion.h2>
        )}
        {text && (
          <motion.p
            initial="hidden"
            animate={controls}
            variants={fadeIn}
            className="body-2 mt-4 text-n-3"
          >
            {text}
          </motion.p>
        )}
      </div>
    </InView>
  );
};

export default Heading;
