import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DBSOURCE = path.join(__dirname, process.env.DB_PATH || "contacts.db");

let db = null;

const initializeDatabase = async () => {
    try {
        db = await open({
            filename: DBSOURCE,
            driver: sqlite3.Database,
        });

        // Create contacts table if it doesn't exist
        await db.run(`
            CREATE TABLE IF NOT EXISTS contacts (id INTEGER PRIMARY KEY, name TEXT, email TEXT UNIQUE, phone TEXT UNIQUE)
        `);

        console.log('Connected to the SQLite database.');
        console.log('Contacts table created or already exists.');
        return db;
    } catch (error) {
        console.error('Database initialization error:', error);
        throw error;
    }
};

// Initialize database on import
const database = await initializeDatabase();

export default database;