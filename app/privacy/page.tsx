'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Shield, Mail, Eye, Database, Lock } from 'lucide-react'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="text-primary" size={32} />
            <h1 className="text-4xl md:text-5xl font-bold text-gradient">
              Privacy Policy
            </h1>
          </div>
          
          <p className="text-foreground/70 text-lg">
            How we protect and use your information
          </p>
          
          <p className="text-foreground/60 text-sm mt-2">
            Last updated: August 19, 2025
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="elegant-card rounded-2xl p-8 md:p-12"
        >
          <div className="prose prose-invert prose-lg max-w-none">
            
            {/* Introduction */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="text-primary" size={24} />
                <h2 className="text-2xl font-bold text-white m-0">Introduction</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                J. Vale ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website, subscribe to our newsletter, or interact with our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-primary" size={24} />
                <h2 className="text-2xl font-bold text-white m-0">Information We Collect</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-secondary/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-primary mb-2">Information You Provide</h3>
                  <ul className="text-foreground/80 space-y-1 ml-6">
                    <li>Email address (when subscribing to newsletter)</li>
                    <li>Name (if provided during contact or newsletter signup)</li>
                    <li>Messages sent through contact forms</li>
                    <li>Any other information you choose to provide</li>
                  </ul>
                </div>

                <div className="bg-secondary/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-primary mb-2">Automatically Collected Information</h3>
                  <ul className="text-foreground/80 space-y-1 ml-6">
                    <li>IP address and browser information</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referring website information</li>
                    <li>Device and operating system information</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="text-primary" size={24} />
                <h2 className="text-2xl font-bold text-white m-0">How We Use Your Information</h2>
              </div>
              
              <ul className="text-foreground/80 space-y-2 ml-6">
                <li>Send newsletter updates about new book releases and author news</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our website and user experience</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="text-primary" size={24} />
                <h2 className="text-2xl font-bold text-white m-0">Information Sharing and Disclosure</h2>
              </div>
              
              <p className="text-foreground/80 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
              </p>
              
              <ul className="text-foreground/80 space-y-2 ml-6">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party services that help us operate our website and send newsletters (such as email service providers)</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In the event of a merger or sale of assets, information may be transferred to the new entity</li>
              </ul>
            </section>

            {/* Third-Party Services */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
              
              <div className="space-y-4">
                <div className="bg-secondary/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-primary mb-2">Analytics</h3>
                  <p className="text-foreground/80 text-sm">
                    We may use web analytics services to understand how visitors interact with our website. These services may collect information such as your IP address, browser type, and pages visited.
                  </p>
                </div>

                <div className="bg-secondary/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-primary mb-2">Email Services</h3>
                  <p className="text-foreground/80 text-sm">
                    Our newsletter is managed through third-party email service providers who may have access to subscriber email addresses and engagement data.
                  </p>
                </div>

                <div className="bg-secondary/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-primary mb-2">External Links</h3>
                  <p className="text-foreground/80 text-sm">
                    Our website may contain links to Amazon and other external sites. We are not responsible for the privacy practices of these third-party websites.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="text-foreground/80 leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* Your Rights */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="text-foreground/80 space-y-2 ml-6">
                <li>Unsubscribe from our newsletter at any time</li>
                <li>Request information about the data we have collected about you</li>
                <li>Request correction or deletion of your personal information</li>
                <li>Opt out of certain data collection practices</li>
              </ul>
            </section>

            {/* Cookies */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Cookies and Tracking</h2>
              <p className="text-foreground/80 leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences. Note that disabling cookies may affect some website functionality.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
              <p className="text-foreground/80 leading-relaxed">
                Our website is not directed at children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            {/* Changes to Policy */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Privacy Policy</h2>
              <p className="text-foreground/80 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or how we handle your information, please contact us:
              </p>
              
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="text-primary" size={20} />
                  <h3 className="text-lg font-semibold text-white m-0">Get in Touch</h3>
                </div>
                <p className="text-foreground/80 mb-4">
                  For privacy-related questions or to exercise your rights regarding your personal information:
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  <Mail size={16} />
                  Contact Us
                </Link>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}