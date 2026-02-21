import { SearchInput } from '@/components/ui/search-input';

export default function BlogPage() {
  return (
    <div className="container mt-24 flex h-full grow flex-col">
      <header className="flex flex-col gap-6 md:flex-row md:justify-between">
        <div className="flex flex-col gap-3 md:max-w-md">
          {/* Tag */}
          <span className="w-fit rounded-sm bg-cyan-300 px-3 py-1.5 text-body-tag text-cyan-100">
            Blog
          </span>

          {/* Title */}
          <h1 className="text-left font-sans text-gray-100 text-heading-lg md:text-heading-xl">
            Dicas e estratégias para impulsionar seu negócio
          </h1>
        </div>

        {/* Search */}
        <SearchInput />
      </header>

      {/* Posts */}
    </div>
  );
}
