import "dotenv/config";

console.log("DATABASE_URL:", process.env.DATABASE_URL ? "Defined" : "Undefined");
if (process.env.DATABASE_URL) {
    console.log("Length:", process.env.DATABASE_URL.length);
    // Print first few chars to verify protocol
    // console.log("Full URL:", process.env.DATABASE_URL);
    const fs = require('fs');
    fs.writeFileSync('db_url.txt', process.env.DATABASE_URL);
}
