import Margin from '@/components/layout/Margin'
import s from './Input.module.css'

interface InputProps
	extends React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	label?: string
	[key: string]: any
}

export default function Input({ label, ...props }: InputProps) {
	return (
		<div className={s.container}>
			<label>
				{label}
				<Margin height={10} />
				<input className={s.input} {...props} />
			</label>
		</div>
	)
}
