import { type ComponentProps, useId } from 'react';

import { tv } from '@/utils/tv';

type TextareaProps = ComponentProps<'textarea'> & {
  title: string;
  error?: string;
};

const textareaVariants = tv({
  slots: {
    container: 'flex flex-col gap-1',
    label: 'text-content-primary text-label-md',
    field:
      'flex items-center rounded-lg border border-border-primary p-3 text-content-primary transition-colors duration-200 focus-within:border-border-brand focus-within:outline-none focus-within:ring-0 hover:border-border-secondary',
    textArea:
      'h-20 flex-1 resize-none bg-transparent outline-none placeholder:text-content-secondary',
  },
  variants: {
    invalid: {
      true: {
        field:
          'border-accent-danger hover:border-accent-danger focus-within:border-accent-danger',
      },
    },
  },
});

export function Textarea({ className, title, error, ...props }: TextareaProps) {
  const textAreaId = useId();
  const errorId = `${textAreaId}-error`;
  const isInvalid = Boolean(error);
  const { container, label, field, textArea } = textareaVariants({
    invalid: isInvalid,
  });

  return (
    <div className={container()}>
      <label htmlFor={textAreaId} className={label()}>
        {title}
      </label>

      <div className={field({ class: className })}>
        <textarea
          className={textArea()}
          id={textAreaId}
          {...props}
          aria-invalid={isInvalid}
          aria-describedby={isInvalid ? errorId : undefined}
        />
      </div>

      {error && (
        <p
          id={errorId}
          className="text-accent-danger text-paragraph-sm"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
