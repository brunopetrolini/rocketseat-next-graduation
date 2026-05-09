import { type ComponentProps, useId } from 'react';

import ArrowDownIcon from '@/assets/icons/arrow-down.svg';
import UserIcon from '@/assets/icons/user.svg';
import { tv } from '@/utils/tv';

type TextFieldProps = ComponentProps<'input'> & {
  title: string;
};

const textField = tv({
  slots: {
    container: 'flex flex-col gap-1',
    label: 'text-content-primary text-label-md',
    field:
      'flex items-center gap-2 rounded-lg border border-border-primary p-3 text-content-primary transition-colors duration-200 focus-within:border-border-brand focus-within:outline-none focus-within:ring-0 hover:border-border-secondary',
    input:
      'flex-1 bg-transparent outline-none placeholder:text-content-secondary',
    icon: 'size-5 shrink-0',
  },
});

export function TextField({ className, title, ...props }: TextFieldProps) {
  const inputId = useId();
  const { container, label, field, input, icon } = textField();

  return (
    <div className={container()}>
      <label htmlFor={inputId} className={label()}>
        {title}
      </label>

      <div className={field({ class: className })}>
        <UserIcon className={icon()} aria-hidden="true" />
        <input className={input()} id={inputId} type="text" {...props} />
        <ArrowDownIcon className={icon()} aria-hidden="true" />
      </div>
    </div>
  );
}
