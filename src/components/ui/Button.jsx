import { motion } from 'motion/react'

const variants = {
  primary: 'lectra-button lectra-button--primary',
  secondary: 'lectra-button lectra-button--secondary',
  ghost: 'lectra-button lectra-button--ghost',
}

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      whileHover={{ y: -1 }}
      transition={{ type: 'spring', stiffness: 420, damping: 28 }}
      className={`${variants[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </motion.button>
  )
}
