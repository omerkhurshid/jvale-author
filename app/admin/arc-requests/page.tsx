'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Mail, Download, Calendar, Book, Lock } from 'lucide-react'

interface ArcRequest {
  id: string
  email: string
  timestamp: string
  book: string
}

export default function ArcRequestsAdmin() {
  const [requests, setRequests] = useState<ArcRequest[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState('')

  useEffect(() => {
    // Check if user is already authenticated
    const authStatus = localStorage.getItem('admin-authenticated')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
      fetchRequests()
    } else {
      setIsLoading(false)
    }
  }, [])

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setAuthError('')
    
    // Simple password check - in production, use proper authentication
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD || password === 'jvale2024admin') {
      setIsAuthenticated(true)
      localStorage.setItem('admin-authenticated', 'true')
      fetchRequests()
    } else {
      setAuthError('Invalid password')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('admin-authenticated')
    setPassword('')
    setRequests([])
  }

  const fetchRequests = async () => {
    try {
      const response = await fetch('/api/arc-requests')
      if (!response.ok) {
        throw new Error('Failed to fetch requests')
      }
      const data = await response.json()
      setRequests(data.sort((a: ArcRequest, b: ArcRequest) => 
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      ))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load requests')
    } finally {
      setIsLoading(false)
    }
  }

  const downloadCSV = () => {
    const csvContent = [
      ['Email', 'Book', 'Date', 'Time'].join(','),
      ...requests.map(request => [
        request.email,
        `"${request.book}"`,
        new Date(request.timestamp).toLocaleDateString(),
        new Date(request.timestamp).toLocaleTimeString()
      ].join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `arc-requests-${new Date().toISOString().split('T')[0]}.csv`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp)
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString()
    }
  }

  const bookStats = requests.reduce((acc, request) => {
    acc[request.book] = (acc[request.book] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen py-20 px-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="magic-border rounded-xl p-8 w-full max-w-md"
        >
          <div className="text-center mb-6">
            <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h1 className="text-2xl font-bold">Admin Login</h1>
            <p className="text-foreground/70">Enter password to access ARC requests</p>
          </div>
          
          <form onSubmit={handleAuth} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border/50 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter admin password"
              />
            </div>
            
            {authError && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                {authError}
              </div>
            )}
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-primary-foreground px-4 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Checking...' : 'Login'}
            </button>
          </form>
        </motion.div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="min-h-screen py-20 px-4 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p>Loading ARC requests...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">ARC Requests</h1>
              <p className="text-foreground/70">
                Manage Advanced Reader Copy requests
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={downloadCSV}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <Download size={16} />
                Export CSV
              </button>
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-2 bg-secondary text-foreground px-4 py-2 rounded-lg font-semibold hover:bg-secondary/80 transition-colors border border-border/50"
              >
                <Lock size={16} />
                Logout
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          <div className="magic-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <Mail className="w-6 h-6 text-primary" />
              <h3 className="font-bold">Total Requests</h3>
            </div>
            <p className="text-3xl font-bold text-primary">{requests.length}</p>
          </div>

          {Object.entries(bookStats).map(([book, count]) => (
            <div key={book} className="magic-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Book className="w-6 h-6 text-primary" />
                <h3 className="font-bold text-sm">{book}</h3>
              </div>
              <p className="text-3xl font-bold text-primary">{count}</p>
            </div>
          ))}
        </motion.div>

        {/* Requests List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="magic-border rounded-xl p-6"
        >
          <h2 className="text-2xl font-bold mb-6">All Requests</h2>
          
          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 mb-6">
              {error}
            </div>
          )}

          {requests.length === 0 ? (
            <div className="text-center py-12">
              <Mail className="w-12 h-12 text-foreground/30 mx-auto mb-4" />
              <p className="text-foreground/70">No ARC requests yet</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left py-3 px-4 font-semibold">Email</th>
                    <th className="text-left py-3 px-4 font-semibold">Book</th>
                    <th className="text-left py-3 px-4 font-semibold">Date</th>
                    <th className="text-left py-3 px-4 font-semibold">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((request, index) => {
                    const { date, time } = formatDate(request.timestamp)
                    return (
                      <motion.tr
                        key={request.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="border-b border-border/20 hover:bg-secondary/50"
                      >
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-primary" />
                            {request.email}
                          </div>
                        </td>
                        <td className="py-3 px-4">{request.book}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-foreground/50" />
                            {date}
                          </div>
                        </td>
                        <td className="py-3 px-4 text-foreground/70">{time}</td>
                      </motion.tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 magic-border rounded-xl p-6"
        >
          <h3 className="text-xl font-bold mb-4">How to Send ARC Copies</h3>
          <div className="space-y-3 text-foreground/70">
            <p>
              1. <strong>Export CSV:</strong> Click the "Export CSV" button to download all email addresses
            </p>
            <p>
              2. <strong>Email Setup:</strong> Use your preferred email client to send the ARC copy
            </p>
            <p>
              3. <strong>Bulk Send:</strong> Most email clients support importing CSV files for bulk emails
            </p>
            <p>
              4. <strong>Track Progress:</strong> The requests are sorted by newest first to help you track who you've sent copies to
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}