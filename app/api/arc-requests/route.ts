import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const DATA_DIR = path.join(process.cwd(), 'data')
const ARC_REQUESTS_FILE = path.join(DATA_DIR, 'arc-requests.json')

interface ArcRequest {
  id: string
  email: string
  timestamp: string
  book: string
}

async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR)
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true })
  }
}

async function getArcRequests(): Promise<ArcRequest[]> {
  try {
    const data = await fs.readFile(ARC_REQUESTS_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

async function saveArcRequests(requests: ArcRequest[]) {
  await ensureDataDir()
  await fs.writeFile(ARC_REQUESTS_FILE, JSON.stringify(requests, null, 2))
}

export async function POST(request: NextRequest) {
  try {
    const { email, book } = await request.json()

    if (!email || !book) {
      return NextResponse.json(
        { error: 'Email and book are required' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    const requests = await getArcRequests()
    
    // Check if email already requested this book
    const existingRequest = requests.find(r => r.email === email && r.book === book)
    if (existingRequest) {
      return NextResponse.json(
        { error: 'You have already requested an ARC for this book' },
        { status: 409 }
      )
    }

    const newRequest: ArcRequest = {
      id: Date.now().toString(),
      email,
      book,
      timestamp: new Date().toISOString()
    }

    requests.push(newRequest)
    await saveArcRequests(requests)

    return NextResponse.json(
      { message: 'ARC request submitted successfully', id: newRequest.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error handling ARC request:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const requests = await getArcRequests()
    return NextResponse.json(requests)
  } catch (error) {
    console.error('Error fetching ARC requests:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}