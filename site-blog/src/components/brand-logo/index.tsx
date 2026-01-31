import Image from 'next/image';
import Link from 'next/link';

export function BrandLogo() {
  return (
    <Link href="/">
      <Image
        src="/assets/brand-logo.svg"
        alt="brand logo"
        width={115}
        height={32}
      />
    </Link>
  );
}
