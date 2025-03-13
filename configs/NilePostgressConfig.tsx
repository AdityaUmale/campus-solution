import { Client } from 'node-postgres'

const client = new Client({
    user: process.env.EXPO_PUBLIC_DB_USERNAME,
    host: '127.0.0.1',
    database: 'test',
    password: process.env.EXPO_PUBLIC_DB_PASSWORD,
    port: 5432
})