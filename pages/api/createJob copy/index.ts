import type { NextApiRequest, NextApiResponse } from 'next'
import excuteQuery from '@/lib/db'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	console.log('somethin')

	const { data } = JSON.parse(req.body)
	const {
		jobId,
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

	console.log(query)
	const ress = await excuteQuery({ query: query })
	console.log(ress)

	res.status(200).json({ status: 'ok' })
}
