import type { NextApiRequest, NextApiResponse } from 'next'
import excuteQuery from '@/lib/db'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const result = await excuteQuery({
		query: 'SELECT * FROM `jobs`',
		values: {},
	})

	res.status(200).json(result)
}
