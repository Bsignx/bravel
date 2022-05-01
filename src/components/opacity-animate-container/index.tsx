import { animateOpacityVariant } from '@constants/index'
import { motion } from 'framer-motion'

type OpacityAnimateContainerProps = {
  children: React.ReactNode
  className?: string
  custom?: {
    delay?: number
  }
}

export const OpacityAnimateContainer = ({
  children,
  className,
  custom,
}: OpacityAnimateContainerProps) => (
  <motion.div
    variants={animateOpacityVariant}
    initial="hidden"
    animate="visible"
    {...(custom && { custom })}
    {...(className && { className })}
  >
    {children}
  </motion.div>
)
