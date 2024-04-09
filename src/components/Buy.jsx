import { motion } from "framer-motion";
import Section from "./shared/Section";
import bg from "../assets/stone-1.avif";
import { fadeIn } from "./design/animationVariants";
import { buyData, socialLinks } from "../constants";

const Buy = () => {
  return (
    <Section
      id="buy"
      className="container max-w-screen-xl py-20 flex gap- flex-col md:flex-row justify-between items-start"
      customPaddings
    >
      <motion.div
        {...fadeIn}
        className="flex flex-col md:w-1/2 z-1 pl-0 md:pl-4"
      >
        <h2 className="text-4xl font-bold mb-10 font-grotesk">Socials</h2>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-fit items-center gap-4 ps-5 pe-6 py-3 bg-transparent border border-n-5 rounded-full cursor-pointer hover:border-gray-400 hover:bg-gray-900 transition duration-200"
            >
              <img
                src={link.logo}
                alt={`${link.name} logo`}
                className="w-6 h-6"
              />
              <span className="text-white font-medium text-md">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div
        {...fadeIn}
        className="relative w-full md:w-1/2 mx-auto z-2 md:justify-end"
      >
        <div
          className="flex flex-col justify-center gap-4 w-full mt-10 md:mt-0"
          style={{ maxWidth: "30rem" }}
        >
          {buyData.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <div className="flex items-center w-full border max-w-sm border-gray-700 rounded-lg bg-gray-950 hover:bg-gray-900 hover:border-gray-400 transition ease-out duration-500 py-4 px-8 h-[96px]">
                <img src={item.logo} alt={item.alt} width={60} />
                <p className="text-md font-grotesk text-white px-6">
                  Buy on {item.name}
                </p>
              </div>
            </a>
          ))}
        </div>
      </motion.div>

      <motion.img
        className="absolute z-0 h-full max-w-[35%] object-contain bottom-[-50%] left-0"
        src={bg}
        alt="Background"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: false, amount: 0.7 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      />
    </Section>
  );
};

export default Buy;
