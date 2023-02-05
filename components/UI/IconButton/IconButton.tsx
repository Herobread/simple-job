import cn from '@/lib/cn'
import s from './IconButton.module.css'

interface ButtonOptions {
	children: React.ReactNode
	disabled?: boolean
	[key: string]: unknown
}

export default function Button({
	disabled,
	children,
	...props
}: ButtonOptions) {
	let styles = [s.button] // add base style: .button

	if (disabled) {
		styles.push(s.disabled) // add disabled style if the button is disabled
	}

	return (
		<button disabled={disabled} className={cn(styles)} {...props}>
			{children}
		</button>
	)
}
