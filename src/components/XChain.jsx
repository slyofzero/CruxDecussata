import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { check, coin } from "../assets";
import { xChainContent } from "../constants";
import Section from "./shared/Section";
import bg from "../assets/bg2.avif";
import { Tilt } from "react-tilt";
import Button from "./shared/Button";

const XChain = () => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <Section id="xchain">
      <img
        className="absolute left-0 top-0 w-full h-auto md:h-full object-contain opacity-30 -z-10 sepia"
        src={bg}
        alt="Background"
      />
      <motion.div
        className="container mx-auto max-w-screen-lg"
        initial={{ opacity: 0.2 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.6 }}
      >
        <Tilt
          className="tilt"
          tiltMaxAngleX={1}
          tiltMaxAngleY={1}
          options={{ max: 3, scale: 1.02 }}
        >
          <div className="flex justify-center items-center">
            <motion.h2
              className="text-4xl md:text-7xl mb-4 md:mb-8 w-full md:w-1/2"
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 1.5, delay: 0.6 }}
            >
              The XChain Zero-Knowledge Protocol
            </motion.h2>
            <motion.div
              className="mt-10 md:mt-0 text-center w-full hidden md:w-1/2 md:inline-block"
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 1.5, delay: 1 }}
            >
              <img
                src={coin}
                className="inline-block w-full md:max-w-md xl:max-w-lg float"
                alt="X coin"
              />
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 md:mb-14">
            {xChainContent.map((item, index) => (
              <InView threshold={0.3} triggerOnce key={item.id}>
                {({ inView, ref }) => (
                  <motion.div
                    ref={ref}
                    className="flex items-start p-3"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={variants}
                    transition={{ duration: 1, delay: 0.3 + index * 0.3 }}
                  >
                    <img
                      src={check}
                      className="w-6 h-6 mt-1"
                      alt="Check mark"
                    />
                    <div className="ml-5">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm md:text-md text-gray-400">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                )}
              </InView>
            ))}
          </div>
          <div className="text-center max-w-sm mx-auto">
            <Button
              isExternal
              href="https://xcomerc20.gitbook.io/xmessenger-version-2-testnet"
              variants={variants}
              transition={{
                duration: 1.5,
                delay: 0.5 + xChainContent.length * 0.1,
              }}
            >
              Read Whitepaper
            </Button>
          </div>
        </Tilt>
      </motion.div>
    </Section>
  );
};

export default XChain;
