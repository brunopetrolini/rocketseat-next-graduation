import { createTV } from 'tailwind-variants';

export const tv = createTV({
  twMergeConfig: {
    extend: {
      theme: {
        text: [
          'title',
          'paragraph-md',
          'paragraph-sm',
          'label-lg',
          'label-md',
          'label-sm',
          'link',
        ],
      },
    },
  },
});
