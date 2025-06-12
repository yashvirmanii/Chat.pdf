import type {Config} from 'drizzle-kit'
import * as dotenv from 'dotenv'
dotenv.config({path:'.env.local'})

console.log(process.env.DATABASE_URL)
export default {
    dialect: "postgresql",
    schema:'./src/lib/db/schema.ts',
    dbCredentials: {
        url: process.env.DATABASE_URL!
    }
} satisfies Config