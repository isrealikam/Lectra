import { useEffect, useMemo, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  BookOpen,
  CalendarDays,
  Camera,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  GraduationCap,
  Home,
  MapPin,
  Megaphone,
  QrCode,
  School,
  Search,
  User,
  Users,
} from 'lucide-react'

const courses = [
  { code: 'ECO 101', title: 'Principles of Economics', time: '10:00 AM – 12:00 PM', venue: 'Old Social Sciences LT' },
  { code: 'ECO 103', title: 'Introduction to African Economy', time: '1:00 PM – 3:00 PM', venue: 'LT 2, Social Sciences' },
  { code: 'MTH 111', title: 'Elementary Mathematics I', time: '9:00 AM – 11:00 AM', venue: 'Science LT 1' },
  { code: 'GST 111', title: 'Communication in English', time: '2:00 PM – 4:00 PM', venue: 'CB 2' },
]

const roles = [
  { id: 'student', title: 'Student', subtitle: 'Join classes, follow your timetable and stay updated.', icon: GraduationCap },
  { id: 'classrep', title: 'Class Rep', subtitle: 'Set up your cohort, coordinate courses and share updates.', icon: Users },
  { id: 'lecturer', title: 'Lecturer', subtitle: 'Join your courses, share updates and manage attendance.', icon: School },
]

const institutions = ['University of Ilorin', 'University of Lagos', 'University of Ibadan', 'Obafemi Awolowo University']

function Brand({ compact = false }) {
  return (
    <div className={`brand ${compact ? 'brand--compact' : ''}`}>
      <img src="/assets/lectra-logo.webp" alt="LECTRA logo" className="brand__logo" />
      <div>
        <div className="brand__name">LECTRA</div>
        {!compact && <div className="brand__tag">Your campus, in sync.</div>}
      </div>
    </div>
  )
}

function Button({ children, secondary = false, onClick, disabled = false, icon }) {
  return (
    <button className={`button ${secondary ? 'button--secondary' : ''}`} onClick={onClick} disabled={disabled}>
      <span>{children}</span>
      {icon}
    </button>
  )
}

function Header({ title, onBack }) {
  return (
    <div className="screen-header">
      {onBack ? (
        <button className="icon-button" onClick={onBack} aria-label="Go back">
          <ArrowLeft size={20} />
        </button>
      ) : <span className="header-spacer" />}
      <h2>{title}</h2>
      <span className="header-spacer" />
    </div>
  )
}

function Splash({ onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 2300)
    return () => clearTimeout(timer)
  }, [onDone])

  return (
    <section className="splash-screen">
      <img src="/assets/lectra-logo.webp" alt="LECTRA" className="splash-logo" />
      <h1 className="splash-wordmark">LECTRA</h1>
      <p className="splash-tagline">Your campus, in sync.</p>
    </section>
  )
}

function Welcome({ next }) {
  return (
    <section className="welcome-screen">
      <div className="welcome-photo" />
      <div className="welcome-shade" />
      <button className="skip-link" onClick={() => next('auth')}>Skip</button>
      <div className="welcome-copy">
        <span className="eyebrow">CAMPUS, SIMPLIFIED</span>
        <h1>Know before<br /><span>you go.</span></h1>
        <p>Timetables, attendance, announcements and class updates — all in one place.</p>
      </div>
      <div className="welcome-bottom">
        <div className="dots"><span className="dot dot--active" /><span className="dot" /><span className="dot" /></div>
        <button className="round-next" onClick={() => next('auth')} aria-label="Continue"><ArrowRight size={22} /></button>
      </div>
    </section>
  )
}

function Auth({ next }) {
  return (
    <section className="panel-screen auth-screen">
      <div className="auth-brand"><Brand /></div>
      <div className="auth-copy">
        <span className="eyebrow">WELCOME TO LECTRA</span>
        <h1>Get Started</h1>
        <p>Create an account or sign in to continue.</p>
      </div>
      <div className="auth-actions">
        <Button onClick={() => next('role')}>Create Account</Button>
        <Button secondary onClick={() => next('role')}>Sign In</Button>
        <button className="google-button" onClick={() => next('role')}><span className="google-g">G</span> Continue with Google</button>
      </div>
      <p className="tiny-copy">By continuing, you agree to LECTRA's Terms of Service and Privacy Policy.</p>
    </section>
  )
}

