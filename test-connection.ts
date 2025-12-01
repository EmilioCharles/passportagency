import { db } from './src/lib/db';

async function main() {
    try {
        console.log('Connecting to database...');
        const users = await db.user.findMany({ take: 1 });
        console.log('Successfully connected. Users found:', users.length);
    } catch (error) {
        console.error('Connection failed:', error);
        process.exit(1);
    } finally {
        await db.$disconnect();
    }
}

main();
