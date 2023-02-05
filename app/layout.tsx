'use client'

import './globals.css'
import { Inter } from '@next/font/google'
import NavBar from '@/components/UI/NavBar'
import MainLayout from '@/components/layout/MainLayout'
import { SessionProvider } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={inter.className}>
			<head />
			<body>
				<NavBar />
				<SessionProvider>
					<MainLayout>{children}</MainLayout>
				</SessionProvider>
			</body>
		</html>
	)
}
