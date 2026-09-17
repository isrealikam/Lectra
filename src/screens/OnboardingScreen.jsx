import { motion } from 'motion/react'
import Button from '../components/ui/Button.jsx'
import { enterUp, staggerChildren } from '../motion/presets.js'

export default function OnboardingScreen({ onBack }) {
  return (
    <section className="onboarding-screen">
      <div className="onboarding-screen__topbar">
        <button className="onboarding-screen__back" type="button" onClick={onBack}>
          ←
          <span className="sr-only">Back</span>
        </button>
        <button className="onboarding-screen__skip" type="button">
          Skip
        </button>
      </div>

      <motion.div
        className="onboarding-screen__content"
        variants={staggerChildren}
        initial="initial"
        animate="animate"
      >
        <motion.p className="lectra-eyebrow" variants={enterUp}>
          Smarter learning, designed around you
        </motion.p>

        <motion.h1 className="onboarding-screen__title" variants={enterUp}>
          Turn knowledge into <span>power.</span>
        </motion.h1>

        <motion.p className="onboarding-screen__copy" variants={enterUp}>
          Learn, practice, and grow with a focused space for courses, AI-guided support,
          progress, and serious study.
        </motion.p>

        <motion.div className="onboarding-screen__visual" variants={enterUp}>
          <div className="onboarding-screen__depth-card onboarding-screen__depth-card--one">
            <span>01</span>
            <strong>Learn</strong>
          </div>
          <div className="onboarding-screen__depth-card onboarding-screen__depth-card--two">
            <span>02</span>
            <strong>Build</strong>
          </div>
          <div className="onboarding-screen__depth-card onboarding-screen__depth-card--three">
            <span>03</span>
            <strong>Grow</strong>
          </div>
          <div className="onboarding-screen__spark" />
        </motion.div>

        <motion.div className="onboarding-screen__actions" variants={enterUp}>
          <Button>Get started</Button>
          <p>
            Already have an account? <button type="button">Sign in</button>
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
