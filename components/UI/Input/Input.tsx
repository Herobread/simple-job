import Margin from '@/components/layout/Margin'
import s from './Input.module.css'

interface InputProps {
	label?: string
	placeholder?: string
	[key: string]: any
}

export default function Input({ label, placeholder, ...props }: InputProps) {
	return (
		<div className={s.container}>
			<label>
				{label}
				<Margin height={10} />
				<input
					className={s.input}
					placeholder={placeholder}
					{...props}
				/>
			</label>
		</div>
	)
}
