import MainLayout from '@/components/layout/MainLayout'
import JobCard from '@/components/UI/JobCard'
import JobGrid from '@/components/layout/JobGrid'
import CompactHeader from '@/components/UI/CompactHeader'
// import SearchBar from '@/components/UI/SearchBar/SearchBar'
import { Job } from '@/types/Job'

async function fetchJobs() {
	const res = await fetch(`${process.env.NEXTAUTH_URL}/api/alljobs/`, {
		method: 'GET',
	})

	return res.json()
}

export default async function Home() {
	const jobs = await fetchJobs()

	return (
		<>
			{/* <SearchBar onChange={() => {}} /> */}
			<JobGrid>
				{jobs.map &&
					jobs.map((job: Job) => {
						return (
							<JobCard
								title={job.title}
								city={job.city}
								description={job.shortDescription}
								salary={job.salary}
								href={`job/${job.jobId}`}
								key={job.jobId}
							/>
						)
					})}
			</JobGrid>
			{/* <SearchBar onChange={handleQueryChange} />
			{query ? (
				<CompactHeader accent>Search query: {query}</CompactHeader>
			) : (
				''
			)}
			<CompactHeader accent>Recently added</CompactHeader>
			<JobGrid><p>{console.log(jobs[0].city)}</p></JobGrid>
			<CompactHeader accent>All jobs</CompactHeader> */}
		</>
	)
}
