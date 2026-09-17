import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import SplashScreen from './screens/SplashScreen.jsx'
import OnboardingScreen from './screens/OnboardingScreen.jsx'
import './styles/components.css'
import './styles/screens.css'

export default function App() {
  const [screen, setScreen] = useState('splash')

  return (
    <main className="app-stage">
      <AnimatePresence mode="wait">
        {screen === 'splash' ? (
          <motion.div
            key="splash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            <SplashScreen onContinue={() => setScreen('onboarding')} />
          </motion.div>
        ) : (
          <motion.div
            key="onboarding"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.42 }}
          >
            <OnboardingScreen onBack={() => setScreen('splash')} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
