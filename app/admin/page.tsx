'use client'

import Button from '@/components/UI/Button'
import Input from '@/components/UI/Input'
import { useState } from 'react'
import Flex from '../../components/layout/Flex/Flex'

export default function Admin() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	return (
		<>
			<Input
				label="aa"
				onChange={(e: React.FormEvent<HTMLInputElement>) => {
					setUsername(e.currentTarget.value)
				}}
			/>
			<Input
				label="bb"
				onChange={(e: React.FormEvent<HTMLInputElement>) => {
					setPassword(e.currentTarget.value)
				}}
			/>
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
