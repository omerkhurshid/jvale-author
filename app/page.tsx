'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient glow">Tales of Moonfire</span>
              <br />
              <span className="text-foreground/80">and Shattered Realms</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto">
              Where magic costs more than gold, and love might be the most dangerous spell of all
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/books"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Explore the Books
                <ArrowRight size={20} />
              </Link>
              
              <Link
                href="/newsletter"
                className="inline-flex items-center gap-2 magic-border px-8 py-4 rounded-lg font-semibold text-foreground hover:text-primary transition-colors"
              >
                <Sparkles size={20} />
                Get Early Access
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient glow"
          >
            The Veilbound Saga
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Book 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row gap-6 items-center"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/30 transition-colors" />
                <Image
                  src="/images/marked-by-moonfire-cover.jpg"
                  alt="Marked by Moonfire book cover"
                  width={256}
                  height={384}
                  className="relative rounded-lg shadow-2xl"
                  priority
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Marked by Moonfire</h3>
                <p className="text-foreground/70 mb-4">
                  Book One of The Veilbound Saga
                </p>
                <p className="text-foreground/60 mb-6">
                  When ancient magic awakens in her blood, Lyra must choose between 
                  the safety of ignorance and the perilous path of power.
                </p>
                <Link
                  href="/books/marked-by-moonfire"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* Book 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row gap-6 items-center"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/30 transition-colors" />
                <Image
                  src="/images/shattered-world-cover.jpg"
                  alt="Shattered World book cover"
                  width={256}
                  height={384}
                  className="relative rounded-lg shadow-2xl"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Shattered World</h3>
                <p className="text-foreground/70 mb-4">
                  The First Gate
                </p>
                <p className="text-foreground/60 mb-6">
                  The veil between worlds grows thin, and only those marked by 
                  moonfire can stand against the coming darkness.
                </p>
                <Link
                  href="/books/shattered-world"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  Coming Soon
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center magic-border rounded-2xl p-12"
        >
          <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Join the Inner Circle</h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Get exclusive first chapters, behind-the-scenes content, and be the first 
            to know about new releases and special events.
          </p>
          <Link
            href="/newsletter"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Subscribe to the Newsletter
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}