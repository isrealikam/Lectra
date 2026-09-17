export const springPress = {
  type: 'spring',
  stiffness: 420,
  damping: 28,
}

export const enterUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.48, ease: [0.2, 0.8, 0.2, 1] },
}

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.07,
    },
  },
}
