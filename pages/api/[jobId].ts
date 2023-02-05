import type { NextApiRequest, NextApiResponse } from 'next'
import excuteQuery from '@/lib/db'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { jobId } = req.query

	const result = await excuteQuery({
		query: `SELECT * FROM \`jobs\` WHERE jobId=${jobId}`,
		values: {},
	})

	res.status(200).json(result)
}
