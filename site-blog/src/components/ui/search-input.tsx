import { SearchIcon } from 'lucide-react';
import { useRouter } from 'next/router';
import { type ChangeEvent, type FormEvent, useCallback } from 'react';

export function SearchInput() {
  const router = useRouter();
  const query = router.query.q as string;

  const handleSearch = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      if (query.trim()) {
        router.push(`/blog?q=${encodeURIComponent(query)}`);
      }
    },
    [query, router.push],
  );

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    router.push(`/blog?q=${encodeURIComponent(newQuery)}`, undefined, {
      shallow: true,
      scroll: false,
    });
  };

  return (
    <form
      onSubmit={handleSearch}
      className="group flex flex-row items-center gap-3 rounded-lg border border-gray-400 px-4 py-2.5 transition-colors duration-300 focus-within:border-blue-300 md:self-end"
    >
      <SearchIcon className="h-4 w-4 text-gray-300 group-focus-within:text-blue-200 group-has-[input:not(:placeholder-shown)]:text-blue-200" />
      <input
        type="text"
        placeholder="Buscar"
        className="bg-transparent text-body-sm text-gray-100 outline-none placeholder:text-gray-300"
        onChange={handleQueryChange}
      />
    </form>
  );
}
