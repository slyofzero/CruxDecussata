import video from "../assets/XMessenger.mp4";
import Section from "./shared/Section";
import { motion } from "framer-motion";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { Tilt } from "react-tilt";
import { fadeIn } from "./design/animationVariants";

const VideoComponent = () => {
  return (
    <Section
      className="pt-[12rem] my-[6rem] md:pt-[6rem] overflow-hidden"
      customPaddings
    >
      <LazyLoadComponent>
        <div className="flex justify-center">
          <Tilt
            className="tilt w-fit h-fit"
            tiltMaxAngleX={1}
            tiltMaxAngleY={1}
            options={{ max: 5, scale: 1.15 }}
          >
            <motion.video
              className="w-full md:w-full opacity-100 md:opacity-80 max-w-screen-md md:border-[1px] border-gray-800 scale-[1] md:scale-[1] -translate-y-[30%] md:-translate-y-[10%] rounded-lg md:rounded-3xl"
              width={1024}
              height={490}
              loop
              autoPlay
              muted
              controls
              initial={{ opacity: 0.15 }}
              whileInView={{ opacity: 0.7 }}
              viewport={{ once: false, amount: 0.55 }}
              transition={{ duration: 0.6 }}
              {...fadeIn}
            >
              <source src={video} type="video/webm" />
              Your browser does not support the video tag.
            </motion.video>
          </Tilt>
        </div>
      </LazyLoadComponent>
    </Section>
  );
};

export default VideoComponent;
