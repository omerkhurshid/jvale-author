'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Star, BookOpen, ShoppingCart, Zap, Shield } from 'lucide-react'

export default function ShatteredWorldPage() {
  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-slate-900 via-gray-800 to-zinc-900 relative overflow-hidden">
      {/* Magical Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Falling Shards */}
        <div className="shard-fragment" style={{top: '0%', left: '10%'}}></div>
        <div className="shard-fragment" style={{top: '0%', right: '20%'}}></div>
        <div className="shard-fragment" style={{top: '0%', left: '50%'}}></div>
        <div className="shard-fragment" style={{top: '0%', right: '40%'}}></div>
        <div className="shard-fragment" style={{top: '0%', left: '70%'}}></div>
        <div className="shard-fragment" style={{top: '0%', right: '5%'}}></div>
        
        {/* Shattered World Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-zinc-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gray-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Cracks Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1200 800">
          <path d="M0,400 L300,350 L600,450 L900,300 L1200,400" stroke="#9ca3af" strokeWidth="2" fill="none"/>
          <path d="M600,0 L550,200 L650,400 L600,600 L550,800" stroke="#9ca3af" strokeWidth="2" fill="none"/>
          <path d="M200,0 L250,300 L150,600 L200,800" stroke="#9ca3af" strokeWidth="1" fill="none"/>
          <path d="M1000,0 L950,300 L1050,600 L1000,800" stroke="#9ca3af" strokeWidth="1" fill="none"/>
        </svg>
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
            className="inline-flex items-center gap-2 text-gray-300/80 hover:text-gray-100 transition-colors"
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
              <div className="absolute inset-0 bg-gray-500/40 blur-3xl group-hover:bg-gray-400/50 transition-colors" />
              <div className="absolute inset-0 bg-zinc-500/20 blur-2xl group-hover:bg-zinc-400/30 transition-colors animate-pulse" />
              <Image
                src="/images/shattered-world-cover.jpg"
                alt="The First Gate book cover"
                width={400}
                height={600}
                className="relative rounded-lg shadow-2xl border border-gray-500/30"
                priority
              />
              {/* Shattered effect sparkles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-gray-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-8 left-4 w-1 h-1 bg-zinc-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-1/2 right-0 w-1.5 h-1.5 bg-gray-300 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
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
              <Zap className="w-6 h-6 text-gray-300" />
              <span className="text-gray-300 font-semibold text-lg">Shattered World • Book One</span>
              <Shield className="w-6 h-6 text-zinc-300" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 shattered-title">
              The First Gate
            </h1>


            <p className="text-xl text-gray-200/90 mb-8 leading-relaxed">
              When a mysterious storm appears above her village and her father vanishes without a trace, Kira discovers an ancient scroll bearing a cryptic message: "Find the gate."
            </p>

            {/* Buy Now Actions */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-gray-700/40 to-zinc-700/40 border border-gray-400/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2 text-white flex items-center gap-2">
                  <Star className="w-5 h-5 fill-gray-300 text-gray-300" />
                  Available Now
                </h3>
                <p className="text-gray-200/80 mb-4 text-sm">
                  The First Gate is now available! Begin your journey through the shattered realms.
                </p>
                <a
                  href="https://www.amazon.co.uk/dp/B0FL5N4MVK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-600 to-zinc-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-gray-500 hover:to-zinc-500 transition-colors w-full justify-center shadow-lg shadow-gray-600/25"
                >
                  <ShoppingCart size={16} />
                  Buy on Amazon
                </a>
              </div>
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
            <div className="bg-gradient-to-br from-slate-800/80 via-gray-800/60 to-zinc-800/80 backdrop-blur-xl border border-gray-500/20 rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          {/* Synopsis */}
          <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                <Zap className="text-gray-400" size={28} />
                Synopsis
              </h2>
              <div className="space-y-4 text-gray-100/90 leading-relaxed text-lg">
              <p>
                Seventeen year old Kira has always known the sky whispers warnings to those who listen. When a mysterious storm appears above her village and her father vanishes without a trace, she discovers an ancient scroll bearing a cryptic message: "Find the gate."
              </p>
              <p>
                The scroll awakens something long dormant within Kira: the ability to walk between realms through magical gates that have been sealed since the Sundering, a catastrophic event that fractured the world centuries ago. Accompanied by Lorn, a Guild archivist with his own hidden knowledge, Kira steps through her first gate into lands forgotten by history.
              </p>
              <p>
                As they journey through shattered realms and encounter the remnants of a lost civilization, Kira learns she may be the last of the bridgewalkers: legendary figures who once connected the worlds before fear and politics tore them apart. But awakening the gates has consequences, and malevolent forces hunt her across the fractured realms.
              </p>
              <p>
                With each gate she opens, Kira uncovers more about the truth behind the Sundering and her own mysterious heritage. Now she must decide whether to restore the bridges between worlds, risking the dangers that originally caused their destruction, or let the realms remain forever divided.
              </p>
              <p>
                An epic fantasy adventure about courage, discovery, and the power of connection in a broken world.
              </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">

            {/* Other Series */}
            <div className="bg-gradient-to-br from-gray-700/40 to-zinc-700/40 border border-gray-400/30 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                <BookOpen className="text-gray-300" size={20} />
                Explore Other Series
              </h3>
              <p className="text-gray-200/80 mb-4">
                Discover another epic fantasy adventure in The Veilbound Saga.
              </p>
              <Link
                href="/books/marked-by-moonfire"
                className="inline-flex items-center gap-2 bg-gray-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-gray-500 transition-colors w-full justify-center"
              >
                <BookOpen size={16} />
                The Veilbound Saga
              </Link>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  )
}