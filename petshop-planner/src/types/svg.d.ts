import type { FunctionComponent, SVGProps } from 'react';

declare module '*.svg' {
  const Component: FunctionComponent<SVGProps<SVGSVGElement>>;

  export default Component;
}
