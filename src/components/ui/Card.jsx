import { motion } from 'motion/react'

export default function Card({ children, variant = 'default', className = '', ...props }) {
  const classes = ['lectra-card', variant === 'brand' ? 'lectra-card--brand' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <motion.section
      className={classes}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
      {...props}
    >
      <div className="lectra-card__inner">{children}</div>
    </motion.section>
  )
}
