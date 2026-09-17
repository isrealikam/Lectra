import { motion } from 'motion/react'
import Button from '../components/ui/Button.jsx'
import LectraMark from '../components/brand/LectraMark.jsx'

const subjects = [
  { name: 'Economics', detail: 'Think in systems', tone: 'burgundy', glyph: '↗' },
  { name: 'Business', detail: 'Build with clarity', tone: 'teal', glyph: '◆' },
  { name: 'Mathematics', detail: 'Reason precisely', tone: 'ink', glyph: '∑' },
]

export default function OnboardingScreen({ onBack, onSkip, onStart }) {
  return (
    <section className="onboarding-screen">
      <header className="onboarding-screen__topbar">
        <button type="button" className="icon-button" onClick={onBack} aria-label="Back">
          <span aria-hidden="true">←</span>
        </button>
        <LectraMark size="xs" />
        <button type="button" className="onboarding-screen__skip" onClick={onSkip}>Skip</button>
      </header>

      <div className="onboarding-screen__content">
        <motion.div
          className="onboarding-screen__intro"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="onboarding-screen__eyebrow">Your learning system</p>
          <h1>
            Turn knowledge
            <br />
            into <span>Power.</span>
          </h1>
          <p className="onboarding-screen__copy">
            Learn deeply, practise deliberately, and keep everything you need to grow in one focused place.
          </p>
        </motion.div>

        <div className="subject-deck" aria-label="Lectra subject experiences">
          <div className="subject-deck__halo" aria-hidden="true" />
          {subjects.map((subject, index) => (
            <motion.article
              key={subject.name}
              className={`subject-card subject-card--${subject.tone} subject-card--${index + 1}`}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.18 + index * 0.08,
                duration: 0.68,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileTap={{ scale: 0.985 }}
            >
              <div className="subject-card__header">
                <span className="subject-card__index">0{index + 1}</span>
                <span className="subject-card__glyph" aria-hidden="true">{subject.glyph}</span>
              </div>
              <div>
                <span className="subject-card__line" />
                <strong>{subject.name}</strong>
                <small>{subject.detail}</small>
              </div>
            </motion.article>
          ))}
          <div className="subject-deck__spark" aria-hidden="true" />
        </div>

        <div className="onboarding-screen__progress" aria-label="Onboarding page 1 of 3">
          <span className="is-active" />
          <span />
          <span />
        </div>

        <motion.div
          className="onboarding-screen__actions"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.46, duration: 0.5 }}
        >
          <Button onClick={onStart}>Get Started <span aria-hidden="true">→</span></Button>
          <p>Already have an account? <button type="button">Sign in</button></p>
        </motion.div>
      </div>
    </section>
  )
}
