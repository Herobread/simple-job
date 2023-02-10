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
import Text from '@/components/UI/Text'
import TextArea from '@/components/UI/TextArea'

interface FormData {
	jobId: string
}

export default function Delete() {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		defaultValues: {
			jobId: '',
		},
	})

	const onSubmit: SubmitHandler<FormData> = async (data) => {
		const requestParams = {
			method: 'POST',
			body: JSON.stringify({ data: data }),
		}

		console.log(`${process.env.NEXTAUTH_URL}/api/deleteJob/`)

		const res = await fetch(
			`${process.env.NEXTAUTH_URL}/api/deleteJob/`,
			requestParams
		)

		console.log(res)
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Flex direction="column" gap={10}>
					<Controller
						name="jobId"
						control={control}
						rules={{
							required: {
								value: true,
								message: 'Job ID is required',
							},
						}}
						render={({ field }) => (
							<Input label="Job ID" {...field} />
						)}
					/>
					<Text color="red">
						{errors.jobId && errors.jobId.message}
					</Text>

					<Flex justifyContent="flex-end">
						<Button type="submit">Delete</Button>
					</Flex>
				</Flex>
			</form>
		</>
	)
}
