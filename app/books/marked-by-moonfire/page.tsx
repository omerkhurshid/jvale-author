'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Star } from 'lucide-react'

export default function MarkedByMoonfirePage() {

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


            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              When Asha awakens in a mysterious forest with no memory of her past, she bears only one clue to her identity—a glowing silver mark that pulses with ancient magic.
            </p>

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
                When Asha awakens in a mysterious forest with no memory of her past, she bears only one clue to her identity—a glowing silver mark beneath her collarbone that pulses with ancient magic. As she struggles to piece together fragments of her forgotten life, she discovers she's been chosen by forces beyond her understanding.
              </p>
              <p>
                Enter Kael, a battle hardened General of the Nightshade Court, who recognizes Asha's mark for what it truly is: an Eldermark, binding her to a prophecy that could either heal the fractured realms or destroy them entirely. As their fates become intertwined through an unbreakable soul bond, Asha must navigate dangerous court politics, mysterious powers awakening within her, and a growing connection to Kael that defies explanation.
              </p>
              <p>
                But the mark has awakened more than just magic—it has drawn the attention of those who would use Asha's power for their own ends. With enemies closing in and the Veil between worlds growing unstable, Asha faces an impossible choice: embrace her destiny as the Guardian the realms need, or fight to remain the woman she chooses to be.
              </p>
              <p>
                A sweeping fantasy romance that weaves together magic, destiny, and the power of choosing love over fate.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">

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