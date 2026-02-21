import { allPosts } from 'contentlayer/generated';

import { LandingPage } from '@/templates/landing-page';

export default function Home() {
  console.log(allPosts);

  return <LandingPage />;
}
