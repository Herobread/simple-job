import type { NextApiRequest, NextApiResponse } from 'next'
import excuteQuery from '@/lib/db'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { username, password } = req.query

	const result = await excuteQuery({
		query: `SELECT COUNT(*) FROM 'admins' WHERE username='${username}' AND password='${password}'`,
		values: {},
	})

	console.log(result)

	res.status(200).json(result)
}
