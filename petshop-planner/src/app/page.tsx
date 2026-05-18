import { PeriodSection } from '@/components/period-section';
import type { Appointment as PrismaAppointment } from '@/db/generated/prisma/client';
import type { Appointment, PeriodAppointments } from '@/types/appointment';

const appointments: PrismaAppointment[] = [
  {
    id: '1',
    petName: 'Buddy',
    description: 'Banho e Tosa',
    tutorName: 'João Silva',
    phone: '11999999999',
    scheduledTo: new Date('2026-05-01T10:30:00'),
    createdAt: new Date('2026-04-25T09:00:00'),
    updatedAt: new Date('2026-04-25T09:00:00'),
  },
  {
    id: '2',
    petName: 'Mia',
    description: 'Consulta Veterinária',
    tutorName: 'Maria Oliveira',
    phone: '11988888888',
    scheduledTo: new Date('2026-05-01T11:50:00'),
    createdAt: new Date('2026-04-25T09:00:00'),
    updatedAt: new Date('2026-04-25T09:00:00'),
  },
  {
    id: '3',
    petName: 'Luna',
    description: 'Vacinação',
    tutorName: 'Carlos Pereira',
    phone: '11977777777',
    scheduledTo: new Date('2026-05-06T14:15:00'),
    createdAt: new Date('2026-04-25T09:00:00'),
    updatedAt: new Date('2026-04-25T09:00:00'),
  },
];

function getPeriod(hour: number): 'morning' | 'afternoon' | 'evening' {
  if (hour >= 9 && hour < 12) return 'morning';
  if (hour >= 13 && hour < 18) return 'afternoon';
  return 'evening';
}

function groupAppointmentsByPeriod(
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

export default function Home() {
  const groupedAppointments = groupAppointmentsByPeriod(appointments);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between md:m-8">
        <div>
          <h1 className="mb-2 text-title">Sua agenda</h1>
          <p className="text-content-secondary text-paragraph-md">
            Aqui você pode ver todos os clientes e serviços agendados para hoje.
          </p>
        </div>
      </div>

      <main className="mt-8 flex flex-col">
        {groupedAppointments.map((groupAppointment) => (
          <PeriodSection
            key={groupAppointment.type}
            periodAppointments={groupAppointment}
          />
        ))}
      </main>
    </div>
  );
}
