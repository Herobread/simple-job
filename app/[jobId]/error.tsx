'use client' // Error components must be Client components

import Header from '@/components/UI/Header'
import Button from '@/components/UI/Button'
import Text from '@/components/UI/Text'
import Link from 'next/link'
import { useEffect } from 'react'
import CompactHeader from '../../components/UI/CompactHeader/CompactHeader'

export default function Error({
	error,
	reset,
}: {
	error: Error
	reset: () => void
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error)
	}, [error])

	return (
		<>
			<Header>Error</Header>
			<Text>Job wasn`t found</Text>
			<Link href="/">
				<Button>Home</Button>
			</Link>
		</>
	)
}
