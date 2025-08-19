'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Star, ShoppingCart, Flame, Moon } from 'lucide-react'

export default function MarkedByMoonfirePage() {
  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-slate-900 via-red-950 to-orange-950 relative overflow-hidden">
      {/* Magical Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Floating Fire Embers */}
        <div className="fire-ember" style={{bottom: '10%', left: '10%'}}></div>
        <div className="fire-ember" style={{bottom: '20%', right: '20%'}}></div>
        <div className="fire-ember" style={{bottom: '15%', left: '50%'}}></div>
        <div className="fire-ember" style={{bottom: '5%', right: '10%'}}></div>
        <div className="fire-ember" style={{bottom: '25%', left: '30%'}}></div>
        
        {/* Moonfire Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/books"
            className="inline-flex items-center gap-2 text-red-200/80 hover:text-red-300 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Books
          </Link>
        </motion.div>

        {/* Book Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Book Cover */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-red-500/40 blur-3xl group-hover:bg-red-400/50 transition-colors" />
              <div className="absolute inset-0 bg-orange-500/20 blur-2xl group-hover:bg-orange-400/30 transition-colors animate-pulse" />
              <Image
                src="/images/marked-by-moonfire-cover.jpg"
                alt="Marked by Moonfire book cover"
                width={400}
                height={600}
                className="relative rounded-lg shadow-2xl border border-red-400/30"
                priority
              />
              {/* Moonfire sparkles around the book */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-8 left-4 w-1 h-1 bg-orange-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-1/2 left-0 w-1.5 h-1.5 bg-red-300 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            </div>
          </motion.div>

          {/* Book Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-2 mb-4">
              <Moon className="w-6 h-6 text-red-300" />
              <span className="text-red-300 font-semibold text-lg">The Veilbound Saga • Book One</span>
              <Flame className="w-6 h-6 text-orange-300" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 moonfire-title">
              Marked by Moonfire
            </h1>

            <p className="text-xl text-red-100/90 mb-8 leading-relaxed">
              When Asha awakens in a mysterious forest with no memory of her past, she bears only one clue to her identity: a glowing silver mark that pulses with ancient magic.
            </p>

            {/* Buy Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.amazon.co.uk/dp/B0FL7T82CN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-500 hover:to-orange-500 transition-colors shadow-lg shadow-red-600/25"
              >
                Buy on Amazon
                <ShoppingCart size={20} />
              </a>
              <span className="text-red-300 font-semibold text-lg self-center flex items-center gap-2">
                <Star className="w-5 h-5 fill-red-300" />
                Available Now
              </span>
            </div>
          </motion.div>
        </div>

        {/* Book Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-3 gap-12"
        >
          {/* Synopsis */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-slate-800/80 via-red-900/60 to-orange-900/80 backdrop-blur-xl border border-red-400/20 rounded-2xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                <Flame className="text-orange-400" size={28} />
                Synopsis
              </h2>
              <div className="space-y-4 text-red-50/90 leading-relaxed text-lg">
                <p>
                  When Asha awakens in a mysterious forest with no memory of her past, she bears only one clue to her identity: a glowing silver mark beneath her collarbone that pulses with ancient magic. As she struggles to piece together fragments of her forgotten life, she discovers she's been chosen by forces beyond her understanding.
                </p>
                <p>
                  Enter Kael, a battle hardened General of the Nightshade Court, who recognizes Asha's mark for what it truly is: an Eldermark, binding her to a prophecy that could either heal the fractured realms or destroy them entirely. As their fates become intertwined through an unbreakable soul bond, Asha must navigate dangerous court politics, mysterious powers awakening within her, and a growing connection to Kael that defies explanation.
                </p>
                <p>
                  But the mark has awakened more than just magic: it has drawn the attention of those who would use Asha's power for their own ends. With enemies closing in and the Veil between worlds growing unstable, Asha faces an impossible choice: embrace her destiny as the Guardian the realms need, or fight to remain the woman she chooses to be.
                </p>
                <p>
                  A sweeping fantasy romance that weaves together magic, destiny, and the power of choosing love over fate.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Newsletter */}
            <div className="bg-gradient-to-br from-red-700/40 to-orange-700/40 border border-red-400/30 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                <Moon className="text-red-300" size={20} />
                Stay Updated
              </h3>
              <p className="text-red-100/80 mb-4">
                Get notified about the next book in the series and exclusive content.
              </p>
              <Link
                href="/newsletter"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-red-500 transition-colors w-full justify-center"
              >
                Join Newsletter
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}