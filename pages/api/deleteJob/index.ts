import type { NextApiRequest, NextApiResponse } from 'next'
import excuteQuery from '@/lib/db'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	console.log('somethin')

	const { data } = JSON.parse(req.body)
	const { jobId } = data

	const query = `DELETE FROM \`jobs\` WHERE jobId=${jobId}`

	console.log(query)
	const ress = await excuteQuery({ query: query })
	console.log(ress)

	res.status(200).json({ status: 'ok' })
}
