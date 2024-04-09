import Heading from "./shared/Heading";
import Section from "./shared/Section";
import { roadmap } from "../constants";
import { check2, loading1 } from "../assets";
import Arrow from "../assets/arrow.svg";
import { motion } from "framer-motion";
import { fadeIn } from "./design/animationVariants";
import { Tilt } from "react-tilt";

const Roadmap = () => (
  <Section id="roadmap" customPaddings className="mt-[3rem]">
    <motion.div
      className="container md:pb-0"
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 2 }}
    >
      <Heading tag="The future is now" title="X Roadmap" />
      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item, index) => {
          const status = item.status === "done" ? "Done" : "In progress";
          return (
            <Tilt
              className={`tilt ${index === 1 && "mt-auto"}`}
              tiltMaxAngleX={1}
              tiltMaxAngleY={1}
              options={{ max: 6, scale: 1.01 }}
              key={item.id}
            >
              <motion.div
                className={`md:flex justify-end h-fit even:md:translate-y-[7rem] p-0.25 rounded-2xl bg-black border border-n-6 overflow-hidden `}
                {...fadeIn}
                key={item.id}
              >
                <div className="relative w-full p-8 rounded-sm overflow-hidden xl:p-10">
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8">
                      <div className="flex items-center px-4 py-1 bg-n-4/30 rounded text-white">
                        <img
                          className="mr-2.5"
                          src={item.status === "done" ? check2 : loading1}
                          width={16}
                          height={16}
                          alt={status}
                        />
                        <div className="tagline text-lg">{status}</div>
                      </div>
                    </div>

                    <div className="mb-10">
                      <div className="list-disc space-y-2">
                        {item.items.map((listItem, index) => (
                          <ul className="flex items-center" key={index}>
                            <img
                              src={Arrow}
                              className="w-4 h-4 mt-1 opacity-25"
                              alt="Check mark"
                            />

                            <li
                              key={index}
                              className="body-2 font-grotesk text-gray-300 list-none ps-3 pt-1"
                            >
                              {listItem}
                            </li>
                          </ul>
                        ))}
                      </div>
                    </div>
                    <h4 className="h2 font-grotesk mb-4 font-bold">
                      {item.title}
                    </h4>
                  </div>
                  <img
                    className="w-full absolute left-0 top-0 opacity-40"
                    src={item.imageUrl}
                    alt={item.title}
                  />
                </div>
              </motion.div>
            </Tilt>
          );
        })}
      </div>
    </motion.div>
  </Section>
);

export default Roadmap;
