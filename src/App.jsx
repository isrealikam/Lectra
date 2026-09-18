import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'

const SPLASH_DURATION = 3200

function Splash({ onComplete }) {
  useEffect(() => {
    const timer = window.setTimeout(onComplete, SPLASH_DURATION)
    return () => window.clearTimeout(timer)
  }, [onComplete])

  return (
    <section className="splash" aria-label="Welcome to LECTRA">
      <div className="splash__ambient splash__ambient--top" />
      <div className="splash__ambient splash__ambient--bottom" />

      <div className="splash__content">
        <div className="splash__mark">
          <img src="/assets/lectra-logo.webp" alt="LECTRA" />
          <span className="splash__point" aria-hidden="true" />
        </div>
        <p className="splash__tagline">Your campus, in sync.</p>
      </div>

      <span className="splash__edition">Built for campus life</span>
    </section>
  )
}

function Welcome() {
  return (
    <main className="welcome">
      <section className="welcome__visual" aria-label="A university campus at sunset">
        <img
          src="/assets/onboarding-campus.webp"
          alt="A sunlit university campus with palm trees"
        />
        <div className="welcome__image-shade" aria-hidden="true" />

        <div className="welcome__brand" aria-label="LECTRA">
          <img src="/assets/lectra-logo.webp" alt="" />
          <span>LECTRA</span>
        </div>

        <div className="welcome__signal" aria-hidden="true">
          <span />
          Campus, connected
        </div>
      </section>

      <section className="welcome__content">
        <div className="welcome__step" aria-label="Onboarding step 1 of 3">
          <span>01</span>
          <div className="welcome__progress"><i /></div>
          <span>03</span>
        </div>

        <div className="welcome__copy">
          <p className="welcome__eyebrow">EVERYTHING IN STEP</p>
          <h1>Know before<br />you <em>go.</em></h1>
          <p className="welcome__description">
            Your classes, updates, and campus day—beautifully organised in one place.
          </p>
        </div>

        <div className="welcome__actions">
          <p>Made for students,<br />reps &amp; lecturers.</p>
          <button type="button" className="welcome__next" aria-label="Continue onboarding">
            <span>Continue</span>
            <i><ArrowRight size={20} strokeWidth={2} /></i>
          </button>
        </div>
      </section>
    </main>
  )
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true)

  return showSplash
    ? <Splash onComplete={() => setShowSplash(false)} />
    : <Welcome />
}
