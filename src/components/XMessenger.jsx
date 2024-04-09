import Section from "./shared/Section";
import { coins } from "../assets";
import { xmessengerServices } from "../constants";
import { ChatMessage, SentMessage, UserInputField } from "./design/UIElements";
import { motion } from "framer-motion";
import { fadeIn } from "./design/animationVariants";
import bg from "../assets/bg.avif";
import stone3 from "../assets/stone-3.avif";
import stone5 from "../assets/stone-5.avif";
import Heading from "./shared/Heading";
import { Tilt } from "react-tilt";

const XMessenger = () => {
  return (
    <Section id="xmessenger">
      <div className="container max-w-screen-lg">
        <Heading tag="XChain Privacy APP" title="XMessenger" />

        <div className="relative">
          <Tilt
            className="tilt"
            tiltMaxAngleX={1}
            tiltMaxAngleY={1}
            options={{ max: 6, scale: 1.05 }}
          >
            <motion.div
              {...fadeIn}
              className="flex flex-col-reverse md:min-h-[24rem] lg:flex-row relative z-1 items-center mb-5 p-4 lg:p-8 border border-n-6 rounded-3xl overflow-hidden"
              initial={{ opacity: 0.15 }}
            >
              <div className="w-full md:w-1/2 mb-8 md:mb-0 relative z-10 flex flex-col justify-center"></div>
              <div className="w-full md:w-1/2 relative z-10 p-4">
                <h4 className="h4 mb-4">Paragon of Privacy</h4>
                <ul className="body-2">
                  {xmessengerServices.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center py-4 border-t border-n-6 text-gray-400"
                    >
                      {/* <img width={24} height={24} src={check} alt="Check mark" /> */}
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <motion.img
                src={bg}
                alt="Background"
                className="absolute top-0 left-0 lg:left-[-25%]  w-full h-full object-cover z-0 saturate-0 opacity-30 lg:opacity-70"
              />
            </motion.div>
          </Tilt>

          <motion.div
            className="relative z-1 grid gap-5 lg:grid-cols-2"
            {...fadeIn}
          >
            <Tilt
              className="tilt"
              tiltMaxAngleX={1}
              tiltMaxAngleY={1}
              options={{ max: 6, scale: 1.02 }}
            >
              <div className="relative min-h-[42rem] border border-n-6 rounded-3xl overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    src={stone5}
                    className="h-full w-full object-cover opacity-10 sepia"
                    width={630}
                    height={750}
                    alt="stone background"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 bg-gradient-to-b from-n-8/0 to-n-8/90">
                  <img
                    src={coins}
                    className="mb-4 h-[60%] md:h-[80%] lg:h-[100%] lg:scale-100 lg:mb-0 float z-0 object-contain"
                    alt="cross chain swapping coins"
                  />
                  <h4 className="h4 mb-4 z-1">
                    Untraceable Cross-chain Swapping
                  </h4>
                  <p className="body-2 mb-[3rem] text-gray-400">
                    XMessenger will offer an ever growing list of services,
                    beginning with cross-chain swaps, and mixing.
                  </p>
                </div>
              </div>
            </Tilt>

            <Tilt
              className="tilt"
              tiltMaxAngleX={1}
              tiltMaxAngleY={1}
              options={{ max: 6, scale: 1.02 }}
            >
              <motion.div
                className="relative min-h-[42rem] flex flex-col justify-between rounded-3xl border p-8 md:p-12 border-n-6 overflow-hidden"
                {...fadeIn}
                style={{
                  background: "linear-gradient(to top, black, black, #111)",
                }}
              >
                <div className="z-10 relative bg-transparent">
                  <h4 className="h4 mb-4">Free Encrypted Messaging</h4>
                  <p className="body-2 mb-[2rem] text-gray-400">
                    XMessenger offers free, encrypted messaging, without user
                    KYC or account verification.
                  </p>
                </div>

                <div className="flex flex-col gap-8 my-8 justify-center w-full z-20 relative">
                  <ChatMessage />
                  <SentMessage />
                  <UserInputField />
                </div>
                <img
                  src={stone3}
                  className="absolute top-[20%] left-0 w-full md:h-full opacity-30 md:opacity-20 object-cover z-0"
                  alt="stone background"
                />
              </motion.div>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default XMessenger;
