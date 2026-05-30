import { AppointmentForm } from '@/components/appointment-form';
import { PeriodSection } from '@/components/period-section';
import { useAppointments } from '@/hooks/use-appointments';
import { groupAppointmentsByPeriod } from '@/utils/appointments';

export default async function Home() {
  const { appointments } = await useAppointments();
  const groupedAppointments = groupAppointmentsByPeriod(appointments);

  return (
    <div className="mt-14 p-6 md:mt-20 md:pt-0">
      <div className="flex flex-col md:flex-row">
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

      <div className="fixed right-0 bottom-0 left-0 flex justify-center bg-background-tertiary px-6 py-5 md:top-auto md:right-6 md:bottom-6 md:left-auto md:w-auto md:bg-transparent md:p-0">
        <AppointmentForm />
      </div>
    </div>
  );
}
