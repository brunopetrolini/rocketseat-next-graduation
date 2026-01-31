import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        {
          text: [
            'heading-hg',
            'heading-xl',
            'heading-lg',
            'heading-md',
            'heading-sm',
            'heading-xs',
            'body-md',
            'body-sm',
            'body-xs',
            'action-md',
            'action-sm',
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
