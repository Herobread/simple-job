import Margin from '@/components/layout/Margin'
import s from './Input.module.css'

interface InputProps {
	label?: string
	placeholder?: string
}

export default function Input({ label, placeholder }: InputProps) {
	return (
		<div className={s.container}>
			<label>
				{label}
				<Margin height={10} />
				<input className={s.input} placeholder={placeholder} />
			</label>
		</div>
	)
}
