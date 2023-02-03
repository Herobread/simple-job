import Flex from '@/components/layout/Flex'
import Link from 'next/link'
import CompactHeader from '../CompactHeader'
import s from './NavBar.module.css'

export default function NavBar() {
	return (
		<Link href="/">
			<div className={s.container}>
				<p className={s.title}>SimpleJob</p>
			</div>
		</Link>
	)
}
