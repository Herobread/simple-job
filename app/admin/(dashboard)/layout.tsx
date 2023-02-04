import NavBar from '@/components/UI/NavBar'
import AdminNavBar from '../../../components/UI/AdminNavBar/AdminNavBar'

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<AdminNavBar />
			{children}
		</>
	)
}
