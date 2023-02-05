import BigLeftSplit from '@/components/layout/BigLeftSplit'
import Flex from '@/components/layout/Flex'
import CompactHeader from '@/components/UI/CompactHeader'
import Header from '@/components/UI/Header'
import IconButton from '@/components/UI/IconButton'
import Text from '@/components/UI/Text'
import { Job } from '@/types/Job'
import Cross from '@/public/cross.svg'
import Link from 'next/link'
import JobGrid from '@/components/layout/JobGrid'
import JobCard from '@/components/UI/JobCard'

async function fetchJob(jobId: string | number) {
	const res = await fetch(`http://localhost:3000/api/${jobId}/`, {
		method: 'GET',
	})

	return res.json()
}

async function fetchSimilarJobs(jobTitle: string) {
	const res = await fetch(`http://localhost:3000/api/similar/${jobTitle}/`, {
		method: 'GET',
	})

	return res.json()
}

interface JobsSectionsProps {
	jobs: Job[]
	jobId: string
}

function GenerateSimilarJobsSection({ jobs, jobId }: JobsSectionsProps) {
	console.log(jobs)

	jobs = jobs.filter((job) => {
		return job.jobId.toString() !== jobId
	})

	if (!jobs.length) return null

	return (
		<>
			<CompactHeader accent>Similar jobs</CompactHeader>
			<JobGrid>
				{jobs.map((job) => {
					return (
						<JobCard
							city={job.city}
							description={job.shortDescription}
							salary={job.salary}
							href={job.jobId}
							title={job.title}
							key={job.jobId}
						/>
					)
				})}
			</JobGrid>
		</>
	)
}

interface HomeProps {
	params: { jobId: string }
}

export default async function Home({ params }: HomeProps) {
	const { jobId } = params
	const data = await fetchJob(jobId)

	if (!data) {
		throw 'aa'
	}

	const job: Job = data[0]

	const { title, city, email, longDescription, salary } = job

	let similarJobs: Job[] = await fetchSimilarJobs(title)

	return (
		<>
			<BigLeftSplit>
				<Flex alignItems="center" gap={5}>
					<Header>{title}</Header>
					<Text>{jobId}</Text>
				</Flex>
				<Link href="/">
					<IconButton>
						<Cross />
					</IconButton>
				</Link>
			</BigLeftSplit>
			<Text>{longDescription}</Text>
			<BigLeftSplit>
				<Text>{email}</Text>
				<Text>{city}</Text>
			</BigLeftSplit>
			<CompactHeader>{salary.toLocaleString()}£</CompactHeader>
			<GenerateSimilarJobsSection jobs={similarJobs} jobId={jobId} />
		</>
	)
}