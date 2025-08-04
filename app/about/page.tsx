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
          <h1 className="hero-title mb-6 text-gradient glow">
            About J. Vale
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            A storyteller crafting epic fantasy worlds from real-world adventures and digital realms.
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
                  <span className="text-foreground/80">Global nomad, currently settled</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span className="text-foreground/80">Two fantasy series</span>
                </div>
                <div className="flex items-center gap-3">
                  <Coffee className="w-5 h-5 text-primary" />
                  <span className="text-foreground/80">Cat dad, beach lover</span>
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
                Born in Asia and raised across continents, J. Vale's childhood was spent moving between cultures, 
                languages, and landscapes—from bustling Asian metropolises to quiet European villages, and eventually 
                to the diverse cities of America.
              </p>
              
              <p>
                This nomadic upbringing sparked an early love for storytelling and world-building. As a child, Vale 
                found solace in fantasy novels and video games, spending countless hours exploring digital realms and 
                imagining new worlds. Epic fantasy series and RPGs became his companions through frequent relocations, 
                teaching him that home could be found in the stories we tell.
              </p>
              
              <p>
                After years of traveling and working across different industries in Europe, Asia, and the US, Vale 
                finally settled down and turned his lifelong passion for storytelling into a writing career. His 
                international background and love for world-building naturally led him to fantasy literature, where 
                he could create the kind of immersive worlds he'd always dreamed of exploring.
              </p>
              
              <p>
                When not writing, Vale can be found reading the latest fantasy releases, diving into a new video game, 
                relaxing at the beach, swimming, or spending time with his four beloved companions—two cats and two dogs 
                who frequently interrupt his writing sessions and provide endless inspiration (and distraction).
              </p>
              
              <p>
                His debut novel, "Marked by Moonfire," launches The Veilbound Saga, while "The First Gate" begins 
                the separate Shattered World series—two distinct fantasy universes born from a lifetime of wandering 
                and wondering "what if?"
              </p>
            </div>

            {/* Author's Note */}
            <div className="elegant-card rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-gradient">A Note from the Author</h2>
              <blockquote className="text-foreground/80 italic leading-relaxed">
                "Growing up between worlds—both literally and in the pages of books and games—taught me that the best 
                stories come from asking 'what if?' Whether it's exploring a new country or a new fantasy realm, 
                I've always been drawn to places where anything is possible. That's the magic I try to bring to my writing."
              </blockquote>
              <p className="text-sm text-foreground/60 mt-4">— J. Vale</p>
            </div>

            {/* Fun Facts */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="elegant-card rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">Writing Habits</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Writes with cats competing for keyboard space</li>
                  <li>• Always has a cup of coffee within reach</li>
                  <li>• Keeps a notebook for random story ideas</li>
                  <li>• Takes beach walks to work through plot problems</li>
                </ul>
              </div>
              
              <div className="elegant-card rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">Inspirations</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Epic fantasy novels and immersive RPGs</li>
                  <li>• Cultural mythology from around the world</li>
                  <li>• The beauty of different landscapes he's lived in</li>
                  <li>• Fellow travelers and storytellers</li>
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