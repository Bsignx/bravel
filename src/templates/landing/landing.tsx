import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { Footer } from '@components/footer'
import { animateOnScrollVariant, animateOpacityVariant } from '@constants/index'
import { useAnimation, motion } from 'framer-motion'

import {
  LandingNavbar,
  LandingHero,
  LandingGroupsCategories,
  LandingFeatures,
} from './'

export const LandingTemplate = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      variants={animateOpacityVariant}
      initial="hidden"
      animate="visible"
      className="flex min-h-full flex-auto flex-col bg-gray900"
    >
      <LandingNavbar />

      <LandingHero />

      <LandingFeatures />

      <motion.div
        variants={animateOnScrollVariant}
        animate={controls}
        initial="hidden"
        custom={{
          delay: 0.2,
        }}
        ref={ref}
      >
        <LandingGroupsCategories />
      </motion.div>
      <motion.div
        variants={animateOnScrollVariant}
        animate={controls}
        initial="hidden"
        custom={{
          delay: 0.4,
        }}
        ref={ref}
      >
        <Footer />
      </motion.div>
    </motion.div>
  )
}
