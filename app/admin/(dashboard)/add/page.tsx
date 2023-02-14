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
import { APIErrorInfo } from '@/types/Error'
import { useState } from 'react'
import InfoPanel from '@/components/UI/InfoPanel'

interface FormData {
	title: string
	shortDescription: string
	longDescription: string
	city: string
	email: string
	salary: string // inputed data is in string format and it will be submitted as string, so this is string instead of number
}

export default function Add() {
	const [message, setMessage] = useState('')
	const [color, setColor] = useState<'red' | 'lime' | ''>('')

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		defaultValues: {
			// city: '',
			// email: '',
			// longDescription: '',
			// salary: '',
			// shortDescription: '',
			// title: '',
			city: 'New York',
			email: 'john.doe@example.com',
			longDescription:
				'We are looking for an experienced Software Engineer to join our team and help us build and maintain our flagship product. The ideal candidate will have a strong background in software development, excellent problem-solving skills, and a passion for writing clean and efficient code.',
			salary: '100000',
			shortDescription:
				'Experienced Software Engineer wanted for leading tech company in NYC',
			title: 'C++ Developer',
		},
	})

	const onSubmit: SubmitHandler<FormData> = async (data) => {
		const requestParams = {
			method: 'POST',
			body: JSON.stringify({ data: data }),
		}

		console.log(`${process.env.NEXTAUTH_URL}/api/createJob/`)

		const res = await fetch(
			`${process.env.NEXTAUTH_URL}/api/createJob`,
			requestParams
		)
			.then(async (response) => {
				let data: APIErrorInfo = await response.json()

				if (response.status >= 400 && response.status < 600) {
					throw new Error(data.message)
				}
				return response
			})
			.then(() => {
				setColor('lime')
				setMessage('Job posting created successfuly')
			})
			.catch((err) => {
				setColor('red')
				setMessage(err.message)
			})
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Flex direction="column" gap={10}>
					<Controller
						name="title"
						rules={{
							required: {
								value: true,
								message: 'Title is required',
							},
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
							required: {
								value: true,
								message: 'Short description is required',
							},
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
							required: {
								value: true,
								message: 'Long description is required',
							},
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
							required: {
								value: true,
								message: 'City is required',
							},
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
							required: {
								value: true,
								message: 'Email is required',
							},
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
					<Text color="red">
						{errors.email && errors.email.message}
					</Text>
					<Controller
						name="salary"
						rules={{
							required: {
								value: true,
								message: 'Salary is required',
							},
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
							<Input
								type="number"
								label="Year salary £"
								{...field}
							/>
						)}
					/>
					<Text color="red">
						{errors.salary && errors.salary.message}
					</Text>
					{message && (
						<InfoPanel>
							<Text color={color}>{message}</Text>
						</InfoPanel>
					)}
					<Flex justifyContent="flex-end">
						<Button type="submit">Create</Button>
					</Flex>
				</Flex>
			</form>
		</>
	)
}
