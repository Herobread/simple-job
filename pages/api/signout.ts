import type { NextApiRequest, NextApiResponse } from 'next'
import { signOut } from 'next-auth/react'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	signOut()

	res.status(200)
}
