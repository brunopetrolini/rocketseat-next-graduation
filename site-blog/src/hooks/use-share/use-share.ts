import { useCallback, useMemo } from 'react';

import { useClipboard } from '../use-clipboard';
import {
  type ShareConfig,
  SOCIAL_PROVIDERS,
  type SocialProvider,
} from './constants';

type UseShareProps = ShareConfig & {
  clipboardTimeout?: number;
};

export function useShare({
  url,
  title,
  text,
  clipboardTimeout = 2000,
}: UseShareProps) {
  const { handleCopy, isCopied } = useClipboard({ timeout: clipboardTimeout });

  const shareConfig = useMemo(
    () => ({
      url,
      ...(title && { title }),
      ...(text && { text }),
    }),
    [url, title, text],
  );

  const share = useCallback(
    async (provider: SocialProvider) => {
      try {
        if (provider === 'clipboard') {
          return await handleCopy(url);
        }

        const providerConfig = SOCIAL_PROVIDERS[provider];

        if (!providerConfig)
          throw new Error(`Provider não suportado: ${provider}`);

        const shareUrl = providerConfig.shareUrl(shareConfig);
        const shareWindow = window.open(shareUrl, '_blank');

        return !!shareWindow;
      } catch (error) {
        console.error(error);
      }
    },
    [shareConfig, handleCopy, url],
  );

  const shareButtons = useMemo(
    () => [
      ...Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => {
        if (key === 'clipboard') {
          return {
            provider: 'clipboard',
            name: isCopied ? 'Link copiado!' : 'Copiar link',
            icon: isCopied
              ? SOCIAL_PROVIDERS.clipboard.copiedIcon
              : SOCIAL_PROVIDERS.clipboard.icon,
            action: () => share('clipboard'),
          };
        }

        return {
          provider: key,
          name: provider.name,
          icon: provider.icon,
          action: () => share(key as SocialProvider),
        };
      }),
    ],
    [share, isCopied],
  );

  return { shareButtons };
}
