export type Period = 'morning' | 'afternoon' | 'evening';

export type Appointment = {
  id: string;
  petName: string;
  tutorName: string;
  phone: string;
  service: string;
  scheduledTo: Date;
  time: string;
  period: Period;
};

export type PeriodAppointments = {
  title: string;
  type: Period;
  timeRange: string;
  appointments: Appointment[];
};
