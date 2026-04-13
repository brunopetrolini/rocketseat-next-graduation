import { LoaderCircleIcon } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex min-h-100 flex-col items-center justify-center px-4">
      <div className="relative">
        <LoaderCircleIcon className="size-16 animate-spin text-gray-400" />
        <div className="absolute top-0 left-0 h-full w-full animate-[spin_3s_linear_infinite] rounded-full border-cyan-200 border-t-2" />
      </div>
    </div>
  );
}
