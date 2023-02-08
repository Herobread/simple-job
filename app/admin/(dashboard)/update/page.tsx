'use client'

import Flex from '@/components/layout/Flex'
import MainLayout from '@/components/layout/MainLayout'
import AdminNavBar from '@/components/UI/AdminNavBar'
import CompactHeader from '@/components/UI/CompactHeader'
import Header from '@/components/UI/Header'
import Button from '@/components/UI/Button'
import Input from '@/components/UI/Input'
import { usePathname } from 'next/navigation'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'

interface FormData {
	username: string
	password: string
}

export default function Update() {
	const {
		control,
		register,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		defaultValues: {
			username: '',
			password: '',
		},
	})

	const onSubmit: SubmitHandler<FormData> = (data) => {
		console.log(data)
	}

	return (
		<>
			<CompactHeader accent>Update</CompactHeader>

			<form onSubmit={handleSubmit(onSubmit)}>
				<Flex direction="column" gap={10}>
					<Controller
						name="username"
						control={control}
						render={({ field }) => (
							<Input label="Username" {...field} />
						)}
					/>
					<Controller
						name="password"
						control={control}
						render={({ field }) => (
							<Input label="Password" {...field} />
						)}
					/>
					<Flex justifyContent="flex-end">
						<Button type="submit">Update</Button>
					</Flex>
				</Flex>
			</form>
		</>
	)
}
