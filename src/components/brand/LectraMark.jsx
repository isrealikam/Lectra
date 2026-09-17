import { motion } from 'motion/react'

export default function LectraMark({ className = '', size = 'md', animated = false }) {
  const Component = animated ? motion.div : 'div'
  const animationProps = animated
    ? {
        initial: { opacity: 0, scale: 0.86, rotate: -3 },
        animate: { opacity: 1, scale: 1, rotate: 0 },
        transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] },
      }
    : {}

  return (
    <Component
      className={`lectra-mark lectra-mark--${size} ${className}`}
      {...animationProps}
    >
      <img src="/lectra-icon.jpg" alt="Lectra" />
      <span className="lectra-mark__spark" aria-hidden="true" />
    </Component>
  )
}
