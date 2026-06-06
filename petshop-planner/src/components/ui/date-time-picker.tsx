'use client';

import { Popover as BasePopover } from '@base-ui/react/popover';
import { type DayButtonProps, DayPicker, TZDate } from '@daypicker/react';
import { ptBR } from '@daypicker/react/locale';
import { addMinutes } from 'date-fns';
import { CalendarIcon, ClockIcon } from 'lucide-react';
import {
  type ChangeEvent,
  type CSSProperties,
  useId,
  useMemo,
  useState,
} from 'react';

import { tv } from '@/utils/tv';

const TIME_ZONE = 'America/Sao_Paulo';

type DateTimePickerProps = {
  title: string;
  value?: Date;
  onChange: (value?: Date) => void;
  error?: string;
  placeholder?: string;
  disabled?: boolean;
};

const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  timeZone: TIME_ZONE,
  dateStyle: 'short',
});

const timeFormatter = new Intl.DateTimeFormat('pt-BR', {
  timeZone: TIME_ZONE,
  timeStyle: 'short',
});

const datePartsFormatter = new Intl.DateTimeFormat('en-CA', {
  timeZone: TIME_ZONE,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

const pickerVariants = tv({
  slots: {
    container: 'flex flex-col gap-1',
    label: 'text-content-primary text-label-md',
    field:
      'flex w-full items-center gap-2 rounded-lg border border-border-primary p-3 text-content-primary transition-colors duration-200 focus-within:border-border-brand focus-within:outline-none focus-within:ring-0 hover:border-border-secondary disabled:cursor-not-allowed disabled:opacity-60',
    value: 'flex-1 truncate bg-transparent text-left outline-none',
    placeholder: 'text-content-secondary',
    icon: 'size-5 shrink-0 text-content-brand fill-background-highlights',
    positioner: 'z-60',
    popup:
      'rounded-lg border border-border-primary bg-background-tertiary p-4 text-content-primary shadow-xl outline-none',
    calendar: String.raw`[&_.rdp-button\_next:focus-visible]:outline [&_.rdp-button\_next:focus-visible]:outline-border-brand [&_.rdp-button\_next:focus-visible]:outline-offset-2 [&_.rdp-button\_previous:focus-visible]:outline [&_.rdp-button\_previous:focus-visible]:outline-border-brand [&_.rdp-button\_previous:focus-visible]:outline-offset-2 [&_.rdp-day\_button:focus-visible]:outline [&_.rdp-day\_button:focus-visible]:outline-border-brand [&_.rdp-day\_button:focus-visible]:outline-offset-2`,
    timeWrapper:
      'mt-3 flex items-center justify-between gap-3 border-border-divisor border-t pt-3',
    timeLabel: 'text-content-primary text-label-md',
    timeField:
      'relative flex items-center rounded-lg border border-border-primary bg-transparent text-content-primary transition-colors duration-200 focus-within:border-border-brand hover:border-border-secondary',
    timeInput:
      'w-28 bg-transparent py-2 pr-10 pl-3 text-content-primary text-paragraph-md outline-none disabled:cursor-not-allowed [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-y-0 [&::-webkit-calendar-picker-indicator]:right-3 [&::-webkit-calendar-picker-indicator]:my-auto [&::-webkit-calendar-picker-indicator]:h-5 [&::-webkit-calendar-picker-indicator]:w-5 [&::-webkit-calendar-picker-indicator]:opacity-0',
    timeIcon:
      'pointer-events-none absolute right-3 size-5 shrink-0 text-content-brand',
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

const calendarStyles = {
  '--rdp-accent-color': 'var(--color-content-brand)',
  '--rdp-accent-background-color': 'var(--color-background-highlights)',
  '--rdp-day_button-border-radius': '0.5rem',
  '--rdp-day_button-height': '2.25rem',
  '--rdp-day_button-width': '2.25rem',
  '--rdp-selected-border': '2px solid transparent',
  '--rdp-today-color': 'var(--color-content-brand)',
} as CSSProperties;

const selectedDayCellStyles = {
  fontSize: 'inherit',
  fontWeight: 'inherit',
} as CSSProperties;

const selectedDayButtonStyles = {
  backgroundColor: 'var(--color-background-brand)',
  borderColor: 'transparent',
  borderRadius: '0.5rem',
  color: 'var(--color-background-primary)',
  fontWeight: 700,
} as CSSProperties;

function DayButton({ modifiers, style, ...props }: DayButtonProps) {
  return (
    <button
      {...props}
      style={{
        ...style,
        ...(modifiers.selected ? selectedDayButtonStyles : undefined),
      }}
    />
  );
}

function getSaoPauloParts(date: Date) {
  const parts = datePartsFormatter.formatToParts(date);
  const values = Object.fromEntries(
    parts.map((part) => [part.type, part.value]),
  );

  return {
    year: Number(values.year),
    month: Number(values.month),
    day: Number(values.day),
    hour: Number(values.hour),
    minute: Number(values.minute),
  };
}

function toDateInputValue(date: Date) {
  const { year, month, day } = getSaoPauloParts(date);

  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(
    2,
    '0',
  )}`;
}

function toTimeInputValue(date: Date) {
  const { hour, minute } = getSaoPauloParts(date);

  return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
}

function createZonedDate(
  day: Date,
  time: string,
  fallbackDate?: Date,
): Date | undefined {
  const [hourValue, minuteValue] = time.split(':');
  const hour = Number(hourValue);
  const minute = Number(minuteValue);

  if (Number.isNaN(hour) || Number.isNaN(minute)) {
    return fallbackDate;
  }

  return new TZDate(
    day.getFullYear(),
    day.getMonth(),
    day.getDate(),
    hour,
    minute,
    0,
    0,
    TIME_ZONE,
  );
}

function getInitialTimeForDay(day: Date, now: Date) {
  if (toDateInputValue(day) !== toDateInputValue(now)) {
    return '09:00';
  }

  return toTimeInputValue(addMinutes(now, 1));
}

function formatSelectedDateTime(date: Date) {
  return `${dateFormatter.format(date)} às ${timeFormatter.format(date)}`;
}

export function DateTimePicker({
  title,
  value,
  onChange,
  error,
  placeholder = 'Selecione data e hora',
  disabled,
}: DateTimePickerProps) {
  const inputId = useId();
  const errorId = `${inputId}-error`;
  const isInvalid = Boolean(error);
  const [open, setOpen] = useState(false);
  const [month, setMonth] = useState<Date | undefined>(value);
  const {
    container,
    label,
    field,
    value: valueStyles,
    placeholder: placeholderStyles,
    icon: iconStyles,
    positioner,
    popup,
    calendar,
    timeWrapper,
    timeLabel,
    timeField,
    timeInput,
    timeIcon,
  } = pickerVariants({ invalid: isInvalid });

  const now = useMemo(() => TZDate.tz(TIME_ZONE), []);
  const selectedDate = value;
  const selectedTime = value ? toTimeInputValue(value) : '';
  const today = toDateInputValue(now);
  const selectedDay = value ? toDateInputValue(value) : undefined;
  const minTime =
    selectedDay === today ? toTimeInputValue(now as Date) : undefined;

  function handleSelect(day: Date | undefined) {
    if (!day) {
      onChange(undefined);
      return;
    }

    const nextDate = createZonedDate(
      day,
      selectedTime || getInitialTimeForDay(day, now),
      value,
    );
    onChange(nextDate);
    setMonth(day);
  }

  function handleTimeChange(event: ChangeEvent<HTMLInputElement>) {
    const time = event.target.value;

    if (!value) {
      return;
    }

    onChange(createZonedDate(value, time, value));
  }

  return (
    <div className={container()}>
      <label htmlFor={inputId} className={label()}>
        {title}
      </label>

      <BasePopover.Root open={open} onOpenChange={setOpen}>
        <BasePopover.Trigger
          id={inputId}
          type="button"
          className={field()}
          disabled={disabled}
          aria-invalid={isInvalid}
          aria-describedby={isInvalid ? errorId : undefined}
        >
          <CalendarIcon
            className={iconStyles()}
            aria-hidden="true"
            focusable="false"
          />

          <span
            className={valueStyles({
              class: value ? undefined : placeholderStyles(),
            })}
          >
            {value ? formatSelectedDateTime(value) : placeholder}
          </span>
        </BasePopover.Trigger>

        <BasePopover.Portal>
          <BasePopover.Positioner sideOffset={8} className={positioner()}>
            <BasePopover.Popup className={popup()}>
              <DayPicker
                className={calendar()}
                style={calendarStyles}
                mode="single"
                locale={ptBR}
                timeZone={TIME_ZONE}
                selected={selectedDate}
                month={month}
                onMonthChange={setMonth}
                onSelect={handleSelect}
                disabled={{ before: now }}
                modifiersStyles={{ selected: selectedDayCellStyles }}
                components={{ DayButton }}
              />

              <div className={timeWrapper()}>
                <label htmlFor={`${inputId}-time`} className={timeLabel()}>
                  Horário
                </label>
                <div
                  className={timeField({
                    class: !value || disabled ? 'opacity-60' : undefined,
                  })}
                >
                  <input
                    id={`${inputId}-time`}
                    className={timeInput()}
                    type="time"
                    step={60}
                    min={minTime}
                    value={selectedTime}
                    disabled={!value || disabled}
                    onChange={handleTimeChange}
                  />
                  <ClockIcon
                    className={timeIcon()}
                    aria-hidden="true"
                    focusable="false"
                  />
                </div>
              </div>
            </BasePopover.Popup>
          </BasePopover.Positioner>
        </BasePopover.Portal>
      </BasePopover.Root>

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
