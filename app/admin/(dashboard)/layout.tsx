'use client'

import AdminNavBar from '@/components/UI/AdminNavBar'
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
			<AdminNavBar page={path} />
			{children}
		</>
	)
}
