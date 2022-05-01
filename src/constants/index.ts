export const animateOnScrollVariant = {
  visible: (custom = { delay: 0 }) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: custom.delay },
  }),
  hidden: { opacity: 0, y: -20 },
}

export const animateOpacityVariant = {
  visible: (custom = { delay: 0, duration: 1 }) => ({
    opacity: 1,
    transition: {
      duration: custom.duration,
      delay: custom.delay,
      ease: 'easeIn',
    },
  }),
  hidden: { opacity: 0 },
}
