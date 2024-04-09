import Section from "./shared/Section";
import Heading from "./shared/Heading";
import NFTDisplay from "./NFTDisplay";
import Button from "./shared/Button";
import { motion } from "framer-motion";
import bg from "../assets/waves.png";

const NFTs = () => {
  return (
    <Section id="xnfts">
      <div className="container w-full relative z-2 overflow-visible">
        <div className="w-[90%] mx-auto">
          <Heading tag="Own part of the legendary saga" title="XNFT's" />
          <NFTDisplay />
          <motion.div
            className="flex flex-col max-w-sm gap-4 mx-auto mt-8"
            initial={{ opacity: 0.2 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            <Button
              isExternal
              variant="dark"
              href="https://nft.cruxdecussata.com/"
            >
              MINT XNFT
            </Button>
            <p className="font-grotesk text-xs text-gray-500 text-center">
              There are four classes of fighters. The mint is random.
            </p>
          </motion.div>
        </div>
        <img
          src={bg}
          className="absolute inset-0 w-full h-full object-cover scale-100 -z-1 sepia opacity-70 contrast-100"
          alt="Background"
        />
      </div>
    </Section>
  );
};

export default NFTs;
