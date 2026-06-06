import type { MaskedPatternOptions } from 'imask';
import { PhoneIcon } from 'lucide-react';
import { type ChangeEvent, type Ref, useId } from 'react';
import { IMaskInput, type ReactElementProps } from 'react-imask';

import { tv } from '@/utils/tv';

type PhoneMaskProps = ReactElementProps<HTMLInputElement> &
  Omit<MaskedPatternOptions, 'mask'> & {
    inputRef?: Ref<HTMLInputElement>;
    onAccept?: (value: string, maskRef: unknown, e?: InputEvent) => void;
    onComplete?: (value: string, maskRef: unknown, e?: InputEvent) => void;
    ref?: Ref<HTMLInputElement>;
    unmask?: boolean | 'typed';
    value?: string;
  };

type PhoneInputProps = PhoneMaskProps & {
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

export function PhoneInput({
  className,
  title,
  error,
  inputRef,
  onAccept,
  onChange,
  ref,
  ...props
}: PhoneInputProps) {
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

  function handleAccept(value: string, maskRef: unknown, event?: InputEvent) {
    onAccept?.(value, maskRef, event);
    onChange?.({
      currentTarget: {
        name: props.name,
        value,
      },
      target: {
        name: props.name,
        value,
      },
    } as ChangeEvent<HTMLInputElement>);
  }

  function handleInputRef(element: HTMLInputElement | null) {
    const refs = [ref, inputRef];

    for (const inputRefItem of refs) {
      if (!inputRefItem) {
        continue;
      }

      if (typeof inputRefItem === 'function') {
        inputRefItem(element);
      } else {
        inputRefItem.current = element;
      }
    }
  }

  return (
    <div className={container()}>
      <label htmlFor={inputId} className={label()}>
        {title}
      </label>

      <div className={field({ class: className })}>
        <PhoneIcon
          className={iconStyles()}
          aria-hidden="true"
          focusable="false"
        />

        <IMaskInput
          className={input()}
          id={inputId}
          type="text"
          mask="(00) 0 0000-0000"
          aria-invalid={isInvalid}
          aria-describedby={isInvalid ? errorId : undefined}
          inputRef={handleInputRef}
          onAccept={handleAccept}
          {...props}
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
