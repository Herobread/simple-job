import s from './SearchBar.module.css'
import Search from '@/public/search.svg'

interface SearchBarProps {}

export default function SearchBar({}: SearchBarProps) {
	return (
		<div className={s.container}>
			<Search className={s.search} />
			{/* <div></div> */}
			<input className={s.input} placeholder="Search..." />
		</div>
	)
}
