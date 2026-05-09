import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
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
});

export function cn(...classes: (string | false | null | undefined)[]) {
  return twMerge(classes.filter(Boolean).join(" "))
}
