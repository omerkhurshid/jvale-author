'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Star, Calendar, BookOpen, ShoppingCart } from 'lucide-react'

export default function MarkedByMoonfirePage() {
  const buyLinks = [
    { name: 'Amazon', url: '#', primary: true },
    { name: 'Barnes & Noble', url: '#' },
    { name: 'Apple Books', url: '#' },
    { name: 'Kobo', url: '#' },
  ]

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
                src="/images/marked-by-moonfire-cover.jpg"
                alt="Marked by Moonfire book cover"
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
              <span className="text-primary font-semibold text-lg">The Veilbound Saga • Book One</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient glow">
              Marked by Moonfire
            </h1>

            <div className="flex items-center gap-6 mb-6 text-foreground/70">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Available Now</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span>Fantasy • 350 pages</span>
              </div>
            </div>

            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              When ancient magic awakens in her blood, Lyra must choose between the safety of ignorance and the perilous path of power.
            </p>

            {/* Buy Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Available At:</h3>
              <div className="grid grid-cols-2 gap-3">
                {buyLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                      link.primary
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'magic-border text-foreground hover:text-primary'
                    }`}
                  >
                    <ShoppingCart size={16} />
                    {link.name}
                  </a>
                ))}
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
                In the realm of Aethermoor, magic is not a gift—it's a debt. Every spell cast, every enchantment woven, 
                demands payment in pain, memory, or years of life. For centuries, this balance has kept the world stable, 
                with only the desperate or the foolish daring to wield such power.
              </p>
              <p>
                Lyra Nightwhisper has spent her life avoiding magic, content to work as a simple herbalist in the 
                mountain village of Thornvale. But when strange marks begin appearing on her skin—silver lines that 
                pulse with otherworldly light—she discovers that some destinies cannot be denied.
              </p>
              <p>
                The marks are moonfire, an ancient magic thought lost to legend. As the signs spread across her body, 
                Lyra finds herself at the center of a conflict that threatens to tear apart the very fabric of reality. 
                Dark forces stir in the shadows, seeking to claim her power for their own, while those she trusted 
                most begin to see her as a threat.
              </p>
              <p>
                With the help of Kael, a mysterious warrior with secrets of his own, Lyra must learn to control the 
                moonfire before it consumes her—or before those who hunt her succeed in their deadly quest. But in a 
                world where magic demands sacrifice, she must decide: what price is she willing to pay to save 
                everything she loves?
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Details */}
            <div className="magic-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Book Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-foreground/60">Series:</span>
                  <span>The Veilbound Saga</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/60">Book:</span>
                  <span>1 of 3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/60">Genre:</span>
                  <span>Fantasy</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/60">Pages:</span>
                  <span>350</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/60">ISBN:</span>
                  <span>978-0-123456-78-9</span>
                </div>
              </div>
            </div>

            {/* Preview */}
            <div className="magic-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Free Preview</h3>
              <p className="text-foreground/70 mb-4">
                Read the first chapter and discover the world of moonfire magic.
              </p>
              <Link
                href="/preview/marked-by-moonfire"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors w-full justify-center"
              >
                <BookOpen size={16} />
                Read Preview
              </Link>
            </div>

            {/* Newsletter */}
            <div className="magic-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="text-foreground/70 mb-4">
                Get notified about the next book in the series and exclusive content.
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