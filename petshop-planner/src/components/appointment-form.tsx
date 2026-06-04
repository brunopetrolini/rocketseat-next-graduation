'use client';

import { Dialog as BaseDialog } from '@base-ui/react/dialog';
import { zodResolver } from '@hookform/resolvers/zod';
import { XIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from './ui/button';

const appointmentFormSchema = z.object({
  tutorName: z.string().min(3, 'O nome do tutor é obrigatório.'),
  petName: z.string().min(3, 'O nome do pet é obrigatório.'),
  phone: z.string().min(11, 'O número de telefone é obrigatório.'),
  description: z.string().min(3, 'A descrição do atendimento é obrigatória.'),
});

type AppointmentFormData = z.infer<typeof appointmentFormSchema>;

export function AppointmentForm() {
  const form = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: {
      tutorName: '',
      petName: '',
      phone: '',
      description: '',
    },
  });

  function onSubmit(data: AppointmentFormData) {
    console.log(data);
  }

  return (
    <BaseDialog.Root>
      <BaseDialog.Trigger
        render={<Button className="uppercase">Novo Agendamento</Button>}
      />

      <BaseDialog.Portal>
        <BaseDialog.Backdrop className="fixed inset-0 z-40 min-h-dvh bg-black/[0.01] backdrop-blur-[6px] transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-[-webkit-touch-callout:none]:absolute" />

        <BaseDialog.Popup className="fixed top-1/2 right-5 left-5 z-50 flex -translate-y-1/2 flex-col gap-7 rounded-xl bg-background-tertiary px-5 py-10 transition-[scale,opacity] duration-100 ease-out data-ending-style:scale-[0.98] data-starting-style:scale-[0.98] data-ending-style:opacity-0 data-starting-style:opacity-0 md:right-auto md:left-1/2 md:w-full md:max-w-lg md:-translate-x-1/2">
          <BaseDialog.Close
            render={
              <Button
                variant="outline"
                className="absolute top-5 right-5 w-fit"
              >
                <XIcon className="size-6" />
              </Button>
            }
          />

          <div>
            <BaseDialog.Title className="text-title">
              Agende um atendimento
            </BaseDialog.Title>
            <BaseDialog.Description className="text-content-secondary text-paragraph-md">
              Preencha os dados do cliente para realizar o agendamento:
            </BaseDialog.Description>
          </div>

          <form onSubmit={form.handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Nome do tutor"
              aria-invalid={Boolean(form.formState.errors.tutorName)}
              {...form.register('tutorName')}
            />
            {form.formState.errors.tutorName && (
              <p role="alert">{form.formState.errors.tutorName.message}</p>
            )}
            <input
              type="text"
              placeholder="Nome do pet"
              aria-invalid={Boolean(form.formState.errors.petName)}
              {...form.register('petName')}
            />
            {form.formState.errors.petName && (
              <p role="alert">{form.formState.errors.petName.message}</p>
            )}
            <input
              type="text"
              placeholder="Telefone"
              aria-invalid={Boolean(form.formState.errors.phone)}
              {...form.register('phone')}
            />
            {form.formState.errors.phone && (
              <p role="alert">{form.formState.errors.phone.message}</p>
            )}
            <input
              type="text"
              placeholder="Descrição"
              aria-invalid={Boolean(form.formState.errors.description)}
              {...form.register('description')}
            />
            {form.formState.errors.description && (
              <p role="alert">{form.formState.errors.description.message}</p>
            )}

            <Button type="submit" className="w-full">
              Agendar
            </Button>
          </form>
        </BaseDialog.Popup>
      </BaseDialog.Portal>
    </BaseDialog.Root>
  );
}
