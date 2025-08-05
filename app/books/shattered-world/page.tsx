'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Star, BookOpen, ShoppingCart } from 'lucide-react'

export default function ShatteredWorldPage() {
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
                src="/images/shattered-world-cover.jpg"
                alt="The First Gate book cover"
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
              <span className="text-primary font-semibold text-lg">Shattered World • Book One</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient glow">
              The First Gate
            </h1>


            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              When a mysterious storm appears above her village and her father vanishes without a trace, Kira discovers an ancient scroll bearing a cryptic message: "Find the gate."
            </p>

            {/* Buy Now Actions */}
            <div className="space-y-4">
              <div className="magic-border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">Available Now</h3>
                <p className="text-foreground/70 mb-4 text-sm">
                  The First Gate is now available! Begin your journey through the shattered realms.
                </p>
                <a
                  href="https://www.amazon.co.uk/dp/B0FL5N4MVK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors w-full justify-center"
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
            <h2 className="text-3xl font-bold mb-6">Synopsis</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
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

          {/* Sidebar */}
          <div className="space-y-8">

            {/* Other Series */}
            <div className="magic-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Explore Other Series</h3>
              <p className="text-foreground/70 mb-4">
                Discover another epic fantasy adventure in The Veilbound Saga.
              </p>
              <Link
                href="/books/marked-by-moonfire"
                className="inline-flex items-center gap-2 bg-secondary text-foreground px-4 py-2 rounded-lg font-semibold hover:bg-secondary/80 transition-colors w-full justify-center"
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