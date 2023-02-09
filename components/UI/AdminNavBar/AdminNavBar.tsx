import { signOut } from 'next-auth/react'
import Link from 'next/link'
import s from './AdminNavBar.module.css'
import AdminNavItem from './AdminNavItem'
import IconButton from '../IconButton/IconButton'
import Button from '../Button'

interface AdminNavBarProps {
	page: string
}

export default function AdminNavBar({ page }: AdminNavBarProps) {
	return (
		<div className={s.container}>
			<div className={s.left}>
				<AdminNavItem href={'/admin/add'} active={page == '/admin/add'}>
					Add new
				</AdminNavItem>
				<AdminNavItem
					href={'/admin/update'}
					active={page === '/admin/update'}
				>
					Update
				</AdminNavItem>
				<AdminNavItem
					href={'admin/delete'}
					active={page == '/admin/delete'}
				>
					Delete
				</AdminNavItem>
			</div>
			<div className={s.right}>
				<button
					onClick={() => {
						signOut()
					}}
				>
					Sign out
				</button>
			</div>
		</div>
	)
}
