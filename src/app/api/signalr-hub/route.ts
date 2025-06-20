import configs from '@/configs'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Construct the target URL with original search params
    const url = new URL(configs.signalR.url)

    // Fetch the target resource
    const response = await fetch(url.toString(), {
      headers: {
        'Content-Type': 'application/json',
        // Add auth headers if required
      },
    })

    // Return the response as JSON (or text if needed)
    const data = await response.json()
    return NextResponse.json(data)
  } catch (_err: unknown) {
    console.error(_err)
    return NextResponse.json({ error: 'Proxy fetch failed' }, { status: 500 })
  }
}
