'use client'

import AdminNavBar from '@/components/UI/AdminNavBar'
import Header from '@/components/UI/Header'
import NavBar from '@/components/UI/NavBar'
import { usePathname } from 'next/navigation'

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const path = usePathname()

	return (
		<>
			<Header>Admin panel</Header>
			<AdminNavBar page={path} />
			{children}
		</>
	)
}
