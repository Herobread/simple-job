import BigLeftSplit from '@/components/layout/BigLeftSplit'
import Flex from '@/components/layout/Flex'
import CompactHeader from '../CompactHeader'
import Text from '../Text'
import s from './JobCard.module.css'

interface JobCardProps {
	title: string
	description: string
	salary: number | string
	city: string
}

export default function JobCard({
	title,
	description,
	salary,
	city,
}: JobCardProps) {
	salary = salary.toLocaleString()
	return (
		<div className={s.container}>
			<CompactHeader>{title}</CompactHeader>

			<div className={s.text}>{description}</div>
			<BigLeftSplit>
				<CompactHeader>{salary}£</CompactHeader>
				{city}
			</BigLeftSplit>
		</div>
	)
}
