import type { NextApiRequest, NextApiResponse } from 'next'
import excuteQuery from '@/lib/db'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const { data } = JSON.parse(req.body)
		const { jobId } = data

		const query = `DELETE FROM \`jobs\` WHERE jobId=${jobId}`

		console.log(query)
		const result: any = await excuteQuery({ query: query })

		console.log(result)

		if (result.affectedRows == 0) {
			// no jobs affected
			res.status(500).json({ message: 'Job doesn`t exist' })
		}

		res.status(200).json({})
	} catch (error) {
		res.status(500).json({
			message: `An error has occured: ${error.message}`,
		})
	}
}
