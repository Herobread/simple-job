'use client'

import Flex from '@/components/layout/Flex'
import MainLayout from '@/components/layout/MainLayout'
import AdminNavBar from '@/components/UI/AdminNavBar'
import CompactHeader from '@/components/UI/CompactHeader'
import Header from '@/components/UI/Header'
import Button from '@/components/UI/Button'
import Input from '@/components/UI/Input'
import { usePathname, useRouter } from 'next/navigation'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import Text from '@/components/UI/Text'
import { signIn } from 'next-auth/react'

interface FormData {
	username: string
	password: string
}

export default function SignIn() {
	const router = useRouter()
	const {
		control,
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
		signIn('credentials', {
			username: data.username,
			password: data.password,
			redirect: false,
		}).then(({ ok, error }) => {
			if (ok) {
				router.push('/admin/add')
			} else {
				console.log(error)
				alert('Invalid user')
			}
		})
	}

	return (
		<>
			<Header>Admin panel</Header>

			<form onSubmit={handleSubmit(onSubmit)}>
				<Flex direction="column" gap={10}>
					<Controller
						name="username"
						control={control}
						rules={{ required: 'This field is required' }}
						render={({ field }) => (
							<Input label="Username" {...field} />
						)}
					/>
					<Text color="red">
						{errors.username && errors.username.message}
					</Text>

					<Controller
						name="password"
						control={control}
						rules={{ required: 'This field is required' }}
						render={({ field }) => (
							<Input label="Password" {...field} />
						)}
					/>
					<Text color="red">
						{errors.password && errors.password.message}
					</Text>
					<Flex justifyContent="flex-end">
						<Button type="submit">Sign in</Button>
					</Flex>
				</Flex>
			</form>
		</>
	)
}
