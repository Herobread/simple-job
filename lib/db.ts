import mysql from 'serverless-mysql'

// conecting to sql database
const db = mysql({
	config: {
		host: process.env.MYSQL_HOST,
		port: parseInt(process.env.MYSQL_PORT || '3306'),
		database: process.env.MYSQL_DATABASE,
		user: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD,
	},
})
/**
 * $conn = mysqli_connect(host, port, db, user)
 */

interface excuteQueryProps {
	query: string
	values?: any
}

/**
 * function that abstracts execution of sql query
 * mysqi_query($conn, $query)
 */
export default async function executeQuery({
	query,
	values = {},
}: excuteQueryProps) {
	try {
		const results = await db.query(query, values)
		await db.end()
		return results
	} catch (error: any) {
		return error.message
	}
}
