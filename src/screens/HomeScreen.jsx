import { motion } from 'motion/react'
import LectraMark from '../components/brand/LectraMark.jsx'

function Icon({ name }) {
  const paths = {
    home: <><path d="M3 10.5 12 3l9 7.5" /><path d="M5.5 9.5V21h13V9.5" /></>,
    learn: <><path d="M4 5.5c3.5-.8 6.2-.2 8 1.6v13c-1.8-1.8-4.5-2.4-8-1.6z" /><path d="M20 5.5c-3.5-.8-6.2-.2-8 1.6v13c1.8-1.8 4.5-2.4 8-1.6z" /></>,
    practice: <><path d="M7 3h10v4H7z" /><path d="M5 5v16h14V5" /><path d="m8 13 2.2 2.2L16 9.5" /></>,
    library: <><path d="M5 4h14v16H5z" /><path d="M9 4v16" /></>,
    profile: <><circle cx="12" cy="8" r="3.5" /><path d="M5 21c.7-4.2 3.1-6.2 7-6.2s6.3 2 7 6.2" /></>,
    search: <><circle cx="10.8" cy="10.8" r="6.3" /><path d="m16 16 4.2 4.2" /></>,
    bell: <><path d="M6.5 10.2c0-3.7 2-6.2 5.5-6.2s5.5 2.5 5.5 6.2v4l1.7 2.8H4.8l1.7-2.8z" /><path d="M9.7 20h4.6" /></>,
    arrow: <><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></>,
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

const nav = [
  ['home', 'Home'],
  ['learn', 'Learn'],
  ['practice', 'Practice'],
  ['library', 'Library'],
  ['profile', 'Profile'],
]

export default function HomeScreen() {
  return (
    <section className="home-screen">
      <header className="home-header">
        <div className="home-header__copy">
          <p>Good evening,</p>
          <h1>Crimson <span aria-hidden="true">👋</span></h1>
          <small>Keep learning. Keep growing.</small>
        </div>
        <button className="home-header__profile" type="button" aria-label="Open profile">
          <LectraMark size="sm" />
        </button>
      </header>

      <div className="home-search">
        <Icon name="search" />
        <span>Search courses, topics, notes…</span>
        <button type="button" aria-label="Notifications"><Icon name="bell" /></button>
      </div>

      <motion.article
        className="feature-course"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.58 }}
        whileTap={{ scale: 0.992 }}
      >
        <div className="feature-course__grain" aria-hidden="true" />
        <div className="feature-course__copy">
          <span className="feature-course__pill">Continue learning</span>
          <p>ECONOMICS</p>
          <h2>Introduction<br />to Economics</h2>
          <div className="feature-course__progress">
            <div><span style={{ width: '60%' }} /></div>
            <small>60% complete</small>
          </div>
        </div>
        <div className="feature-course__art" aria-hidden="true">
          <div className="feature-course__plate feature-course__plate--one" />
          <div className="feature-course__plate feature-course__plate--two" />
          <div className="feature-course__beam" />
          <span className="feature-course__spark" />
        </div>
        <button className="feature-course__go" type="button" aria-label="Continue Introduction to Economics">
          <Icon name="arrow" />
        </button>
      </motion.article>

      <div className="quick-actions">
        {[
          ['learn', 'Courses'],
          ['practice', 'Practice'],
          ['library', 'Resources'],
          ['profile', 'AI Tutor'],
        ].map(([icon, label]) => (
          <button type="button" key={label}>
            <span><Icon name={icon} /></span>
            <small>{label}</small>
          </button>
        ))}
      </div>

      <section className="home-section">
        <div className="home-section__heading">
          <div>
            <p>YOUR PATH</p>
            <h2>Recommended for you</h2>
          </div>
          <button type="button">See all</button>
        </div>

        <div className="course-list">
          <article className="course-row">
            <div className="course-row__thumb course-row__thumb--teal">
              <span className="course-row__monogram">E</span>
            </div>
            <div className="course-row__content">
              <h3>Principles of Economics</h3>
              <p>Build a strong foundation</p>
              <div className="course-row__meta"><span>★ 4.8</span><span>12 lessons</span></div>
            </div>
            <span className="course-row__chevron">›</span>
          </article>

          <article className="course-row">
            <div className="course-row__thumb course-row__thumb--ink">
              <span className="course-row__monogram">∑</span>
            </div>
            <div className="course-row__content">
              <h3>Mathematics for Decisions</h3>
              <p>Reason with confidence</p>
              <div className="course-row__meta"><span>★ 4.7</span><span>10 lessons</span></div>
            </div>
            <span className="course-row__chevron">›</span>
          </article>
        </div>
      </section>

      <nav className="bottom-nav" aria-label="Primary">
        {nav.map(([icon, label], index) => (
          <button type="button" className={index === 0 ? 'is-active' : ''} key={label}>
            <Icon name={icon} />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </section>
  )
}
