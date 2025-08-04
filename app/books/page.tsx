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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient glow">
            The Veilbound Saga
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            A fantasy series where ancient magic awakens, worlds collide, and love becomes the most dangerous spell of all.
          </p>
        </motion.div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Book 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="magic-border rounded-2xl p-8"
          >
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
                  <span>Available Now</span>
                </div>
                
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  When ancient magic awakens in her blood, Lyra must choose between the safety of ignorance and the perilous path of power. But some destinies cannot be denied, and the moonfire that marks her will either save her world—or destroy it.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/books/marked-by-moonfire"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 magic-border px-6 py-3 rounded-lg font-semibold text-foreground hover:text-primary transition-colors text-center"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Book 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="magic-border rounded-2xl p-8"
          >
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-shrink-0">
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/30 transition-colors" />
                  <Image
                    src="/images/shattered-world-cover.jpg"
                    alt="Shattered World book cover"
                    width={200}
                    height={300}
                    className="relative rounded-lg shadow-2xl mx-auto"
                  />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="text-primary font-semibold">Book Two</span>
                </div>
                
                <h2 className="text-3xl font-bold mb-4">Shattered World</h2>
                <p className="text-lg text-foreground/80 mb-4">The First Gate</p>
                
                <div className="flex items-center gap-2 mb-4 text-foreground/60">
                  <Calendar className="w-4 h-4" />
                  <span>Coming Soon</span>
                </div>
                
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  The veil between worlds grows thin, and only those marked by moonfire can stand against the coming darkness. As ancient gates begin to open, Lyra must master powers she barely understands—before everything she loves is lost forever.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/books/shattered-world"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/newsletter"
                    className="inline-flex items-center gap-2 magic-border px-6 py-3 rounded-lg font-semibold text-foreground hover:text-primary transition-colors text-center"
                  >
                    Get Notified
                  </Link>
                </div>
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