import cn from '@/lib/cn'
import s from './CompactHeader.module.css'

interface CompactHeaderProps {
	children: React.ReactNode
	accent?: boolean
}

export default function CompactHeader({
	accent,
	children,
}: CompactHeaderProps) {
	let styles = [s.header]

	if (accent) {
		styles.push(s.accent)
	}

	return <h3 className={cn(styles)}>{children}</h3>
}
