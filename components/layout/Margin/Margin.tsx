interface MarginOptions {
	height: number
}

export default function Margin({ height }: MarginOptions) {
	return <div style={{ height: height }}></div>
}
