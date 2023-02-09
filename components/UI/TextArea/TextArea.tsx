import Margin from '@/components/layout/Margin'
import { forwardRef } from 'react'
import s from './TextArea.module.css'

interface TextAreaProps
	extends React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLTextAreaElement>,
		HTMLTextAreaElement
	> {
	label?: string
	[key: string]: any
}

const TextArea = forwardRef(
	(props: TextAreaProps, ref: React.Ref<HTMLTextAreaElement>) => {
		const { label, ...rest } = props
		return (
			<div className={s.container}>
				<label>
					{label}
					<Margin height={10} />
					<textarea ref={ref} className={s.textarea} {...rest} />
				</label>
			</div>
		)
	}
)

TextArea.displayName = 'TextArea'

export default TextArea
