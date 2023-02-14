import s from './AdminNavButton.module.css'

interface AdminNavButtonProps {
	children: string
	href: string
	active?: boolean
	onClick: () => void
}

export default function AdminNavButton({
	onClick,
	children,
}: AdminNavButtonProps) {
	return (
		<button className={s.button} onClick={onClick}>
			{children}
		</button>
	)
}
