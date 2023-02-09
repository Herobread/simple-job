import cn from '@/lib/cn'
import s from './Text.module.css'

interface TextProps {
	lineHeight?: string
	children: React.ReactNode
	color?: 'red'
}

export default function Text({ lineHeight, color, children }: TextProps) {
	let styles = [s.text]

	if (color) {
		styles.push(s.red)
	}

	return (
		<p className={cn(styles)} style={{ lineHeight: lineHeight }}>
			{children}
		</p>
	)
}
