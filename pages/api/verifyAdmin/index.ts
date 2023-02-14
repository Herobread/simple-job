import type { NextApiRequest, NextApiResponse } from 'next'
import excuteQuery from '@/lib/db'
import { Job } from '@/types/Job'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	console.log(req.body)
	const { username, password } = JSON.parse(req.body)

	console.log('here3')

	const query = `SELECT COUNT(*) AS isAdmin FROM \`admins\` WHERE username='${username}' AND password='${password}'`

	console.log(query)
	const responce = await excuteQuery({ query: query })

	res.status(200).json({
		isAdmin: responce[0]['isAdmin'],
		username: username,
	})
}
