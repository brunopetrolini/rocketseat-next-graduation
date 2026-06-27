'use client';

import { Dialog as BaseDialog } from '@base-ui/react/dialog';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Loader2, PawPrintIcon, UserIcon, XIcon } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from './ui/button';
import { DateTimePicker } from './ui/date-time-picker';
import { Input } from './ui/input';
import { PhoneInput } from './ui/phone-input';
import { Textarea } from './ui/textarea';
import { useToast } from './ui/toast';

const appointmentFormSchema = z.object({
  tutorName: z.string().min(3, 'O nome do tutor é obrigatório.'),
  petName: z.string().min(3, 'O nome do pet é obrigatório.'),
  phone: z.string().min(14, 'O número de telefone é obrigatório.'),
  description: z.string().min(3, 'A descrição do atendimento é obrigatória.'),
  scheduleAt: z
    .date('A data e hora do atendimento é obrigatória.')
    .refine((date) => date > new Date(), {
      message: 'A data e hora do atendimento deve ser futura.',
    }),
});

type AppointmentFormData = z.infer<typeof appointmentFormSchema>;

export function AppointmentForm() {
  const toast = useToast();

  const form = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: {
      tutorName: '',
      petName: '',
      phone: '',
      description: '',
      scheduleAt: undefined,
    },
  });

  function onSubmit(data: AppointmentFormData) {
    toast.success({
      title: 'Agendamento realizado com sucesso!',
      description: `O atendimento para ${data.petName} foi agendado para ${format(data.scheduleAt, "d 'de' MMMM 'de' yyyy 'às' HH:mm", { locale: ptBR })}.`,
    });
    4;
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

          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-7 flex flex-col gap-4"
          >
            <Input
              icon={UserIcon}
              title="Nome do tutor"
              placeholder="Helena Souza"
              error={form.formState.errors.tutorName?.message}
              {...form.register('tutorName')}
            />

            <Input
              icon={PawPrintIcon}
              title="Nome do pet"
              placeholder="Cheddar"
              error={form.formState.errors.petName?.message}
              {...form.register('petName')}
            />

            <PhoneInput
              title="Telefone"
              placeholder="(00) 0 0000-0000"
              error={form.formState.errors.phone?.message}
              {...form.register('phone')}
            />

            <Textarea
              title="Descrição do serviço"
              placeholder="Banho e tosa"
              error={form.formState.errors.description?.message}
              {...form.register('description')}
            />

            <Controller
              control={form.control}
              name="scheduleAt"
              render={({ field }) => (
                <DateTimePicker
                  title="Data e hora"
                  value={field.value}
                  onChange={field.onChange}
                  error={form.formState.errors.scheduleAt?.message}
                />
              )}
            />

            <Button
              type="submit"
              className="mt-7 w-fit self-end uppercase"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <Loader2 className="animate-spin" />
              ) : (
                'Agendar'
              )}
            </Button>
          </form>
        </BaseDialog.Popup>
      </BaseDialog.Portal>
    </BaseDialog.Root>
  );
}
