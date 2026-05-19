import type { Appointment } from '@/types/appointment';
import { Button } from './ui/button';

type AppointmentItemProps = {
  appointment: Appointment;
};

export function AppointmentItem({ appointment }: AppointmentItemProps) {
  return (
    <div className="not-last:border-border-divisor not-last:border-b p-3">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <span className="mr-3 text-label-md md:mr-4">{appointment.time}</span>
          <span className="text-label-md">{appointment.petName}</span>
          <span className="text-content-secondary text-paragraph-md">
            {' '}
            / {appointment.tutorName}
          </span>
        </div>

        <span className="text-content-secondary text-paragraph-md">
          {appointment.service}
        </span>

        <div className="mt-2 mr-3 mb-3 flex justify-end">
          <Button variant="outline">Remover agendamento</Button>
        </div>
      </div>
    </div>
  );
}
