'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { BookOpen, Mail, MapPin, Coffee } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient glow">
            About J. Vale
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Weaver of tales where magic costs more than gold and love might be the most dangerous spell of all.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Author Photo & Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24">
              {/* Author Photo */}
              <div className="relative group mb-8">
                <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/30 transition-colors rounded-2xl" />
                <Image
                  src="/images/author-photo.jpg"
                  alt="J. Vale author photo"
                  width={400}
                  height={400}
                  className="relative rounded-2xl shadow-2xl w-full"
                  priority
                />
              </div>

              {/* Quick Info */}
              <div className="magic-border rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-foreground/80">Somewhere between worlds</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span className="text-foreground/80">The Veilbound Saga</span>
                </div>
                <div className="flex items-center gap-3">
                  <Coffee className="w-5 h-5 text-primary" />
                  <span className="text-foreground/80">Fueled by tea and starlight</span>
                </div>
              </div>

              {/* Contact */}
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors w-full justify-center"
                >
                  <Mail size={16} />
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Main Bio */}
            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p className="text-lg">
                Born beneath the shadow of ancient mountains where mist clings to forgotten ruins, J. Vale spent their 
                formative years wandering through libraries older than memory and streets that whisper of untold stories.
              </p>
              
              <p>
                Growing up in a place where reality blurs at the edges—where morning fog might reveal glimpses of other 
                worlds and midnight bells echo with meanings beyond sound—shaped their unique voice in fantasy literature. 
                The peculiar nature of their hometown, with its ever-shifting architecture and residents who speak in 
                riddles, instilled in Vale a deep fascination with the spaces between worlds.
              </p>
              
              <p>
                Local legends speak of doors that open only on certain nights and books that write themselves in the old 
                quarter's dusty shops—experiences that would later breathe life into the pages of The Veilbound Saga. 
                When not crafting tales of moonfire and shattered realms, Vale can be found collecting antique keys that 
                open no known locks, studying star charts from civilizations that may never have existed, and conversing 
                with cats who seem to know far more than they should.
              </p>
              
              <p>
                Vale's debut novel, "Marked by Moonfire," introduces readers to a world where magic costs more than gold 
                and love might be the most dangerous spell of all. The upcoming "Shattered World: The First Gate" promises 
                to unlock mysteries that some believe are better left sealed.
              </p>
            </div>

            {/* Author's Note */}
            <div className="magic-border rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-gradient">A Note from the Author</h2>
              <blockquote className="text-foreground/80 italic leading-relaxed">
                "I write for those who've felt the pull of another world just beyond the edge of sight, for the dreamers 
                who know that some doors, once opened, can never be closed again. My stories come from the twilight 
                places—neither fully here nor there—where the impossible becomes inevitable."
              </blockquote>
              <p className="text-sm text-foreground/60 mt-4">— J. Vale</p>
            </div>

            {/* Fun Facts */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="magic-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">Writing Habits</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Writes exclusively by candlelight after midnight</li>
                  <li>• Has a collection of 47 different tea blends</li>
                  <li>• Keeps a dream journal by the bedside</li>
                  <li>• Never writes without wearing a particular silver ring</li>
                </ul>
              </div>
              
              <div className="magic-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">Inspirations</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Ancient mythology and folklore</li>
                  <li>• Abandoned places and forgotten stories</li>
                  <li>• The liminal spaces between day and night</li>
                  <li>• Readers who believe in magic</li>
                </ul>
              </div>
            </div>

            {/* Current Projects */}
            <div className="magic-border rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Currently Working On</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Shattered World: The First Gate</span>
                  <span className="text-primary">In Progress</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <p className="text-foreground/70 text-sm">
                  The second book in The Veilbound Saga is currently 75% complete. Expected release: 2024
                </p>
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="magic-border rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
              <p className="text-foreground/70 mb-6">
                Get exclusive updates, behind-the-scenes content, and early access to new chapters.
              </p>
              <Link
                href="/newsletter"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Join the Inner Circle
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}