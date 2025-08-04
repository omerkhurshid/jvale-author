'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Star } from 'lucide-react'

export default function BooksPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="hero-title mb-6 text-gradient glow">
            Fantasy Series
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Two distinct worlds of magic and adventure, each with their own mysteries to uncover.
          </p>
        </motion.div>

        {/* Books Grid */}
        <div className="space-y-16">
          {/* Book 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="elegant-card rounded-3xl p-10"
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-3 text-gradient">The Veilbound Saga</h2>
              <p className="text-foreground/60 text-lg">Where magic demands sacrifice</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-shrink-0">
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/30 transition-colors" />
                  <Image
                    src="/images/marked-by-moonfire-cover.jpg"
                    alt="Marked by Moonfire book cover"
                    width={200}
                    height={300}
                    className="relative rounded-lg shadow-2xl mx-auto"
                    priority
                  />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="text-primary font-semibold">Book One</span>
                </div>
                
                <h2 className="text-3xl font-bold mb-4">Marked by Moonfire</h2>
                
                <div className="flex items-center gap-2 mb-4 text-foreground/60">
                  <Calendar className="w-4 h-4" />
                  <span>Coming Soon</span>
                </div>
                
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  When Asha awakens in a mysterious forest with no memory of her past, she bears only one clue to her identity—a glowing silver mark beneath her collarbone that pulses with ancient magic. As she struggles to piece together fragments of her forgotten life, she discovers she's been chosen by forces beyond her understanding.
                </p>
                
                <Link
                  href="/books/marked-by-moonfire"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Book 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="elegant-card rounded-3xl p-10"
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-3 text-gradient">Shattered World</h2>
              <p className="text-foreground/60 text-lg">Where reality fractures</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-shrink-0">
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/30 transition-colors" />
                  <Image
                    src="/images/shattered-world-cover.jpg"
                    alt="The First Gate book cover"
                    width={200}
                    height={300}
                    className="relative rounded-lg shadow-2xl mx-auto"
                  />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="text-primary font-semibold">Book One</span>
                </div>
                
                <h2 className="text-3xl font-bold mb-4">The First Gate</h2>
                
                <div className="flex items-center gap-2 mb-4 text-foreground/60">
                  <Calendar className="w-4 h-4" />
                  <span>Coming Soon</span>
                </div>
                
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Seventeen year old Kira has always known the sky whispers warnings to those who listen. When a mysterious storm appears above her village and her father vanishes without a trace, she discovers an ancient scroll bearing a cryptic message: "Find the gate."
                </p>
                
                <Link
                  href="/books/shattered-world"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Series Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">About The Veilbound Saga</h2>
          <p className="text-foreground/70 max-w-4xl mx-auto leading-relaxed">
            In a world where magic comes at a price and ancient powers stir beneath the surface, 
            The Veilbound Saga follows those who bear the mark of moonfire—a blessing and a curse 
            that binds them to forces beyond mortal understanding. As the barriers between realms 
            weaken, these marked individuals must choose between their humanity and the power needed 
            to save everything they hold dear.
          </p>
        </motion.div>
      </div>
    </div>
  )
}