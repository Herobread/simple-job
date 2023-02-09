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
	title: string
	shortDescription: string
	longDescription: string
	city: string
	email: string
	salary: string // inputed data is in string format and it will be submitted as string, so this is string instead of number
}

export default function Update() {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		defaultValues: {
			jobId: '',
			city: '',
			email: '',
			longDescription: '',
			salary: '',
			shortDescription: '',
			title: '',
		},
	})

	const onSubmit: SubmitHandler<FormData> = async (data) => {
		const requestParams = {
			method: 'POST',
			body: JSON.stringify({ data: data }),
		}

		console.log(`${process.env.NEXTAUTH_URL}/api/updateJob/`)

		const res = await fetch(
			`${process.env.NEXTAUTH_URL}/api/updateJob/`,
			requestParams
		)

		console.log(res)
	}

	return (
		<>
			{/* <CompactHeader accent>Update</CompactHeader> */}

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
					<Controller
						name="title"
						rules={{
							maxLength: {
								value: 30,
								message:
									'Job title can not be longer than 30 symbols',
							},
						}}
						control={control}
						render={({ field }) => (
							<Input label="Job title" {...field} />
						)}
					/>
					<Text color="red">
						{errors.title && errors.title.message}
					</Text>

					<Controller
						name="shortDescription"
						rules={{
							maxLength: {
								value: 60,
								message:
									'Short description can not be longer than 60 symbols',
							},
						}}
						control={control}
						render={({ field }) => (
							<Input label="Short description" {...field} />
						)}
					/>
					<Text color="red">
						{errors.shortDescription &&
							errors.shortDescription.message}
					</Text>

					<Controller
						name="longDescription"
						control={control}
						rules={{
							maxLength: {
								value: 300,
								message:
									'Long description can not be longer than 300 symbols',
							},
						}}
						render={({ field }) => (
							<TextArea label="Long description" {...field} />
						)}
					/>
					<Text color="red">
						{errors.longDescription &&
							errors.longDescription.message}
					</Text>

					<Controller
						name="city"
						rules={{
							maxLength: {
								value: 30,
								message:
									'City can not be longer than 30 symbols',
							},
						}}
						control={control}
						render={({ field }) => (
							<Input label="City" {...field} />
						)}
					/>
					<Text color="red">
						{errors.city && errors.city.message}
					</Text>

					<Controller
						name="email"
						rules={{
							maxLength: {
								value: 300,
								message:
									'Email can not be longer than 30 symbols',
							},
						}}
						control={control}
						render={({ field }) => (
							<Input label="Email" {...field} />
						)}
					/>
					<Controller
						name="salary"
						rules={{
							min: {
								value: 0,
								message: 'Salary must be bigger than 0',
							},
							max: {
								value: 1_000_000_000,
								message: 'Salary must be less than 1 billion',
							},
						}}
						control={control}
						render={({ field }) => (
							<Input label="Year salary £" {...field} />
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
