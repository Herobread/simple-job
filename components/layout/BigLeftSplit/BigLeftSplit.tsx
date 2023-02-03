import Flex from '@/components/layout/Flex'

interface BigLeftSplitOptions {
	children: React.ReactNode[]
}

export default function BigLeftSplit({ children }: BigLeftSplitOptions) {
	return (
		<Flex alignItems="center">
			<Flex flexGrow={1}>{children[0]}</Flex>
			{children[1]}
		</Flex>
	)
}
