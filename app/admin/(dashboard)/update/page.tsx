'use client'

import Flex from '@/components/layout/Flex'
import MainLayout from '@/components/layout/MainLayout'
import AdminNavBar from '@/components/UI/AdminNavBar'
import CompactHeader from '@/components/UI/CompactHeader'
import Header from '@/components/UI/Header'
import Button from '@/components/UI/IconButton/IconButton'
import Input from '@/components/UI/Input'
import { usePathname } from 'next/navigation'

export default function Update() {
	const path = usePathname()

	return (
		<>
			<CompactHeader accent>Update</CompactHeader>

			<form>
				<Input label="JobId" name="jobId" required />
				<Input label="Title" name="title" required />
				<Flex justifyContent="flex-end">
					<Button>Update</Button>
				</Flex>
			</form>
		</>
	)
}
