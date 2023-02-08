import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			type: 'credentials',

			credentials: {},

			authorize(credentials: any) {
				const { username, password } = credentials as {
					username: string
					password: string
				}

				if (username !== 'test' && password !== 'test') {
					return null
				}

				return { username: 'test' }
			},
		} as any),
	],
	session: {
		strategy: 'jwt',
	},
	pages: {
		signIn: '/admin',
	},
}

export default NextAuth(authOptions)
