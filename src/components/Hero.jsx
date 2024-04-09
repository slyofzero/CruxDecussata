import Button from "./shared/Button";
import Section from "./shared/Section";
import { fadeBackground, fadeInVariant } from "./design/animationVariants";
import { motion } from "framer-motion";
import video from "../assets/video.webm";

const Hero = () => {
  return (
    <Section
      className="relative flex flex-col h-[75vh] md:h-[80vh] overflow-hidden"
      customPaddings
      id="home"
      style={{ height: "calc(100vh - 75px)" }}
    >
      <motion.video
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-5% md:-translate-y-0 scale-[175%] md:scale-100 w-full max-w-screen-xl h-full object-contain -z-1 opacity-70 md:opacity-65 contrast-150"
        loop
        autoPlay
        muted
        {...fadeBackground}
      >
        <source src={video} />
      </motion.video>
      <div className="flex flex-col h-full justify-end md:justify-center text-center relative z-10 px-4 md:px-8 lg:px-20">
        <motion.div
          className=" md:h-auto md:py-0 flex flex-col justify-between"
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          custom={0.3}
        >
          <motion.h1
            className="font-medium uppercase text-shadow-md"
            style={{ fontSize: "clamp(2.25rem, 7.5vw, 12rem)" }}
            variants={fadeInVariant}
            custom={0.3}
          >
            Crux Decussata
          </motion.h1>

          <motion.p
            className="uppercase font-base tracking-[0.2em] text-xs md:text-2xl mt-0 md:mt-8 mx-auto py-6 md:py-10 mb-0 gradient-text"
            variants={fadeInVariant}
            custom={0.6}
          >
            Without privacy, freedom withers
          </motion.p>
          <motion.div
            variants={fadeInVariant}
            custom={1.1}
            className="max-w-sm w-full mx-auto"
          >
            <Button variant="light" white>
              Launch XMessenger
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;
