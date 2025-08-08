import { appendRomanticConfig } from '@/lib/googleSheets'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()

  try {
    await appendRomanticConfig(req.body)
    res.status(200).json({ success: true })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, error: 'Failed to write to sheet' })
  }
}
