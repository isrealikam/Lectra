import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import SplashScreen from './screens/SplashScreen.jsx'
import OnboardingScreen from './screens/OnboardingScreen.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import './styles/components.css'
import './styles/screens.css'

const transitions = {
  initial: { opacity: 0, y: 16, scale: 0.995 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -10, scale: 0.995 },
}

export default function App() {
  const [screen, setScreen] = useState('splash')

  return (
    <main className="app-stage">
      <div className="app-viewport">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={screen}
            className="screen-motion-shell"
            {...transitions}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            {screen === 'splash' && (
              <SplashScreen onContinue={() => setScreen('onboarding')} />
            )}
            {screen === 'onboarding' && (
              <OnboardingScreen
                onBack={() => setScreen('splash')}
                onSkip={() => setScreen('home')}
                onStart={() => setScreen('home')}
              />
            )}
            {screen === 'home' && <HomeScreen />}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  )
}
