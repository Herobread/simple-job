import s from './Text.module.css'

interface TextProps {
	lineHeight?: string
	children: React.ReactNode
}

export default function Text({ lineHeight, children }: TextProps) {
	return (
		<p className={s.text} style={{ lineHeight: lineHeight }}>
			{children}
		</p>
	)
}
