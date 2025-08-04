'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Sparkles, Mail, BookOpen, Star, Users } from 'lucide-react'

export default function NewsletterPage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Get Substack URL from environment variables
    const substackUrl = process.env.NEXT_PUBLIC_SUBSTACK_URL
    
    if (substackUrl) {
      // Redirect to Substack signup with email pre-filled
      const substackSignupUrl = `${substackUrl}/subscribe?email=${encodeURIComponent(email)}`
      window.open(substackSignupUrl, '_blank')
    } else {
      // Fallback: show success message and instructions
      console.log('Newsletter signup:', email)
    }
    
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Sparkles className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient glow">
            Join the Inner Circle
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Get exclusive access to The Veilbound Saga universe, including early chapters, behind the scenes content, and special announcements.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          <div className="magic-border rounded-xl p-6">
            <BookOpen className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">Exclusive Content</h3>
            <p className="text-foreground/70">
              Get early access to chapters, deleted scenes, and character backstories that aren't available anywhere else.
            </p>
          </div>

          <div className="magic-border rounded-xl p-6">
            <Star className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">First to Know</h3>
            <p className="text-foreground/70">
              Be the first to hear about new book releases, cover reveals, and special events before anyone else.
            </p>
          </div>

          <div className="magic-border rounded-xl p-6">
            <Users className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">Reader Community</h3>
            <p className="text-foreground/70">
              Connect with other fans of The Veilbound Saga and participate in exclusive discussions and Q&As.
            </p>
          </div>

          <div className="magic-border rounded-xl p-6">
            <Mail className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">Behind the Scenes</h3>
            <p className="text-foreground/70">
              Get insights into the writing process, world building notes, and the inspiration behind your favorite characters.
            </p>
          </div>
        </motion.div>

        {/* Signup Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="magic-border rounded-2xl p-8 text-center"
        >
          {!isSubmitted ? (
            <>
              <h2 className="text-3xl font-bold mb-6">Ready to Enter the Veil?</h2>
              <p className="text-foreground/70 mb-8">
                Join thousands of readers who are already part of the inner circle. No spam, just magic.
              </p>
              
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 rounded-lg bg-secondary border border-border/50 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    <Sparkles size={16} />
                    Subscribe
                  </button>
                </div>
              </form>
              
              <p className="text-xs text-foreground/50 mt-4">
                By subscribing, you agree to receive occasional emails from J. Vale. Unsubscribe at any time.
              </p>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-primary">Welcome to the Inner Circle!</h2>
              <p className="text-foreground/70">
                Thank you for subscribing! You'll receive a welcome email soon with exclusive content and updates about The Veilbound Saga.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    setIsSubmitted(false)
                    setEmail('')
                  }}
                  className="magic-border px-6 py-3 rounded-lg font-semibold text-foreground hover:text-primary transition-colors"
                >
                  Subscribe Another Email
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Recent Updates Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Recent Newsletter Updates</h2>
          <div className="space-y-6">
            <div className="magic-border rounded-xl p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold">Writing Progress Update</h3>
                <span className="text-sm text-foreground/60">2 weeks ago</span>
              </div>
              <p className="text-foreground/70">
                Exciting progress on Shattered World! I've just finished a pivotal scene between Lyra and Kael that I think readers will love. Plus, exclusive character art reveals...
              </p>
            </div>

            <div className="magic-border rounded-xl p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold">Deleted Scene: The Moonfire Ritual</h3>
                <span className="text-sm text-foreground/60">1 month ago</span>
              </div>
              <p className="text-foreground/70">
                A scene that didn't make it into Marked by Moonfire but reveals important backstory about the origin of moonfire magic. Available exclusively to newsletter subscribers...
              </p>
            </div>

            <div className="magic-border rounded-xl p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold">Cover Reveal: Shattered World</h3>
                <span className="text-sm text-foreground/60">2 months ago</span>
              </div>
              <p className="text-foreground/70">
                The first look at the cover for book two! Plus insights into the symbolism and artistic choices that went into its creation...
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}