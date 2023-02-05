'use client'

import SearchBar from '@/components/UI/SearchBar'
import '../globals.css'

export default function UserLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<SearchBar onChange={() => {}} />
			{children}
		</>
	)
}
