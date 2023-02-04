import s from './Loading.module.css'

export default function Loading() {
	return (
		<div className={s.container}>
			<span className={s.loader} />
		</div>
	)
}
