import { motion } from 'motion/react'
import { enterUp, staggerChildren } from '../motion/presets.js'

export default function SplashScreen({ onContinue }) {
  return (
    <section className="splash-screen" aria-label="Lectra">
      <div className="splash-screen__glow splash-screen__glow--top" />
      <div className="splash-screen__glow splash-screen__glow--bottom" />

      <svg
        className="splash-screen__terrain"
        viewBox="0 0 430 260"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="terrainFill" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#2b0b10" />
            <stop offset="58%" stopColor="#54141b" />
            <stop offset="100%" stopColor="#17070a" />
          </linearGradient>
        </defs>
        <path
          d="M0 205 L62 170 L105 186 L154 126 L191 150 L245 91 L292 128 L336 104 L430 174 L430 260 L0 260 Z"
          fill="url(#terrainFill)"
        />
        <g opacity=".18" stroke="#c04a55" strokeWidth="1">
          <path d="M0 205 L62 170 L105 186 L154 126 L191 150 L245 91 L292 128 L336 104 L430 174" fill="none" />
          <path d="M18 221 L62 170 L85 225" fill="none" />
          <path d="M105 186 L154 126 L173 210" fill="none" />
          <path d="M191 150 L245 91 L270 213" fill="none" />
          <path d="M292 128 L336 104 L391 220" fill="none" />
        </g>
      </svg>

      <motion.div
        className="splash-screen__content"
        variants={staggerChildren}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="splash-screen__logo-shell"
          variants={enterUp}
          whileTap={{ scale: 0.98 }}
        >
          <img src="/lectra-logo.jpg" alt="Lectra" className="splash-screen__logo" />
        </motion.div>

        <motion.div className="splash-screen__brand" variants={enterUp}>
          <h1>LECTRA</h1>
          <p>LEARN · BUILD · GROW</p>
        </motion.div>

        <motion.p className="splash-screen__statement" variants={enterUp}>
          Knowledge for a better tomorrow.
        </motion.p>

        <motion.button
          type="button"
          className="splash-screen__continue"
          variants={enterUp}
          whileTap={{ scale: 0.97 }}
          onClick={onContinue}
        >
          Continue
          <span aria-hidden="true">→</span>
        </motion.button>
      </motion.div>
    </section>
  )
}
