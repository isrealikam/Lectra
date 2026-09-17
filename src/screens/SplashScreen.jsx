import { motion } from 'motion/react'
import LectraMark from '../components/brand/LectraMark.jsx'

export default function SplashScreen({ onContinue }) {
  return (
    <section className="splash-screen" aria-label="Lectra welcome">
      <div className="splash-screen__grain" aria-hidden="true" />
      <div className="splash-screen__aurora" aria-hidden="true" />

      <svg
        className="splash-screen__terrain"
        viewBox="0 0 430 300"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lectraMountain" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#351015" />
            <stop offset="48%" stopColor="#741c25" />
            <stop offset="100%" stopColor="#16090c" />
          </linearGradient>
          <linearGradient id="lectraRidge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#d74550" stopOpacity=".05" />
            <stop offset="62%" stopColor="#e14f59" stopOpacity=".42" />
            <stop offset="100%" stopColor="#266b7d" stopOpacity=".1" />
          </linearGradient>
        </defs>
        <path d="M0 238 L40 206 L83 218 L135 154 L170 181 L230 112 L269 153 L316 129 L352 157 L430 207 L430 300 L0 300 Z" fill="url(#lectraMountain)" />
        <path d="M0 238 L40 206 L83 218 L135 154 L170 181 L230 112 L269 153 L316 129 L352 157 L430 207" fill="none" stroke="url(#lectraRidge)" strokeWidth="2" />
        <g stroke="#e65b64" strokeOpacity=".12" strokeWidth="1">
          <path d="M20 264 L40 206 L71 273" />
          <path d="M93 266 L135 154 L166 270" />
          <path d="M184 267 L230 112 L278 269" />
          <path d="M288 268 L316 129 L375 267" />
        </g>
      </svg>

      <div className="splash-screen__content">
        <motion.div
          className="splash-screen__identity"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
        >
          <LectraMark size="xl" animated />
          <div className="splash-screen__wordmark">
            <h1>LECTRA</h1>
            <p>LEARN&nbsp;&nbsp; BUILD&nbsp;&nbsp; GROW</p>
          </div>
        </motion.div>

        <motion.div
          className="splash-screen__message"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.62 }}
        >
          <span className="splash-screen__rule" />
          <p>Knowledge for<br />a better tomorrow.</p>
        </motion.div>

        <motion.button
          type="button"
          className="splash-screen__continue"
          onClick={onContinue}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.62, duration: 0.52 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Enter Lectra</span>
          <span className="splash-screen__arrow" aria-hidden="true">↗</span>
        </motion.button>
      </div>
    </section>
  )
}
