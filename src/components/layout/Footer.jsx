import { cruxWhite, telegram, x } from "../../assets";
import { footerData, socialLinks } from "../../constants";
import { Link as ScrollLink } from "react-scroll";
import { enablePageScroll } from "scroll-lock";
import Section from "../shared/Section";

const Footer = () => {
  enablePageScroll();

  return (
    <Section className="pt-[8rem] mb-[6rem]" customPaddings>
      <div className="container mx-auto bg-transparent text-white py-8">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <img
                src={cruxWhite}
                width={40}
                height={49}
                loading="lazy"
                alt="logo"
                className="mr-2"
              />
              <span className="text-3xl font-bold">CruxDecussata</span>
            </div>
            <p className="text-gray-400 mt-6 mb-2 text-xs md:text-md break-words">
              CA: 0xabec00542d141bddf58649bfe860c6449807237c
            </p>
            <p className="mb-6 font-light text-n-4 text-sm max-w-sm">
              ☓.com (EST. 2005) aka CruxDecussata.com ☓.com’s unicode/punycode
              is xn--33h.com. “☓” aka #Saltire, is also called
              #SaintAndrewsCross or #CruxDecussata
            </p>
            <div className="flex items-center space-x-4">
              <a
                href={socialLinks[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition ease-in-out duration-150"
              >
                <img src={x} alt="Crux X" />
              </a>
              <a
                href={socialLinks[1].href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition ease-in-out duration-150"
              >
                <img src={telegram} alt="Crux Telegram" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-1 flex justify-between">
            {footerData.map(({ section, links }, sectionIndex) => (
              <div key={sectionIndex} className="w-full lg:w-auto">
                <h3 className="font-semibold text-sm md:text-lg mb-4">
                  {section}
                </h3>
                <ul className="space-y-4">
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {link.isExternal ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 text-sm hover:text-gray-100 transition ease-out duration-500"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <ScrollLink
                          to={link.href.replace("#", "")}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          className="text-gray-400 text-sm hover:text-gray-100 transition ease-in-out duration-500 cursor-pointer"
                        >
                          {link.name}
                        </ScrollLink>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center font-grotesk text-n-4 my-10">
          © Copyright {new Date().getFullYear()} CruxDecussata | All Rights
          Reserved
        </div>
      </div>
    </Section>
  );
};

export default Footer;
