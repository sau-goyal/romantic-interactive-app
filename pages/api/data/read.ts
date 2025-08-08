import { readRomanticConfigs } from '@/lib/googleSheets'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await readRomanticConfigs()
    res.status(200).json({ success: true, data })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, error: 'Failed to read from sheet' })
  }
}
