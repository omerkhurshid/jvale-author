'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, MessageCircle, BookOpen, Users, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with contact form service
    console.log('Contact form:', formData)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient glow">
            Get in Touch
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Have a question about The Veilbound Saga? Want to chat about fantasy literature? I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <div className="magic-border rounded-xl p-6 text-center">
            <BookOpen className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-bold mb-2">Book Questions</h3>
            <p className="text-sm text-foreground/70">
              Questions about characters, plot, or the world of Aethermoor
            </p>
          </div>

          <div className="magic-border rounded-xl p-6 text-center">
            <Users className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-bold mb-2">Media Inquiries</h3>
            <p className="text-sm text-foreground/70">
              Interviews, reviews, or collaboration opportunities
            </p>
          </div>

          <div className="magic-border rounded-xl p-6 text-center">
            <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-bold mb-2">General Chat</h3>
            <p className="text-sm text-foreground/70">
              Just want to say hello or share your thoughts
            </p>
          </div>

          <div className="magic-border rounded-xl p-6 text-center">
            <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-bold mb-2">Business</h3>
            <p className="text-sm text-foreground/70">
              Publishing, rights, or other business matters
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="magic-border rounded-2xl p-8"
        >
          {!isSubmitted ? (
            <>
              <h2 className="text-3xl font-bold mb-6 text-center">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border/50 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border/50 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="book-question">Book Question</option>
                    <option value="media-inquiry">Media Inquiry</option>
                    <option value="general">General Message</option>
                    <option value="business">Business Inquiry</option>
                    <option value="fan-mail">Fan Mail</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border/50 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-6"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Send className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-primary">Message Sent!</h2>
              <p className="text-foreground/70">
                Thank you for reaching out! I'll get back to you as soon as possible, usually within 24-48 hours.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({ name: '', email: '', subject: '', message: '' })
                }}
                className="magic-border px-6 py-3 rounded-lg font-semibold text-foreground hover:text-primary transition-colors"
              >
                Send Another Message
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <div className="magic-border rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Response Time</h3>
            <p className="text-foreground/70 mb-4">
              I typically respond to messages within 24-48 hours. For urgent business inquiries, 
              please mention "URGENT" in your subject line.
            </p>
          </div>

          <div className="magic-border rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Fan Mail</h3>
            <p className="text-foreground/70 mb-4">
              I love hearing from readers! While I can't respond to every message personally, 
              I read them all and they absolutely make my day.
            </p>
          </div>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 magic-border rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
          <p className="text-foreground/70 mb-6">
            For regular updates about The Veilbound Saga and behind-the-scenes content, 
            join the newsletter for the fastest way to stay in touch.
          </p>
          <a
            href="/newsletter"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Join Newsletter
          </a>
        </motion.div>
      </div>
    </div>
  )
}