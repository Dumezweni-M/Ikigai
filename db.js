import * as SQLite from 'expo-sqlite';

let dbInstance = null;

// Use Async instead of Sync
export const getDB = async () => {
  if (!dbInstance) {
    dbInstance = await SQLite.openDatabaseAsync('user_project.db');
    
    // Setup tables async
    await dbInstance.execAsync(`
      PRAGMA journal_mode = WAL;
      CREATE TABLE IF NOT EXISTS habits (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        status INTEGER DEFAULT 0
      );
    `);
  }
  return dbInstance;
};