process.env.DATABASE_URL = 'file:./dev.db';
const path = require('path');
const { PrismaClient } = require('@prisma/client');
const { PrismaLibSql } = require('@prisma/adapter-libsql');
const { createClient } = require('@libsql/client');

const dbPath = path.resolve(__dirname, 'dev.db');
const libsql = createClient({
  url: 'file:' + dbPath,
});

const adapter = new PrismaLibSql(libsql);
const prisma = new PrismaClient({ adapter });

async function test() {
  try {
    const res = await prisma.accommodation.count();
    console.log('Count:', res);
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
    libsql.close();
  }
}
test();
