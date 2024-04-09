export const fadeIn = {
  initial: { opacity: 0.15 },
  whileInView: { opacity: 1 },
  viewport: { once: false, amount: 0.25 },
  transition: { duration: 0.8 },
};

export const fadeBackground = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 4, delay: 0.6 },
};

export const fadeInVariant = {
  hidden: { opacity: 0, y: 0 },
  visible: (customDelay) => ({
    opacity: 1,
    y: 0,
    transition: { delay: customDelay, duration: 1.3 },
  }),
};

export const fadeInBlur = (customDelay = 0.2) => ({
  initial: { opacity: 0, filter: "blur(5px)" },
  whileInView: { opacity: 1 },
  viewport: { once: false, amount: 0.4 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { delay: customDelay, duration: 0.5 },
  },
});