function RoleSelection({ role, setRole, next, back }) {
  return (
    <section className="panel-screen">
      <Header title="Choose Your Role" onBack={back} />
      <div className="screen-copy centered">
        <h1>How will you use LECTRA?</h1>
        <p>Select the role that fits you now.</p>
      </div>
      <div className="role-list">
        {roles.map(({ id, title, subtitle, icon: Icon }) => (
          <button key={id} className={`role-card ${role === id ? 'role-card--active' : ''}`} onClick={() => setRole(id)}>
            <span className="role-icon"><Icon size={24} /></span>
            <span className="role-text"><strong>{title}</strong><small>{subtitle}</small></span>
            <span className="selection-mark">{role === id ? <Check size={16} /> : null}</span>
          </button>
        ))}
      </div>
      <div className="screen-footer"><Button disabled={!role} onClick={() => next('profile')} icon={<ArrowRight size={18} />}>Continue</Button></div>
    </section>
  )
}

function ProfileSetup({ role, profile, setProfile, next, back }) {
  const isLecturer = role === 'lecturer'
  return (
    <section className="panel-screen scroll-screen">
      <Header title="Complete Your Profile" onBack={back} />
      <div className="avatar-placeholder"><User size={38} /><span><Camera size={15} /></span></div>
      <div className="form-grid">
        <label>Full name<input value={profile.name} onChange={e => setProfile({ ...profile, name: e.target.value })} placeholder="Your full name" /></label>
        {!isLecturer && <label>Matric number<input value={profile.matric} onChange={e => setProfile({ ...profile, matric: e.target.value })} placeholder="e.g. 26/ECON/0123" /></label>}
        {isLecturer && <label>Academic title<select value={profile.title} onChange={e => setProfile({ ...profile, title: e.target.value })}><option>Dr.</option><option>Prof.</option><option>Mr.</option><option>Mrs.</option><option>Ms.</option></select></label>}
        <label>Department<select value={profile.department} onChange={e => setProfile({ ...profile, department: e.target.value })}><option>Economics</option></select></label>
        {!isLecturer && <label>Level<select value={profile.level} onChange={e => setProfile({ ...profile, level: e.target.value })}><option>100 Level</option><option>200 Level</option><option>300 Level</option><option>400 Level</option></select></label>}
      </div>
      <div className="screen-footer static-footer"><Button onClick={() => next('institution')}>Continue</Button></div>
    </section>
  )
}

function Institution({ selected, setSelected, next, back }) {
  const [search, setSearch] = useState('')
  const shown = institutions.filter(x => x.toLowerCase().includes(search.toLowerCase()))
  return (
    <section className="panel-screen scroll-screen">
      <Header title="Select Your Institution" onBack={back} />
      <div className="search-box"><Search size={18} /><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search for your university" /></div>
      <div className="institution-list">
        {shown.map((name, index) => (
          <button key={name} className={`institution-card ${selected === name ? 'institution-card--active' : ''}`} onClick={() => setSelected(name)}>
            <span className="school-badge">{index === 0 ? 'UI' : 'U'}</span>
            <span><strong>{name}</strong>{index !== 0 && <small>Coming soon</small>}</span>
            <span className={`radio ${selected === name ? 'radio--active' : ''}`} />
          </button>
        ))}
      </div>
      <div className="screen-footer static-footer"><Button disabled={!selected} onClick={() => next('roleSetup')}>Continue</Button></div>
    </section>
  )
}

function QRVisual() {
  const cells = useMemo(() => Array.from({ length: 81 }, (_, i) => ((i * 17 + i * i * 7) % 11) < 5), [])
  return <div className="fake-qr">{cells.map((on, i) => <span key={i} className={on ? 'on' : ''} />)}</div>
}

