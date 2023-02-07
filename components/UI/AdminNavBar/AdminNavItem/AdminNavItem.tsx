import cn from '@/lib/cn'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import s from './AdminNavItem.module.css'

interface AdminNavItemProps {
	children: string
	href: string
	active?: boolean
}

export default function AdminNavItem({
	href,
	children,
	active,
}: AdminNavItemProps) {
	let styles = [s.item]

	if (active) {
		styles.push(s.active)
	}

	return (
		<Link href={href} className={cn(styles)}>
			{children}
		</Link>
	)
}
