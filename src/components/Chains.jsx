import Section from "./shared/Section";
import { motion } from "framer-motion";
import bg from "../assets/waves.png";
import circle1 from "../assets/chains/circle1.svg";
import circle2 from "../assets/chains/circle2.svg";
import { cruxWhite } from "../assets";

const Chains = () => {
  return (
    <Section
      id="chains"
      customPaddings
      className="relative justify-center overflow-x-hidden mt-20 md:mb-48"
    >
      <motion.div
        className="flex flex-col"
        initial={{ opacity: 0.2 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-center z-5 mx-auto text-2xl md:text-[3.2rem] md:mb-[4rem] max-w-[90%] md:max-w-screen-md leading-tight gradient-text">
          Major chains supported by XMessenger include
        </h2>

        <div className="relative flex justify-center items-center overflow-hidden w-full max-w-full h-[70vh] z-4">
          <div
            className="absolute inset-0 bg-gradient-to-b from-black to-transparent z-3"
            style={{ top: "0", bottom: "50%" }}
          ></div>{" "}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-3"
            style={{ top: "60%", bottom: "0" }}
          ></div>{" "}
          <div className="outer-circle absolute w-[340px] md:w-[470px]">
            <img src={circle1} className="w-full h-auto" alt="Outer Circle" />
          </div>
          <div className="inner-circle absolute w-[500px] md:w-[700px] shadow-2xl">
            <img src={circle2} className="w-full h-auto" alt="Inner Circle" />
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 md:w-36">
            <img src={cruxWhite} className="w-full h-auto" alt="Inner Circle" />
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Chains;
