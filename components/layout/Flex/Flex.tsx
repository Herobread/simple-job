interface FlexOptions {
	children: React.ReactNode

	alignItems?:
		| 'stretch'
		| 'center'
		| 'flex-start'
		| 'flex-end'
		| 'baseline'
		| 'initial'
		| 'inherit'

	justifyContent?:
		| 'flex-start'
		| 'flex-end'
		| 'space-between'
		| 'space-around'
		| 'center'
		| 'initial'
		| 'inherit'

	direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
	flexWrap?: 'wrap' | 'wrap' | 'wrap-reverse'

	alignSelf?: 'stretch' | 'center' | 'start' | 'end'
	justifySelf?: 'stretch' | 'center' | 'start' | 'end'

	gap?: number | string
	flexGrow?: number

	width?: string
}

export default function Flex({
	children,
	alignItems,
	alignSelf,
	direction,
	flexWrap,
	justifyContent,
	justifySelf,
	width,
	flexGrow,
	gap,
}: FlexOptions) {
	return (
		<div
			style={{
				// outline: '1px solid red',
				width: width,
				display: 'flex',
				alignItems: alignItems,
				alignSelf: alignSelf,
				flexDirection: direction,
				flexWrap: flexWrap,
				flexGrow: flexGrow,
				justifyContent: justifyContent,
				justifySelf: justifySelf,
				gap: gap,
			}}
		>
			{children}
		</div>
	)
}
