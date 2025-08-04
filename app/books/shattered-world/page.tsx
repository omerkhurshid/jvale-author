'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Star, Calendar, BookOpen, Bell } from 'lucide-react'

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
                alt="Shattered World book cover"
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
              <span className="text-primary font-semibold text-lg">The Veilbound Saga • Book Two</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient glow">
              Shattered World
            </h1>
            
            <h2 className="text-2xl text-foreground/80 mb-6">The First Gate</h2>

            <div className="flex items-center gap-6 mb-6 text-foreground/70">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Coming Soon</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span>Fantasy • Est. 400 pages</span>
              </div>
            </div>

            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              The veil between worlds grows thin, and only those marked by moonfire can stand against the coming darkness.
            </p>

            {/* Coming Soon Actions */}
            <div className="space-y-4">
              <div className="magic-border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">Release Updates</h3>
                <p className="text-foreground/70 mb-4 text-sm">
                  Be the first to know when Shattered World is available. Get exclusive previews and behind-the-scenes content.
                </p>
                <Link
                  href="/newsletter"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors w-full justify-center"
                >
                  <Bell size={16} />
                  Get Notified
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
            <h2 className="text-3xl font-bold mb-6">What's Coming</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Six months have passed since Lyra first felt the moonfire awaken within her. The silver marks that once 
                terrified her have become a source of power—and an ever-present reminder of the price magic demands. 
                But as she grows stronger, so too does the darkness that hunts her.
              </p>
              <p>
                Ancient gates, sealed for millennia, have begun to crack. Through these fractures seep creatures of 
                shadow and nightmare, beings from realms where moonfire burns cold and hope dies slowly. The barriers 
                between worlds are failing, and those with the power to mend them are scattered, broken, or lost.
              </p>
              <p>
                As Lyra and Kael search for others like them—the Veilbound, marked by moonfire and cursed with 
                impossible choices—they discover that the gates' failure is no accident. Someone, or something, 
                is orchestrating the collapse of reality itself.
              </p>
              <p>
                With time running out and allies few, Lyra must master abilities that could save or damn her world. 
                But the first gate is already opening, and what emerges from beyond will test not just her power, 
                but her very humanity.
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
                  <span>2 of 3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/60">Genre:</span>
                  <span>Fantasy</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/60">Est. Pages:</span>
                  <span>400</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/60">Status:</span>
                  <span className="text-primary">In Progress</span>
                </div>
              </div>
            </div>

            {/* First Book */}
            <div className="magic-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Start the Series</h3>
              <p className="text-foreground/70 mb-4">
                Haven't read the first book yet? Start your journey with Marked by Moonfire.
              </p>
              <Link
                href="/books/marked-by-moonfire"
                className="inline-flex items-center gap-2 bg-secondary text-foreground px-4 py-2 rounded-lg font-semibold hover:bg-secondary/80 transition-colors w-full justify-center"
              >
                <BookOpen size={16} />
                Read Book One
              </Link>
            </div>

            {/* Progress Updates */}
            <div className="magic-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Writing Progress</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/60">First Draft:</span>
                  <span className="text-primary">75%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <p className="text-xs text-foreground/60">
                  Updates posted monthly in the newsletter
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}