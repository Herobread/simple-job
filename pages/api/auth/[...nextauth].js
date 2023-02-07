import NextAuth, { Awaitable, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: {
					label: 'Username',
					type: 'text',
				},
				password: {
					label: 'Password',
					type: 'password',
				},
			},
			async authorize(credentials) {
				const { username, password } = credentials

				if (username == 'test' && password == 'test') {
					return { id: 1 }
				}

				return false
			},
		}),
	],
}

export default NextAuth(authOptions)
