'use client'

import MainLayout from '@/components/layout/MainLayout'
import Button from '@/components/UI/Button'
import Input from '@/components/UI/Input'
import Loading from '@/components/UI/Loading'
import Flex from '../../components/layout/Flex/Flex'

export default function Admin() {
	return (
		<>
			<Loading />
			<Input label="aa" />
			<Input label="bb" />
			<Flex justifyContent="flex-end">
				<Button
					onClick={() => {
						console.log('first')
					}}
				>
					Log in
				</Button>
			</Flex>
		</>
	)
}
