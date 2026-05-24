import type { Appointment as PrismaAppointment } from '@/db/generated/prisma/client';
import type { Appointment, PeriodAppointments } from '@/types/appointment';

function getPeriod(hour: number): 'morning' | 'afternoon' | 'evening' {
  if (hour >= 9 && hour < 12) return 'morning';
  if (hour >= 13 && hour < 18) return 'afternoon';
  return 'evening';
}

export function groupAppointmentsByPeriod(
  appointments: PrismaAppointment[],
): PeriodAppointments[] {
  const transformedAppointments: Appointment[] = appointments.map(
    (appointment) => ({
      ...appointment,
      time: appointment.scheduledTo.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
      }),
      service: appointment.description,
      period: getPeriod(appointment.scheduledTo.getHours()),
    }),
  );

  return [
    {
      title: 'Manhã',
      type: 'morning',
      timeRange: '09h - 12h',
      appointments: transformedAppointments.filter(
        (appointment) => appointment.period === 'morning',
      ),
    },
    {
      title: 'Tarde',
      type: 'afternoon',
      timeRange: '13h - 18h',
      appointments: transformedAppointments.filter(
        (appointment) => appointment.period === 'afternoon',
      ),
    },
    {
      title: 'Noite',
      type: 'evening',
      timeRange: '19h - 21h',
      appointments: transformedAppointments.filter(
        (appointment) => appointment.period === 'evening',
      ),
    },
  ];
}
