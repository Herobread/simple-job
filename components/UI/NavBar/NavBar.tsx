import s from './NavBar.module.css'

interface NavBarProps {
	children: React.ReactNode
}

export default function NavBar({ children }: NavBarProps) {
	return <div className={s.container}>{children}</div>
}
