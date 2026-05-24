import 'dotenv/config';

import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

import { PrismaClient } from '../generated/prisma/client';

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.appointment.deleteMany();

  await prisma.appointment.createMany({
    skipDuplicates: true,
    data: [
      {
        petName: 'Buddy',
        description: 'Banho e Tosa',
        tutorName: 'João Silva',
        phone: '11999999999',
        scheduledTo: new Date('2026-05-01T10:30:00'),
      },
      {
        petName: 'Mia',
        description: 'Consulta Veterinária',
        tutorName: 'Maria Oliveira',
        phone: '11988888888',
        scheduledTo: new Date('2026-05-01T11:50:00'),
      },
      {
        petName: 'Luna',
        description: 'Vacinação',
        tutorName: 'Carlos Pereira',
        phone: '11977777777',
        scheduledTo: new Date('2026-05-06T14:15:00'),
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });
