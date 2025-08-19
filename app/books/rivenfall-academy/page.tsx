'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Star, BookOpen, Mail } from 'lucide-react'

export default function RivenfallAcademyPage() {
  return (
    <div className="min-h-screen py-20 px-4">
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
              <div className="absolute inset-0 bg-primary/30 blur-2xl group-hover:bg-primary/40 transition-colors" />
              <Image
                src="/images/rivenfall-academy-chains-cover.jpg"
                alt="The Chains That Bind book cover"
                width={400}
                height={600}
                className="relative rounded-lg shadow-2xl"
                priority
              />
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

            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient glow">
              The Chains That Bind
            </h1>


            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              A school that floats above the forest. Chains that hold more than stone. A boy whose gift may unbind them all.
            </p>

            {/* Coming Soon Actions */}
            <div className="space-y-4">
              <div className="magic-border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">Coming Soon</h3>
                <p className="text-foreground/70 mb-4 text-sm">
                  Be among the first to enter the halls of Rivenfall Academy. Sign up to be an early reader and receive an Advanced Reader Copy (ARC).
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors w-full justify-center"
                >
                  <Mail size={16} />
                  Request ARC Access
                </Link>
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
            <h2 className="text-3xl font-bold mb-6">Synopsis</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Rowan Ashbourne never expected his life to amount to more than grinding grain in the sleepy village of Hollowmere. But when a wounded rook leads him to a glowing rune, and the Festival of Lanterns ignites with impossible light, Rowan discovers a secret that will tear him from the world he thought he knew.
              </p>
              <p>
                Summoned to Rivenfall Academy — a castle suspended above the trees by colossal silver chains — Rowan steps into a hidden world of rune-magic, spectral founders, and dangerous rivalries. But as he struggles to master his strange new powers, whispers stir in the shadows: the chains that hold the Academy are weakening… and so are the bonds that protect the realm itself.
              </p>
              <p>
                Now Rowan must choose: bind himself to the Academy's ancient laws, or risk everything to uncover the truth behind the chains that bind them all.
              </p>
              <p className="italic mt-6">
                "Some chains protect as much as they confine — but even the strongest can be broken."
              </p>
              <p className="mt-6">
                Perfect for fans of J.K. Rowling's Harry Potter, Leigh Bardugo's Shadow and Bone, and Naomi Novik's A Deadly Education, Rivenfall Academy: The Chains That Bind launches an unforgettable new fantasy series full of wonder, danger, and destiny.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Early Access */}
            <div className="magic-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Get Early Access</h3>
              <p className="text-foreground/70 mb-4">
                Join our ARC team and be one of the first to read The Chains That Bind.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-secondary text-foreground px-4 py-2 rounded-lg font-semibold hover:bg-secondary/80 transition-colors w-full justify-center"
              >
                <BookOpen size={16} />
                Apply for ARC
              </Link>
            </div>

            {/* Newsletter */}
            <div className="magic-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="text-foreground/70 mb-4">
                Get notified when The Chains That Bind releases and receive exclusive content.
              </p>
              <Link
                href="/newsletter"
                className="inline-flex items-center gap-2 bg-secondary text-foreground px-4 py-2 rounded-lg font-semibold hover:bg-secondary/80 transition-colors w-full justify-center"
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