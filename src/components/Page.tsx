import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

export default function Page({
  title,
  children,
  centerTitle = false,
}: {
  title: string
  children: ReactNode
  centerTitle?: boolean
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.2 }}
      className="space-y-6"
    >
      <header className={`space-y-2 ${centerTitle ? 'text-center' : ''}`}>
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h1>
      </header>
      {children}
    </motion.section>
  )
}
