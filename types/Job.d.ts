export type Job = {
	jobId: number
	title: string
	createdAt: string
	shortDescription: string
	longDescription: string
	email: string
	city: string
	salary: number
	[key: string]: unknown
}
