import { CloudSunIcon, MoonStarIcon, SunIcon } from 'lucide-react';

import type { PeriodAppointments } from '@/types/appointment';
import { AppointmentItem } from './appointment-item';

const periodIcons = {
  morning: (
    <SunIcon className="size-5 fill-accent-blue-light text-accent-blue" />
  ),
  afternoon: (
    <CloudSunIcon className="size-5 fill-accent-orange-light text-accent-orange" />
  ),
  evening: (
    <MoonStarIcon className="size-5 fill-accent-yellow-light text-accent-yellow" />
  ),
};

type PeriodSectionProps = {
  periodAppointments: PeriodAppointments;
};

export function PeriodSection({ periodAppointments }: PeriodSectionProps) {
  const currentPeriod = periodIcons[periodAppointments.type];

  return (
    <section className="mb-8 rounded-xl bg-background-tertiary">
      {/* Header */}
      <div className="flex items-center justify-between border-[#2E2C30] border-b px-5 py-3">
        <div className="flex flex-1 flex-row items-center gap-3">
          {currentPeriod}
          <h2 className="flex-1 text-label-lg">{periodAppointments.title}</h2>
          <span className="text-content-secondary text-label-lg">
            {periodAppointments.timeRange}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-5">
        {periodAppointments.appointments.length > 0 ? (
          periodAppointments.appointments.map((appointment) => (
            <AppointmentItem key={appointment.id} appointment={appointment} />
          ))
        ) : (
          <p className="text-content-secondary text-paragraph-md">
            Nenhum agendamento para este período.
          </p>
        )}
      </div>
    </section>
  );
}
