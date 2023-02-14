import type { NextApiRequest, NextApiResponse } from 'next'
import excuteQuery from '@/lib/db'
import { Job } from '@/types/Job'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const { data } = JSON.parse(req.body)
		const {
			city,
			email,
			longDescription,
			salary,
			shortDescription,
			title,
		} = data

		const now = new Date()
		let month = now.getUTCMonth() + 1
		let day = now.getUTCDate()
		let year = now.getUTCFullYear()

		const createdAt = year + '-' + month + '-' + day

		const query = `INSERT INTO \`jobs\`(\`title\`, \`createdAt\`, \`shortDescription\`, \`longDescription\`, \`email\`, \`city\`, \`salary\`) VALUES ('${title}','${createdAt}','${shortDescription}','${longDescription}','${email}','${city}','${salary}')`

		await excuteQuery({ query: query })

		res.status(200).json({})
	} catch (error) {
		res.status(500).json({
			message: `An error has occured: ${error.message}`,
		})
	}
}