function StudentJoin({ next, back }) {
  const [tab, setTab] = useState('qr')
  return (
    <section className="panel-screen scroll-screen">
      <Header title="Join Your Class" onBack={back} />
      <div className="segmented"><button className={tab === 'qr' ? 'active' : ''} onClick={() => setTab('qr')}>QR Code</button><button className={tab === 'manual' ? 'active' : ''} onClick={() => setTab('manual')}>Manual</button></div>
      {tab === 'qr' ? (
        <div className="join-card centered-card">
          <div className="qr-icon-wrap"><QrCode size={32} /></div>
          <h2>Scan your cohort QR</h2>
          <p>Use the QR shared by your Class Rep in your class WhatsApp group.</p>
          <div className="camera-frame"><QrCode size={74} /></div>
          <Button onClick={() => next('courses')}>Open Scanner</Button>
        </div>
      ) : (
        <div className="form-grid manual-form">
          <label>University<select><option>University of Ilorin</option></select></label>
          <label>Faculty<select><option>Social Sciences</option></select></label>
          <label>Department<select><option>Economics</option></select></label>
          <label>Level<select><option>100 Level</option></select></label>
          <label>Cohort<select><option>Economics • 100 Level • 2026/2027</option></select></label>
          <Button onClick={() => next('courses')}>Request to Join</Button>
        </div>
      )}
    </section>
  )
}

function ClassRepSetup({ next, back }) {
  const [stage, setStage] = useState(0)
  if (stage === 0) {
    return (
      <section className="panel-screen scroll-screen">
        <Header title="Create Your Cohort" onBack={back} />
        <div className="form-grid">
          <label>Faculty<select><option>Social Sciences</option></select></label>
          <label>Department<select><option>Economics</option></select></label>
          <label>Level<select><option>100 Level</option></select></label>
          <label>Academic session<select><option>2026/2027</option></select></label>
          <label>Semester<select><option>Harmattan Semester</option><option>Rain Semester</option></select></label>
        </div>
        <div className="auto-name-card"><span>LECTRA will create</span><strong>Economics • 100 Level • 2026/2027</strong></div>
        <div className="screen-footer static-footer"><Button onClick={() => setStage(1)}>Review Courses</Button></div>
      </section>
    )
  }
  if (stage === 1) return <CourseSelection title="Review Semester Courses" button="Create Cohort" onContinue={() => setStage(2)} onBack={() => setStage(0)} />
  return (
    <section className="panel-screen scroll-screen">
      <Header title="Invite Your Class" onBack={() => setStage(1)} />
      <div className="invite-card"><span className="pill">STUDENTS</span><h2>Share this with your class WhatsApp group</h2><QRVisual /><Button onClick={() => {}}>Share Cohort QR</Button></div>
      <div className="invite-card lecturer-invite"><span className="pill pill--teal">LECTURERS</span><h2>Send each lecturer their course QR</h2>{courses.slice(0,2).map(c => <div className="mini-invite" key={c.code}><span><strong>{c.code}</strong><small>{c.title}</small></span><QrCode size={26} /></div>)}</div>
      <Button onClick={() => next('notifications')}>Continue</Button>
    </section>
  )
}

function LecturerJoin({ next, back }) {
  return (
    <section className="panel-screen">
      <Header title="Join a Course" onBack={back} />
      <div className="join-card centered-card lecturer-join">
        <span className="pill pill--teal">LECTURER ACCESS</span>
        <div className="qr-icon-wrap"><QrCode size={32} /></div>
        <h2>Scan the QR from the Class Rep</h2>
        <p>Lecturers join courses only through the course-specific QR sent by the Class Rep.</p>
        <div className="camera-frame"><QrCode size={74} /></div>
        <Button onClick={() => next('notifications')}>Open Scanner</Button>
      </div>
    </section>
  )
}

function CourseSelection({ title = 'Choose Your Courses', button = 'Continue', onContinue, onBack }) {
  const [selected, setSelected] = useState(courses.map(c => c.code))
  const toggle = code => setSelected(s => s.includes(code) ? s.filter(x => x !== code) : [...s, code])
  return (
    <section className="panel-screen scroll-screen">
      <Header title={title} onBack={onBack} />
      <div className="screen-copy"><p>LECTRA has loaded the Economics courses for this semester. Keep the ones that apply.</p></div>
      <div className="course-picker">
        {courses.map(c => (
          <button key={c.code} onClick={() => toggle(c.code)} className={`course-pick ${selected.includes(c.code) ? 'course-pick--active' : ''}`}>
            <span className="check-box">{selected.includes(c.code) ? <Check size={15} /> : null}</span>
            <span><strong>{c.code}</strong><small>{c.title}</small></span>
          </button>
        ))}
      </div>
      <div className="screen-footer static-footer"><Button onClick={onContinue}>{button}</Button></div>
    </section>
  )
}

