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
            <h1 className="hero-title mb-6">
              <span className="text-gradient glow">Two Epic</span>
              <br />
              <span className="text-foreground/80 hero-subtitle">Fantasy Series</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto">
              Enter two distinct worlds of magic, mystery, and adventure
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
            className="section-title text-center mb-16 text-gradient glow"
          >
            Featured Series
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Book 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="elegant-card rounded-3xl p-8 mb-12"
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-2 text-gradient">The Veilbound Saga</h3>
                <p className="text-foreground/60">A world where magic demands sacrifice</p>
              </div>
              
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="book-cover-glow">
                  <Image
                    src="/images/marked-by-moonfire-cover.jpg"
                    alt="Marked by Moonfire book cover"
                    width={280}
                    height={420}
                    className="rounded-xl shadow-2xl"
                    priority
                  />
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <h4 className="text-2xl font-bold mb-3">Marked by Moonfire</h4>
                  <p className="text-primary font-semibold mb-4">Book One • Available Now</p>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    When Asha awakens in a mysterious forest with no memory of her past, she bears only one clue to her identity—a glowing silver mark that pulses with ancient magic. Chosen by forces beyond her understanding and bound by prophecy, she faces an impossible choice: embrace her destiny as the Guardian the realms need, or fight to remain the woman she chooses to be.
                  </p>
                  <Link
                    href="/books/marked-by-moonfire"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Book 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="elegant-card rounded-3xl p-8"
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-2 text-gradient">Shattered World</h3>
                <p className="text-foreground/60">A realm where reality fractures</p>
              </div>
              
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="book-cover-glow">
                  <Image
                    src="/images/shattered-world-cover.jpg"
                    alt="Shattered World: The First Gate book cover"
                    width={280}
                    height={420}
                    className="rounded-xl shadow-2xl"
                  />
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <h4 className="text-2xl font-bold mb-3">The First Gate</h4>
                  <p className="text-primary font-semibold mb-4">Book One • Coming Soon</p>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    When seventeen year old Kira's father vanishes and a mysterious storm appears above her village, she discovers an ancient scroll with a cryptic message: "Find the gate." As the last of the bridgewalkers, she must decide whether to restore the bridges between worlds or let the realms remain forever divided.
                  </p>
                  <Link
                    href="/books/shattered-world"
                    className="inline-flex items-center gap-2 magic-border px-6 py-3 rounded-lg font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </div>
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