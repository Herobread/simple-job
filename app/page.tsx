'use client'

import MainLayout from '@/components/layout/MainLayout'
import JobCard from '@/components/UI/JobCard'
import JobGrid from '@/components/layout/JobGrid'
import CompactHeader from '@/components/UI/CompactHeader'
import SearchBar from '@/components/UI/SearchBar/SearchBar'
import { useState } from 'react'

export default function Home() {
	const [query, setQuery] = useState<string>('')

	const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value)
	}

	return (
		<>
			<SearchBar onChange={handleQueryChange} />
			{query ? (
				<CompactHeader accent>Search query: {query}</CompactHeader>
			) : (
				''
			)}
			<CompactHeader accent>Recently added</CompactHeader>
			<JobGrid>
				<JobCard
					city="London"
					title="Job name"
					description="Join our creative team as a Job name and create something some for our clients"
					salary={35000}
				/>
				<JobCard
					city="London"
					title="Job name"
					description="Join our creative team as a Job name and create something some for our clients"
					salary={35000}
				/>
				<JobCard
					city="London"
					title="Job name"
					description="Join our creative team as a Job name and create something some for our clients"
					salary={35000}
				/>
			</JobGrid>
			<CompactHeader accent>All jobs</CompactHeader>
			<JobGrid>
				<JobCard
					city="London"
					title="Job name"
					description="Join our creative team as a Job name and create something some for our clients"
					salary={35000}
				/>
				<JobCard
					city="London"
					title="Job name"
					description="Join our creative team as a Job name and create something some for our clients"
					salary={35000}
				/>
				<JobCard
					city="London"
					title="Job name"
					description="Join our creative team as a Job name and create something some for our clients"
					salary={35000}
				/>
				<JobCard
					city="London"
					title="Job name"
					description="Join our creative team as a Job name and create something some for our clients"
					salary={35000}
				/>
				<JobCard
					city="London"
					title="Job name"
					description="Join our creative team as a Job name and create something some for our clients"
					salary={35000}
				/>
				<JobCard
					city="London"
					title="Job name"
					description="Join our creative team as a Job name and create something some for our clients"
					salary={35000}
				/>
				<JobCard
					city="London"
					title="Job name"
					description="Join our creative team as a Job name and create something some for our clients"
					salary={35000}
				/>
			</JobGrid>
		</>
	)
}
