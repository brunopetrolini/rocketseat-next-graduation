'use client';

import { Toast as BaseToast } from '@base-ui/react/toast';
import { XIcon } from 'lucide-react';
import type { ComponentProps, ReactNode } from 'react';

import { tv } from '@/utils/tv';

type ToastStatus = 'success' | 'error' | 'info' | 'warning';

type ShowToastOptions = {
  title: ReactNode;
  description?: ReactNode;
  timeout?: number;
};

const toastStatusConfig = {
  success: {
    priority: 'low',
  },
  error: {
    priority: 'high',
  },
  info: {
    priority: 'low',
  },
  warning: {
    priority: 'low',
  },
} satisfies Record<
  ToastStatus,
  {
    priority: 'low' | 'high';
  }
>;

const toastVariants = tv({
  slots: {
    viewport:
      'fixed top-4 right-4 left-4 z-60 mx-auto w-[calc(100vw-2rem)] max-w-sm md:top-6',
    root: '[--gap:0.75rem] [--peek:0.75rem] [--scale:calc(max(0,1-(var(--toast-index)*0.06)))] [--shrink:calc(1-var(--scale))] [--height:var(--toast-frontmost-height,var(--toast-height))] [--offset-y:calc(var(--toast-offset-y)+(var(--toast-index)*var(--gap))+var(--toast-swipe-movement-y))] pointer-events-auto absolute top-0 right-0 left-0 z-[calc(1000-var(--toast-index))] mx-auto h-[var(--height)] w-full origin-top select-none overflow-hidden rounded-lg border bg-background-tertiary text-content-primary shadow-xl [transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)+(var(--toast-index)*var(--peek))+(var(--shrink)*var(--height))))_scale(var(--scale))] [transition:transform_0.5s_cubic-bezier(0.22,1,0.36,1),opacity_0.5s,height_0.15s] data-expanded:h-[var(--toast-height)] data-expanded:[transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--offset-y)))] data-limited:opacity-0 data-starting-style:[transform:translateY(-150%)] data-ending-style:opacity-0 [&[data-ending-style]:not([data-limited]):not([data-swipe-direction])]:[transform:translateY(-150%)] data-ending-style:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-expanded:data-ending-style:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-ending-style:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-expanded:data-ending-style:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-ending-style:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))] data-expanded:data-ending-style:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))]',
    content:
      'flex h-full items-start gap-3 overflow-hidden p-4 transition-opacity duration-200 data-behind:opacity-0 data-expanded:opacity-100',
    text: 'flex min-w-0 flex-1 flex-col gap-1',
    title: 'text-label-lg',
    description: 'text-content-primary text-paragraph-md',
    close:
      'flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-md text-content-secondary transition-colors duration-200 hover:bg-background-secondary hover:text-content-primary focus-visible:outline-2 focus-visible:outline-border-brand focus-visible:outline-offset-2',
  },
  variants: {
    status: {
      success: {
        root: 'border-accent-success',
        title: 'text-accent-success',
      },
      error: {
        root: 'border-accent-danger',
        title: 'text-accent-danger',
      },
      info: {
        root: 'border-accent-blue',
        title: 'text-accent-blue',
      },
      warning: {
        root: 'border-accent-yellow',
        title: 'text-accent-yellow',
      },
    },
  },
});

function getToastStatus(type: string | undefined): ToastStatus {
  if (
    type === 'success' ||
    type === 'error' ||
    type === 'info' ||
    type === 'warning'
  ) {
    return type;
  }

  return 'info';
}

function ToastList() {
  const { toasts } = BaseToast.useToastManager();

  return toasts.map((toast) => {
    const status = getToastStatus(toast.type);
    const { root, content, text, title, description, close } = toastVariants({
      status,
    });

    return (
      <BaseToast.Root
        key={toast.id}
        toast={toast}
        swipeDirection={['up', 'left', 'right']}
        className={root()}
      >
        <BaseToast.Content className={content()}>
          <div className={text()}>
            <BaseToast.Title className={title()} />
            <BaseToast.Description className={description()} />
          </div>

          <BaseToast.Close className={close()} aria-label="Fechar notificação">
            <XIcon className="size-4" aria-hidden="true" focusable="false" />
          </BaseToast.Close>
        </BaseToast.Content>
      </BaseToast.Root>
    );
  });
}

function createToastPayload(status: ToastStatus, options: ShowToastOptions) {
  const config = toastStatusConfig[status];

  return {
    ...options,
    type: status,
    priority: config.priority,
  };
}

export function useToast() {
  const toastManager = BaseToast.useToastManager();

  return {
    success(options: ShowToastOptions) {
      return toastManager.add(createToastPayload('success', options));
    },
    error(options: ShowToastOptions) {
      return toastManager.add(createToastPayload('error', options));
    },
    info(options: ShowToastOptions) {
      return toastManager.add(createToastPayload('info', options));
    },
    warning(options: ShowToastOptions) {
      return toastManager.add(createToastPayload('warning', options));
    },
    dismiss(id?: string) {
      toastManager.close(id);
    },
  };
}

export function ToastProvider({
  children,
}: Pick<ComponentProps<typeof BaseToast.Provider>, 'children'>) {
  const { viewport } = toastVariants();

  return (
    <BaseToast.Provider>
      {children}

      <BaseToast.Portal>
        <BaseToast.Viewport className={viewport()}>
          <ToastList />
        </BaseToast.Viewport>
      </BaseToast.Portal>
    </BaseToast.Provider>
  );
}
