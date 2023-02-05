import type { NextApiRequest, NextApiResponse } from 'next'
import excuteQuery from '@/lib/db'
import { Job } from '@/types/Job'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { title } = req.query

	if (!title) {
		return
	}

	const words = (title as string).split(' ')

	let result: Job[] = []

	for (const word of words) {
		const tempRes: Job[] = (await excuteQuery({
			query: `SELECT * FROM \`jobs\` WHERE title LIKE '%${word}%'`,
			values: {},
		})) as Job[]

		for (const job of tempRes) {
			let exists = false

			for (const existingJob of result) {
				if (existingJob.jobId === job.jobId) {
					exists = true
					break
				}
			}

			if (!exists) {
				result.push(job)
			}
		}
	}

	res.status(200).json(result)
}
