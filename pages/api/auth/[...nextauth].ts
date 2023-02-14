import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			type: 'credentials',

			credentials: {
				username: null,
			},

			async authorize(credentials: any) {
				const { username, password } = credentials as {
					username: string
					password: string
				}
				console.log('here')

				const res = await fetch(
					`${process.env.NEXTAUTH_URL}/api/verifyAdmin`,
					{
						method: 'POST',
						body: JSON.stringify({
							username: username,
							password: password,
						}),
					}
				)

				const result = await res.json()

				if (result.isAdmin) {
					return {
						username: result.username,
					}
				}

				return null
			},
		} as any),
	],
	session: {
		strategy: 'jwt',
		maxAge: 30 * 24 * 60 * 60,
	},
	pages: {
		signIn: '/admin',
	},
}

export default NextAuth(authOptions)
