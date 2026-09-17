import { motion } from 'motion/react'
import { enterUp, staggerChildren } from '../motion/presets.js'

function LogoMark() {
  return (
    <motion.div
      className="lectra-logo-mark lectra-logo-mark--hero"
      initial={{ opacity: 0, scale: 0.86, rotate: -5 }}
      animate={{ opacity: 1, scale: 1, rotate: -2 }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      aria-label="Lectra logo"
    >
      <motion.span
        className="lectra-orb"
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.45, duration: 0.38 }}
      />
    </motion.div>
  )
}

export default function SplashScreen({ onContinue }) {
  return (
    <section className="splash-screen" aria-labelledby="lectra-splash-title">
      <div className="splash-screen__ambient splash-screen__ambient--one" />
      <div className="splash-screen__ambient splash-screen__ambient--two" />

      <motion.div
        className="splash-screen__content"
        variants={staggerChildren}
        initial="initial"
        animate="animate"
      >
        <LogoMark />

        <motion.div variants={enterUp}>
          <p className="splash-screen__wordmark">LECTRA</p>
          <p className="splash-screen__tagline">LEARN · BUILD · GROW</p>
        </motion.div>

        <motion.p className="splash-screen__statement" variants={enterUp}>
          Knowledge for a better tomorrow.
        </motion.p>

        <motion.button
          type="button"
          className="splash-screen__enter"
          variants={enterUp}
          whileTap={{ scale: 0.97 }}
          onClick={onContinue}
        >
          Enter Lectra
          <span aria-hidden="true">→</span>
        </motion.button>
      </motion.div>
    </section>
  )
}
