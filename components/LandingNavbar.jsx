"use client"

import { Sparkles } from 'lucide-react'
import React from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

const LandingNavbar = () => {
  const { data: session, status } = useSession()
  const isAuthenticated = !!session

  return (
    <header className="bg-gray-950 border-b border-gray-800 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo / Branding */}
        <div className="flex items-center space-x-2 text-orange-500 font-semibold text-xl">
          <Sparkles className="h-5 w-5" />
          <span>FeedbackFlow</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-300">
          <Link href="#" className="hover:text-white transition">Features</Link>
          <Link href="#" className="hover:text-white transition">Pricing</Link>
          <Link href="#" className="hover:text-white transition">About</Link>
          <Link href="#" className="hover:text-white transition">Contact</Link>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <Link
              href="/dashboard"
              className="bg-orange-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow hover:bg-orange-400 transition-all hover:scale-102"
            >
              Go to Dashboard
            </Link>
          ) : (
            <>
              <Link href="/login" className="text-sm text-gray-300 hover:text-white transition">Log in</Link>
              <Link
                href="/signup"
                className="bg-orange-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow hover:bg-orange-400 transition-all hover:scale-105"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default LandingNavbar