function Notifications({ next, back }) {
  return (
    <section className="panel-screen notification-screen">
      <Header title="Notifications" onBack={back} />
      <div className="notification-hero"><div className="bell-orbit"><Bell size={34} /></div><h1>Stay in sync.</h1><p>Get notified when your class changes, an announcement drops or attendance opens.</p></div>
      <div className="notification-list">
        {['Class reminders', 'New announcements', 'Timetable changes', 'Attendance updates'].map(x => <div key={x}><CheckCircle2 size={18} /><span>{x}</span></div>)}
      </div>
      <div className="screen-footer static-footer"><Button onClick={() => next('success')}>Enable Notifications</Button><button className="text-button" onClick={() => next('success')}>Maybe later</button></div>
    </section>
  )
}

function Success({ role, next }) {
  const label = role === 'classrep' ? 'Your cohort is ready.' : role === 'lecturer' ? 'Your lecturer profile is ready.' : 'Your class is ready.'
  return (
    <section className="panel-screen success-screen">
      <div className="success-icon"><Check size={44} /></div>
      <h1>You’re all set!</h1>
      <p>{label}<br />Welcome to LECTRA.</p>
      <div className="screen-footer static-footer"><Button onClick={() => next('dashboard')}>Go to Dashboard</Button></div>
    </section>
  )
}

function BottomNav({ active = 'home' }) {
  const items = [
    ['home', Home, 'Home'],
    ['courses', BookOpen, 'Courses'],
    ['timetable', CalendarDays, 'Timetable'],
    ['profile', User, 'Profile'],
  ]
  return <nav className="bottom-nav">{items.map(([id, Icon, label]) => <button key={id} className={active === id ? 'active' : ''}><Icon size={20} /><span>{label}</span></button>)}</nav>
}

function StudentDashboard({ profile }) {
  return (
    <section className="dashboard-screen">
      <div className="dashboard-top"><Brand compact /><button className="icon-button bell-button"><Bell size={20} /><span /></button></div>
      <div className="hello"><span>Good morning,</span><h1>{profile.name?.split(' ')[0] || 'Student'} 👋</h1><p>Ready for a productive day?</p></div>
      <article className="next-class-card">
        <div className="next-head"><span>NEXT CLASS</span><span className="status-pill">On schedule</span></div>
        <h2>ECO 101</h2><h3>Principles of Economics</h3>
        <div className="meta-line"><Clock3 size={16} /> 10:00 AM – 12:00 PM</div>
        <div className="meta-line"><MapPin size={16} /> Old Social Sciences LT</div>
        <div className="next-arrow"><ChevronRight size={20} /></div>
      </article>
      <SectionTitle title="Today’s Classes" />
      <div className="compact-list">{courses.slice(0,3).map((c, i) => <article className="class-row" key={c.code}><span className={`accent-bar accent-${i}`} /><div className="time-col"><strong>{c.time.split(' – ')[0]}</strong><small>{c.time.split(' – ')[1]}</small></div><div className="class-main"><strong>{c.code}</strong><span>{c.title}</span><small><MapPin size={13} /> {c.venue}</small></div><ChevronRight size={18} /></article>)}</div>
      <SectionTitle title="Latest Updates" />
      <div className="updates-list"><article><span className="update-icon burg"><Megaphone size={17} /></span><div><strong>Venue Change</strong><p>ECO 101 will now hold at Old Social Sciences LT.</p></div><small>2h ago</small></article><article><span className="update-icon teal"><CalendarDays size={17} /></span><div><strong>Class Update</strong><p>GST 111 has been moved to 2:00 PM.</p></div><small>5h ago</small></article></div>
      <BottomNav />
    </section>
  )
}

