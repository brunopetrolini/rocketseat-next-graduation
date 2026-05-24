import { usePrisma } from './use-prisma';

export async function useAppointments() {
  const prisma = usePrisma();

  const appointments = await prisma.appointment.findMany();

  return { appointments };
}
