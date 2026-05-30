import { Dialog as BaseDialog } from '@base-ui/react/dialog';
import { XIcon } from 'lucide-react';

import { Button } from './ui/button';

export function AppointmentForm() {
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
        </BaseDialog.Popup>
      </BaseDialog.Portal>
    </BaseDialog.Root>
  );
}
