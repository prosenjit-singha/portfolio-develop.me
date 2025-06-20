'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <motion.main
      className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white p-8 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you&apos;re looking for doesn&apos; exist.</p>
      <Link
        href="/"
        className="inline-block bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full hover:scale-105 transition-transform"
      >
        Go Back Home
      </Link>
    </motion.main>
  )
}
