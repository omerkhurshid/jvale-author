'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Star, BookOpen, Mail, ShoppingCart, Sparkles } from 'lucide-react'
import { useState } from 'react'

export default function RivenfallAcademyPage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Get Substack URL from environment variables
    const substackUrl = process.env.NEXT_PUBLIC_SUBSTACK_URL
    
    if (substackUrl) {
      // Redirect to Substack signup with email pre-filled
      const substackSignupUrl = `${substackUrl}/subscribe?email=${encodeURIComponent(email)}&utm_source=rivenfall-arc`
      window.open(substackSignupUrl, '_blank')
    }
    
    setIsSubmitted(true)
  }
  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/books"
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
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
              <div className="absolute inset-0 bg-blue-500/40 blur-3xl group-hover:bg-blue-400/50 transition-colors" />
              <div className="absolute inset-0 bg-purple-500/20 blur-2xl group-hover:bg-purple-400/30 transition-colors animate-pulse" />
              <Image
                src="/images/rivenfall-academy-chains-cover.jpg"
                alt="The Chains That Bind book cover"
                width={400}
                height={600}
                className="relative rounded-lg shadow-2xl border border-blue-400/30"
                priority
              />
              {/* Magical sparkles around the book */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-8 left-4 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-1/2 left-0 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
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
              <Star className="w-6 h-6 text-primary" />
              <span className="text-primary font-semibold text-lg">Rivenfall Academy • Book One</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 rivenfall-title">
              The Chains That Bind
            </h1>

            {/* Book Quote */}
            <blockquote className="text-2xl italic text-blue-100/90 mb-8 border-l-4 border-blue-400 pl-6 leading-relaxed">
              "Some chains protect as much as they confine — but even the strongest can be broken."
            </blockquote>

            {/* Free ARC Copy Section */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 mb-6 shadow-xl border border-indigo-400/30">
              {!isSubmitted ? (
                <>
                  <div className="flex items-center gap-2 mb-3">
                    <Mail className="text-white" size={24} />
                    <h3 className="text-2xl font-bold text-white">Get a Free ARC Copy!</h3>
                  </div>
                  <p className="text-indigo-100 mb-4 text-lg">
                    Subscribe to receive an <strong>Advanced Reader Copy</strong> of The Chains That Bind before anyone else!
                  </p>
                  <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                      />
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-lg font-bold hover:bg-indigo-50 transition-colors shadow-lg"
                      >
                        <Sparkles size={16} />
                        Get Free ARC
                      </button>
                    </div>
                  </form>
                  <p className="text-xs text-indigo-100/70 mt-3">
                    Join the inner circle. No spam, just magic.
                  </p>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-2"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Welcome to the Inner Circle!</h3>
                  <p className="text-indigo-100 text-sm">
                    Check your email for your free ARC copy. A new tab has opened for you to complete your subscription.
                  </p>
                </motion.div>
              )}
            </div>

            {/* Amazon Purchase Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 mb-8 shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="text-yellow-300" size={24} />
                <h3 className="text-2xl font-bold text-white">Special Launch Promo!</h3>
              </div>
              <p className="text-blue-100 mb-4 text-lg">
                Get <strong>The Chains That Bind</strong> for just <span className="text-yellow-300 font-bold text-xl">$0.99</span> today!
              </p>
              <div className="flex justify-center">
                <a
                  href="https://a.co/d/85bMEWr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-colors text-lg shadow-lg"
                >
                  <ShoppingCart size={20} />
                  Buy Now for $0.99
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Reader Hooks Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Perfect For Readers Who Love...</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-800/30 rounded-lg p-6 border border-blue-400/30">
              <h3 className="text-xl font-bold text-blue-200 mb-3">🧙‍♂️ Young Adult Fantasy</h3>
              <p className="text-blue-100/80">
                Magic schools, coming-of-age journeys, and discovering hidden powers. Perfect for fans of Harry Potter and Percy Jackson.
              </p>
            </div>
            <div className="bg-purple-800/30 rounded-lg p-6 border border-purple-400/30">
              <h3 className="text-xl font-bold text-purple-200 mb-3">📚 Parent & Teen Reading</h3>
              <p className="text-purple-100/80">
                A captivating story that bridges generations. Moms and kids can share the adventure together.
              </p>
            </div>
            <div className="bg-indigo-800/30 rounded-lg p-6 border border-indigo-400/30">
              <h3 className="text-xl font-bold text-indigo-200 mb-3">⚔️ Epic Fantasy Adventures</h3>
              <p className="text-indigo-100/80">
                Rich world-building, mysterious academies, and ancient magic systems that will keep you turning pages.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Book Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-3 gap-12"
        >
          {/* Synopsis */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold mb-6 text-white">Synopsis</h2>
            <div className="space-y-4 text-blue-100/90 leading-relaxed text-lg">
              <p>
                Rowan Ashbourne never expected his life to amount to more than grinding grain in the sleepy village of Hollowmere. But when a wounded rook leads him to a glowing rune, and the Festival of Lanterns ignites with impossible light, Rowan discovers a secret that will tear him from the world he thought he knew.
              </p>
              <p>
                Summoned to Rivenfall Academy — a castle suspended above the trees by colossal silver chains — Rowan steps into a hidden world of rune-magic, spectral founders, and dangerous rivalries. But as he struggles to master his strange new powers, whispers stir in the shadows: the chains that hold the Academy are weakening… and so are the bonds that protect the realm itself.
              </p>
              <p>
                Now Rowan must choose: bind himself to the Academy's ancient laws, or risk everything to uncover the truth behind the chains that bind them all.
              </p>
              <p className="mt-6 text-blue-200">
                Perfect for fans of J.K. Rowling's Harry Potter, Leigh Bardugo's Shadow and Bone, and Naomi Novik's A Deadly Education, Rivenfall Academy: The Chains That Bind launches an unforgettable new fantasy series full of wonder, danger, and destiny.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Read First Chapter */}
            <div className="bg-gradient-to-br from-purple-700/40 to-blue-700/40 border border-purple-400/30 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-white">📖 Read the First Chapter</h3>
              <p className="text-purple-100/80 mb-4">
                Dive into Rowan's world and experience the magic of Rivenfall Academy from the very first page.
              </p>
              <Link
                href="/books/rivenfall-academy/sample"
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-purple-500 transition-colors w-full justify-center"
              >
                <BookOpen size={16} />
                Read Sample Pages
              </Link>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-blue-700/40 to-indigo-700/40 border border-blue-400/30 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-white">📬 Stay Updated</h3>
              <p className="text-blue-100/80 mb-4">
                Join thousands of readers getting exclusive content, early access, and news about the Rivenfall Academy series.
              </p>
              <Link
                href="/newsletter"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors w-full justify-center"
              >
                <Mail size={16} />
                Join Newsletter
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}