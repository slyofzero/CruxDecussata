import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { navigation, socialLinks } from "../../constants";
import { cruxBlack } from "../../assets";
import Button from "../shared/Button";

const MobileMenu = ({ isOpen, closeMenu }) => {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute h-[100vh] inset-0 bg-black/70 z-50"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={closeMenu}
        >
          <motion.div
            className="fixed bg-black/70 backdrop-blur-md text-white w-3/4 max-w-sm h-[100vh] right-0 top-0 border-l border-n-3"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div onClick={closeMenu} className="px-5 py-3 ms-auto w-fit">
              <img src={cruxBlack} width={40} alt="close mobile menu" />
            </div>
            <div className="flex flex-col items-center justify-center">
              {navigation.map((item) => (
                <ScrollLink
                  key={item.id}
                  to={item.url.replace("#", "")}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeMenu}
                  className="font-code uppercase hover:text-blue-400 p-4 text-md"
                >
                  {item.title}
                </ScrollLink>
              ))}
            </div>
            <div className="flex flex-wrap w-[80%] mx-auto justify-center gap-5 pt-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-fit items-center gap-4 p-2 bg-transparent cursor-pointer"
                >
                  <img
                    src={link.logo}
                    alt={`${link.name} logo`}
                    className="w-8 h-8"
                  />
                </a>
              ))}
            </div>
            <div
              onClick={closeMenu}
              className="w-[80%] flex flex-col mx-auto mt-8 gap-4"
            >
              <Button variant="dark" size="small" href="#buy">
                Buy $X
              </Button>
              <Button variant="light" size="small" href="">
                Launch XMessenger
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
