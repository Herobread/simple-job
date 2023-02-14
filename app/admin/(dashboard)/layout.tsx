'use client'

import AdminNavBar from '@/components/UI/AdminNavBar'
import Header from '@/components/UI/Header'
import NavBar from '@/components/UI/NavBar'
import Text from '@/components/UI/Text'
import { useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const path = usePathname()
	const { data } = useSession()

	return (
		<>
			<Header>Admin panel</Header>
			{/* <Text>Logged in as {JSON.stringify(data)}</Text> */}
			<AdminNavBar page={path} />
			{children}
		</>
	)
}
