import { motion } from 'motion/react'
import Button from '../components/ui/Button.jsx'
import { enterUp, staggerChildren } from '../motion/presets.js'

const cards = [
  { label: 'Economics', meta: '12 lessons', className: 'course-card--burgundy' },
  { label: 'Business', meta: '8 lessons', className: 'course-card--teal' },
  { label: 'Mathematics', meta: '10 lessons', className: 'course-card--dark' },
]

export default function OnboardingScreen({ onBack }) {
  return (
    <section className="onboarding-screen">
      <header className="onboarding-screen__topbar">
        <button className="onboarding-screen__back" type="button" onClick={onBack} aria-label="Back">
          ←
        </button>
        <button className="onboarding-screen__skip" type="button">Skip</button>
      </header>

      <motion.div
        className="onboarding-screen__content"
        variants={staggerChildren}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={enterUp}>
          <p className="onboarding-screen__eyebrow">A smarter way to learn</p>
          <h1 className="onboarding-screen__title">
            Turn Knowledge
            <br />
            Into <span>Power.</span>
          </h1>
          <p className="onboarding-screen__copy">
            Learn, practice, and grow with Lectra. One focused platform built for serious progress.
          </p>
        </motion.div>

        <motion.div className="onboarding-screen__visual" variants={enterUp}>
          <div className="onboarding-screen__halo" />
          {cards.map((card, index) => (
            <motion.article
              key={card.label}
              className={`course-card ${card.className} course-card--${index + 1}`}
              initial={{ opacity: 0, y: 18, rotateZ: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 + index * 0.08, duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="course-card__topline">
                <img src="/lectra-logo.jpg" alt="" aria-hidden="true" />
                <span>0{index + 1}</span>
              </div>
              <div>
                <strong>{card.label}</strong>
                <small>{card.meta}</small>
              </div>
            </motion.article>
          ))}
          <div className="onboarding-screen__spark" />
        </motion.div>

        <motion.div className="onboarding-screen__dots" variants={enterUp} aria-label="Onboarding progress">
          <span className="is-active" />
          <span />
          <span />
        </motion.div>

        <motion.div className="onboarding-screen__actions" variants={enterUp}>
          <Button>Get Started <span aria-hidden="true">→</span></Button>
          <p>
            Already have an account? <button type="button">Sign in</button>
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
