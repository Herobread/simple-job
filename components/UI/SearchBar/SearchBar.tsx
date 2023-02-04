import s from './SearchBar.module.css'
import Search from '@/public/search.svg'

interface SearchBarProps {
	onChange: React.ChangeEventHandler<HTMLInputElement>
}

export default function SearchBar({ onChange }: SearchBarProps) {
	return (
		<div className={s.container}>
			<Search className={s.search} />
			{/* <div></div> */}
			<input
				className={s.input}
				onChange={onChange}
				placeholder="Search..."
			/>
		</div>
	)
}
