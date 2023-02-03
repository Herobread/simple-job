import s from './Button.module.css'

interface ButtonProps {
	children: React.ReactNode
	disabled?: boolean
	[key: string]: unknown
}

export default function Button({ children, disabled, ...props }: ButtonProps) {
	return (
		<button className={s.button} {...props}>
			{children}
		</button>
	)
}
