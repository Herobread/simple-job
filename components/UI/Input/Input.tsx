import Margin from '@/components/layout/Margin'
import { forwardRef } from 'react'
import s from './Input.module.css'

interface InputProps
	extends React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	label?: string
	[key: string]: any
}

const Input = forwardRef(
	(props: InputProps, ref: React.Ref<HTMLInputElement>) => {
		const { label, ...rest } = props
		return (
			<div className={s.container}>
				<label>
					{label}
					<Margin height={10} />
					<input ref={ref} className={s.input} {...rest} />
				</label>
			</div>
		)
	}
)

Input.displayName = 'Input'

export default Input
