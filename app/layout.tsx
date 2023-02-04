import './globals.css'
import { Inter } from '@next/font/google'
import NavBar from '@/components/UI/NavBar'
import MainLayout from '@/components/layout/MainLayout'

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
				<MainLayout>{children}</MainLayout>
			</body>
		</html>
	)
}
