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
import { useState } from 'react'
import type { APIErrorInfo } from '@/types/Error'
import InfoPanel from '@/components/UI/InfoPanel'

interface FormData {
	jobId: string
}

export default function Delete() {
	const [message, setMessage] = useState('')
	const [color, setColor] = useState<'red' | 'lime' | ''>('')

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

		await fetch(`${process.env.NEXTAUTH_URL}/api/deleteJob/`, requestParams)
			.then(async (response) => {
				let data: APIErrorInfo = await response.json()

				if (response.status >= 400 && response.status < 600) {
					throw new Error(data.message)
				}
				return response
			})
			.then(() => {
				setColor('lime')
				setMessage('Deleted successfuly')
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
					{message && (
						<InfoPanel>
							<Text color={color}>{message}</Text>
						</InfoPanel>
					)}
					<Flex justifyContent="flex-end">
						<Button type="submit">Delete</Button>
					</Flex>
				</Flex>
			</form>
		</>
	)
}
