import { db } from '../lib/db'

async function main() {
    console.log('Checking for latest users in database...')
    const users = await db.user.findMany({
        orderBy: { createdAt: 'desc' },
        take: 5
    })

    if (users.length === 0) {
        console.log('No users found in database.')
    } else {
        console.log('Latest 5 users found:')
        console.table(users.map(u => ({
            id: u.id,
            email: u.email,

            createdAt: u.createdAt.toISOString()
        })))
    }
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await db.$disconnect()
    })
