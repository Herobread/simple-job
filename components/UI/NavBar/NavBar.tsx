import Flex from '@/components/layout/Flex'
import Margin from '@/components/layout/Margin'
import Link from 'next/link'
import CompactHeader from '../CompactHeader'
import s from './NavBar.module.css'

export default function NavBar() {
	return (
		<>
			<div className={s.wrapper}>
				<Link href="/">
					<div className={s.container}>
						<p className={s.title}>SimpleJob</p>
					</div>
				</Link>
			</div>
			<Margin height={32} />
		</>
	)
}
