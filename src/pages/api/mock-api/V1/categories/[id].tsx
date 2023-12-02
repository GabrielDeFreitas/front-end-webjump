// pages/api/mock-api/V1/categories/[id].tsx

import fs from 'fs'
import path from 'path'
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id }
  } = req

  try {
    let filePath = ''

    if (id === 'list') {
      filePath = path.join(
        process.cwd(),
        'src/pages/api/mock-api/V1/categories/list.json'
      )
    } else {
      filePath = path.join(
        process.cwd(),
        `src/pages/api/mock-api/V1/categories/${id}.json`
      )
    }

    const fileContents = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(fileContents)

    res.status(200).json(JSON.stringify(data, null, 2))
  } catch (error) {
    res.status(404).json({ error: 'Categoria não encontrada' })
  }
}
