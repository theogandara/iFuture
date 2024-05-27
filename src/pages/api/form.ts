import { Client } from '@notionhq/client'
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

const notion_secret = process.env.NOTION_SECRET
const notion_database_id = process.env.NOTION_DATABASE_ID

const notion = new Client({
  auth: notion_secret
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (!notion_secret || !notion_database_id) {
    return res.status(500).json({ message: 'Missing environment variables' })
  }

  if (req.method === 'GET') {
    return res.status(200).json({ message: 'Success' })
  }

  if (req.method === 'POST') {
    const body = JSON.parse(req.body)
    const { subject, content, email, years } = body

    try {
      await notion.pages.create({
        parent: {
          database_id: notion_database_id
        },
        properties: {
          subject: {
            title: [
              {
                text: {
                  content: subject || 'Sem assunto'
                }
              }
            ]
          },
          content: {
            rich_text: [
              {
                text: {
                  content: content || 'Sem serviço'
                }
              }
            ]
          },
          years: {
            number: years || 'Sem serviço'
          },
          mail: {
            email: email || 'Sem email'
          }
        }
      })

      return res.status(200).json({ message: 'Success' })
    } catch (error) {
      return res.status(500).json({ message: `Error: ${error}` })
    }
  }

  return res.status(404).json({ message: 'Not found' })
}
