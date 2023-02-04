import Link from 'next/link'
import s from './AdminNavItem.module.css'

interface AdminNavItemProps {
	children: string
	href: string
}

export default function AdminNavItem({ href, children }: AdminNavItemProps) {
	return (
		<Link href={href} className={s.item}>
			{children}
		</Link>
	)
}
