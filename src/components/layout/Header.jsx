import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { telegram, x, cross } from "../../assets";
import { navigation, socialLinks } from "../../constants";
import MenuSvg from "../../assets/svg/MenuSvg";
import MobileMenu from "./MobileMenu";
import Button from "../shared/Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
    isOpen ? enablePageScroll() : disablePageScroll();
  };

  const closeMenu = () => {
    setIsOpen(false);
    enablePageScroll();
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black/70 border-b border-n-6 backdrop-blur-sm">
      <MobileMenu isOpen={isOpen} closeMenu={closeMenu} />
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto px-5 py-3 lg:px-7.5 xl:px-10 relative">
        <ScrollLink
          key="#home"
          to="#home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <img
            src={cross}
            alt="Crux Decussata Logo"
            className="m-2"
            width={30}
            height={30}
          />
        </ScrollLink>
        <div className="md:hidden z-10">
          <MenuSvg onClick={toggleNavigation} />
        </div>

        <div className="justify-center items-center flex-grow hidden md:absolute md:flex md:inset-0">
          <div className="hidden md:flex justify-center items-center">
            {navigation.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.url.replace("#", "")}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={closeMenu}
                className="font-code text-xs lg:text-sm uppercase text-white hover:text-white/60 transition cursor-pointer ease-in-out duration-300 px-4 py-2 md:py-3 lg:py-3 xl:px-5"
              >
                {item.title}
              </ScrollLink>
            ))}
          </div>
        </div>

        <div className="hidden md:flex pe-10 items-center space-x-6 absolute right-0 top-1/2 transform -translate-y-1/2">
          <div className="w-full opacity-0 z-2 pointer-events-none lg:pointer-events-auto lg:opacity-100 lg:flex">
            <Button variant="dark" size="small" href="#buy">
              Buy $X
            </Button>
          </div>
          <a
            href={socialLinks[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition ease-in-out duration-150 z-2"
          >
            <img src={x} alt="x" className="w-10 h-10" />
          </a>
          <a
            href={socialLinks[1].href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition ease-in-out duration-150 z-2"
          >
            <img src={telegram} alt="Telegram" className="w-11 h-11" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