function ClassRepDashboard({ profile }) {
  return (
    <section className="dashboard-screen">
      <div className="dashboard-top"><Brand compact /><button className="icon-button bell-button"><Bell size={20} /><span /></button></div>
      <div className="hello"><span>Good morning,</span><h1>{profile.name?.split(' ')[0] || 'Class Rep'} 👋</h1><p>Here’s what’s happening with your class.</p></div>
      <article className="cohort-card"><span className="eyebrow">YOUR COHORT</span><h2>Economics • 100 Level</h2><p>2026/2027 • Harmattan Semester</p><div className="cohort-stats"><span><strong>248</strong><small>Students</small></span><span><strong>4</strong><small>Courses</small></span><span><strong>3</strong><small>Pending</small></span></div></article>
      <SectionTitle title="Quick Actions" />
      <div className="quick-grid"><button><Megaphone size={20} /><span>Send Update</span></button><button><QrCode size={20} /><span>Share QR</span></button><button><Users size={20} /><span>Students</span></button><button><CalendarDays size={20} /><span>Timetable</span></button></div>
      <SectionTitle title="Today’s Classes" />
      <div className="compact-list">{courses.slice(0,2).map((c,i)=><article className="class-row" key={c.code}><span className={`accent-bar accent-${i}`} /><div className="time-col"><strong>{c.time.split(' – ')[0]}</strong><small>{c.time.split(' – ')[1]}</small></div><div className="class-main"><strong>{c.code}</strong><span>{c.title}</span><small><MapPin size={13} /> {c.venue}</small></div><ChevronRight size={18} /></article>)}</div>
      <BottomNav />
    </section>
  )
}

function LecturerDashboard({ profile }) {
  const display = `${profile.title || 'Dr.'} ${profile.name?.split(' ')[0] || 'Lecturer'}`
  return (
    <section className="dashboard-screen">
      <div className="dashboard-top"><Brand compact /><button className="icon-button bell-button"><Bell size={20} /><span /></button></div>
      <div className="hello"><span>Good morning,</span><h1>{display}</h1><p>Let’s keep the campus in sync.</p></div>
      <article className="next-class-card"><div className="next-head"><span>NEXT CLASS</span><span className="status-pill">Today</span></div><h2>ECO 101</h2><h3>Principles of Economics</h3><div className="meta-line"><Clock3 size={16} /> 10:00 AM – 12:00 PM</div><div className="meta-line"><MapPin size={16} /> Old Social Sciences LT</div></article>
      <SectionTitle title="Quick Actions" />
      <div className="quick-grid"><button><QrCode size={20} /><span>Attendance QR</span></button><button><Megaphone size={20} /><span>Post Update</span></button><button><BookOpen size={20} /><span>My Courses</span></button><button><Users size={20} /><span>Student List</span></button></div>
      <BottomNav />
    </section>
  )
}

function SectionTitle({ title }) {
  return <div className="section-title"><h2>{title}</h2><button>View all <ChevronRight size={16} /></button></div>
}

export default function App() {
  const [screen, setScreen] = useState('splash')
  const [history, setHistory] = useState([])
  const [role, setRole] = useState('')
  const [institution, setInstitution] = useState('University of Ilorin')
  const [profile, setProfile] = useState({ name: '', matric: '', title: 'Dr.', department: 'Economics', level: '100 Level' })

  const go = target => { setHistory(h => [...h, screen]); setScreen(target) }
  const back = () => setHistory(h => {
    const copy = [...h]
    const prev = copy.pop() || 'welcome'
    setScreen(prev)
    return copy
  })

  const roleSetup = role === 'student'
    ? <StudentJoin next={go} back={back} />
    : role === 'classrep'
      ? <ClassRepSetup next={go} back={back} />
      : <LecturerJoin next={go} back={back} />

  if (screen === 'splash') return <Splash onDone={() => setScreen('welcome')} />
  if (screen === 'welcome') return <Welcome next={go} />
  if (screen === 'auth') return <Auth next={go} />
  if (screen === 'role') return <RoleSelection role={role} setRole={setRole} next={go} back={back} />
  if (screen === 'profile') return <ProfileSetup role={role} profile={profile} setProfile={setProfile} next={go} back={back} />
  if (screen === 'institution') return <Institution selected={institution} setSelected={setInstitution} next={go} back={back} />
  if (screen === 'roleSetup') return roleSetup
  if (screen === 'courses') return <CourseSelection onContinue={() => go('notifications')} onBack={back} />
  if (screen === 'notifications') return <Notifications next={go} back={back} />
  if (screen === 'success') return <Success role={role} next={go} />
  if (screen === 'dashboard') {
    if (role === 'classrep') return <ClassRepDashboard profile={profile} />
    if (role === 'lecturer') return <LecturerDashboard profile={profile} />
    return <StudentDashboard profile={profile} />
  }
  return null
}
