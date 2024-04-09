import { companyLogos } from "../constants";
import TagLine from "./shared/Tagline";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const containerVariants = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.2,
      duration: 1.3,
    },
  },
  hidden: { opacity: 0 },
};

const itemVariants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 0 },
};

const CompanyLogos = () => {
  return (
    <motion.div className="text-center">
      <TagLine className="mb-10 justify-center">As Featured On</TagLine>
      <InView threshold={0.9} triggerOnce>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            className="flex flex-wrap justify-center items-center gap-4 px-4 max-w-[90%] mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {companyLogos.map((item, index) => (
              <motion.a
                className="flex justify-center items-center h-[3.5rem] md:h-[6.5rem] cursor-pointer"
                variants={itemVariants}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <img
                  src={item.logo}
                  alt={`Logo ${index + 1}`}
                  className="max-h-full max-w-full hover:scale-105 transition ease-out duration-500"
                />
              </motion.a>
            ))}
          </motion.div>
        )}
      </InView>
    </motion.div>
  );
};

export default CompanyLogos;
