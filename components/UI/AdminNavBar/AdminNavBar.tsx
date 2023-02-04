import Link from 'next/link'
import s from './AdminNavBar.module.css'
import AdminNavItem from './AdminNavItem'

export default function AdminNavBar() {
	return (
		<div className={s.container}>
			<div className={s.left}>
				<AdminNavItem href={'admin/update'}>Update</AdminNavItem>
				<AdminNavItem href={'admin/add'}>Add</AdminNavItem>
				<AdminNavItem href={'admin/delete'}>Delete</AdminNavItem>
			</div>
			<div className={s.right}>
				<AdminNavItem href={'api/signout'}>Sign out</AdminNavItem>
			</div>
		</div>
	)
}
