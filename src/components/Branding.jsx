import Section from "./shared/Section";
import { motion } from "framer-motion";
import Button from "./shared/Button";
import CompanyLogos from "./CompanyLogos";
import { fadeIn } from "./design/animationVariants";

const Branding = () => {
  return (
    <Section id="featured" customPaddings className="relative">
      {/* <img
        src={curves}
        className="w-full absolute h-full md:h-auto opacity-80 md:opacity-40"
      /> */}
      <motion.div {...fadeIn} className="my-20 max-w-screen-lg mx-auto">
        <CompanyLogos className="relative z-10 p-2 md:p-0" />
        <div className="w-fit mx-auto mt-16">
          <Button
            isExternal
            variant="dark"
            href="https://drive.google.com/drive/folders/14HGYylda6QkxyGLyuo60J-NTjs-DDtM8"
          >
            Marketing & Branding Kit
          </Button>
        </div>
      </motion.div>
    </Section>
  );
};

export default Branding;
