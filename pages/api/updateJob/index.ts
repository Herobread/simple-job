import type { NextApiRequest, NextApiResponse } from 'next'
import excuteQuery from '@/lib/db'
import { Job } from '@/types/Job'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { data } = JSON.parse(req.body)
	const {
		city,
		jobId,
		email,
		longDescription,
		salary,
		shortDescription,
		title,
	} = data

	console.log(jobId)

	let fields = []

	if (title) {
		fields.push(`title = '${title}'`)
	}

	if (shortDescription) {
		fields.push(`shortDescription = '${shortDescription}'`)
	}

	if (longDescription) {
		fields.push(`longDescription = '${longDescription}'`)
	}

	if (email) {
		fields.push(`email = '${email}'`)
	}

	if (city) {
		fields.push(`city = '${city}'`)
	}

	if (salary) {
		fields.push(`salary = '${salary}'`)
	}

	const query = `UPDATE jobs SET ${fields.join(', ')} WHERE jobId = ${jobId};`

	console.log(query)
	const ress = await excuteQuery({ query: query })
	console.log(ress)

	res.status(200).json({ status: 'ok' })
}
