import BigLeftSplit from '@/components/layout/BigLeftSplit'
import Flex from '@/components/layout/Flex'
import Link from 'next/link'
import CompactHeader from '../CompactHeader'
import Text from '../Text'
import s from './JobCard.module.css'

interface JobCardProps {
	title: string
	description: string
	salary: number | string
	city: string
	href: string | number
}

export default function JobCard({
	title,
	description,
	salary,
	city,
	href,
}: JobCardProps) {
	if (!salary) salary = 0

	salary = salary.toLocaleString()
	return (
		<Link href={href.toString()}>
			<div className={s.container}>
				<CompactHeader>{title}</CompactHeader>

				<div className={s.text}>{description}</div>
				<BigLeftSplit>
					<CompactHeader>{salary}£</CompactHeader>
					{city}
				</BigLeftSplit>
			</div>
		</Link>
	)
}
