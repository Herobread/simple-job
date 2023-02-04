'use client'

import Header from '@/components/UI/Header'
import Text from '@/components/UI/Text'
import MainLayout from '@/components/layout/MainLayout'
import JobCard from '@/components/UI/JobCard'
import JobGrid from '@/components/layout/JobGrid'
import CompactHeader from '@/components/UI/CompactHeader'
import SearchBar from '@/components/UI/SearchBar/SearchBar'
import Loading from '@/components/UI/Loading'

export default function Home() {
	return (
		<>
			<SearchBar onChange={() => {}} />
			<Loading />
		</>
	)
}
