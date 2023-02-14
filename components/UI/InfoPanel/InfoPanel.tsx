import s from './InfoPanel.module.css'

interface InfoPanelProps {
	children: React.ReactNode
}

export default function InfoPanel({ children }: InfoPanelProps) {
	return <div className={s.container}>{children}</div>
}
