import { motion } from 'motion/react'
import Button from './components/ui/Button.jsx'
import Card from './components/ui/Card.jsx'
import { enterUp, staggerChildren } from './motion/presets.js'
import './styles/components.css'

function LogoMark() {
  return (
    <div className="lectra-logo-mark" aria-label="Lectra logo mark">
      <span className="lectra-orb" />
    </div>
  )
}

export default function App() {
  return (
    <main className="lectra-shell">
      <motion.div variants={staggerChildren} initial="initial" animate="animate">
        <motion.p className="lectra-eyebrow" variants={enterUp}>
          Lectra design system · Phase 1
        </motion.p>

        <motion.h1 className="lectra-title" variants={enterUp}>
          Learn. Build. Grow.
        </motion.h1>

        <motion.p className="lectra-copy" variants={enterUp}>
          This is the visual foundation for Lectra: quiet light surfaces for serious learning,
          deep burgundy for brand moments, teal for progress, and electric blue only as the
          intelligent spark.
        </motion.p>

        <motion.div
          variants={enterUp}
          style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap', margin: '1.5rem 0 2rem' }}
        >
          <Button>Start learning</Button>
          <Button variant="secondary">Open AI tutor</Button>
          <Button variant="ghost">View courses</Button>
        </motion.div>

        <div className="lectra-grid">
          <div style={{ gridColumn: 'span 7' }}>
            <Card variant="brand">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <LogoMark />
                <div>
                  <p style={{ margin: 0, opacity: 0.68, fontSize: '.76rem', letterSpacing: '.18em' }}>
                    LECTRA
                  </p>
                  <h2 style={{ margin: '.35rem 0 .4rem', fontSize: 'clamp(1.8rem, 5vw, 3.6rem)', lineHeight: 1 }}>
                    Knowledge for a better tomorrow.
                  </h2>
                  <p style={{ margin: 0, maxWidth: '34rem', color: 'rgba(255,255,255,.72)', lineHeight: 1.6 }}>
                    Brand moments can feel cinematic without making the entire learning experience dark.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div style={{ gridColumn: 'span 5' }}>
            <Card>
              <p className="lectra-eyebrow">Motion language</p>
              <h2 style={{ marginTop: 0 }}>Depth, not decoration.</h2>
              <p className="lectra-copy" style={{ fontSize: '.98rem' }}>
                Press states compress slightly, cards rise with restraint, and the blue spark is reserved for AI and focus states.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.7rem', marginTop: '1.25rem' }}>
                <span className="lectra-orb" />
                <strong>Lectra intelligence signal</strong>
              </div>
            </Card>
          </div>
        </div>
      </motion.div>
    </main>
  )
}
