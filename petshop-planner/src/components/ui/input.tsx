import type { LucideIcon } from 'lucide-react';
import { type ComponentProps, useId } from 'react';

import { tv } from '@/utils/tv';

type InputProps = ComponentProps<'input'> & {
  icon?: LucideIcon;
  title: string;
  error?: string;
};

const inputVariants = tv({
  slots: {
    container: 'flex flex-col gap-1',
    label: 'text-content-primary text-label-md',
    field:
      'flex items-center gap-2 rounded-lg border border-border-primary p-3 text-content-primary transition-colors duration-200 focus-within:border-border-brand focus-within:outline-none focus-within:ring-0 hover:border-border-secondary',
    input:
      'flex-1 bg-transparent outline-none placeholder:text-content-secondary',
    icon: 'size-5 shrink-0 text-content-brand fill-background-highlights',
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

export function Input({
  className,
  icon: Icon,
  title,
  error,
  ...props
}: InputProps) {
  const inputId = useId();
  const errorId = `${inputId}-error`;
  const isInvalid = Boolean(error);
  const {
    container,
    label,
    field,
    input,
    icon: iconStyles,
  } = inputVariants({
    invalid: isInvalid,
  });

  return (
    <div className={container()}>
      <label htmlFor={inputId} className={label()}>
        {title}
      </label>

      <div className={field({ class: className })}>
        {Icon && (
          <Icon className={iconStyles()} aria-hidden="true" focusable="false" />
        )}
        <input
          className={input()}
          id={inputId}
          type="text"
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
