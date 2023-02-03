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
				<input placeholder={placeholder} />
			</label>
		</div>
	)
}
