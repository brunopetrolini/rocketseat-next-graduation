import type { Appointment } from '@/types/appointment';

type AppointmentItemProps = {
  appointment: Appointment;
};

export function AppointmentItem({ appointment }: AppointmentItemProps) {
  return (
    <div className="not-last:border-border-divisor not-last:border-b p-3">
      {/* Time, Pet Name, Tutor Name */}
      <div>
        <span className="mr-3 text-label-md">{appointment.time}</span>
        <span className="text-label-md">{appointment.petName}</span>
        <span className="text-content-secondary text-paragraph-md">
          {' '}
          / {appointment.tutorName}
        </span>
      </div>

      {/* Service Description */}
      <p className="text-content-secondary text-paragraph-md">
        {appointment.service}
      </p>
    </div>
  );
}
