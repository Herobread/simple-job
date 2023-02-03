import Header from '@/components/UI/Header'
import Text from '@/components/UI/Text'
import MainLayout from '@/components/layout/MainLayout'
import JobCard from '@/components/UI/JobCard'
import JobGrid from '@/components/layout/JobGrid'
import CompactHeader from '@/components/UI/CompactHeader'

export default function Home() {
	return (
		<>
			<MainLayout>
				<Header>Header</Header>
				<Text>text</Text>
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
			</MainLayout>
		</>
	)
}
