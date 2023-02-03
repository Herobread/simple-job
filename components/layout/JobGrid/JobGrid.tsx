import s from './JobGrid.module.css'

interface JobGridProps {
	children: React.ReactNode
}

export default function JobGrid({ children }: JobGridProps) {
	return <div className={s.container}>{children}</div>
}
