import {
  CheckCircle2Icon,
  FacebookIcon,
  LinkedinIcon,
  LinkIcon,
  SlackIcon,
} from 'lucide-react';

export type ShareConfig = {
  url: string;
  title?: string;
  text?: string;
};

export type SocialProvider = 'linkedin' | 'facebook' | 'slack' | 'clipboard';

export const SOCIAL_PROVIDERS = {
  linkedin: {
    name: 'LinkedIn',
    icon: <LinkedinIcon />,
    shareUrl: (config: ShareConfig) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(config.url)}`,
  },
  facebook: {
    name: 'Facebook',
    icon: <FacebookIcon />,
    shareUrl: (config: ShareConfig) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(config.url)}`,
  },
  slack: {
    name: 'Slack',
    icon: <SlackIcon />,
    shareUrl: (config: ShareConfig) =>
      `https://slack.com/share?url=${encodeURIComponent(config.url)}&text=${encodeURIComponent(config.title || '')}`,
  },
  clipboard: {
    name: 'Copiar link',
    icon: <LinkIcon />,
    copiedIcon: <CheckCircle2Icon />,
    shareUrl: (config: ShareConfig) => config.url,
  },
};
