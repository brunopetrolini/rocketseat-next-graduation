import { useCallback, useEffect, useState } from 'react';

type UseClipboardProps = {
  timeout?: number;
};

export function useClipboard({ timeout = 2000 }: UseClipboardProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = useCallback(async (text: string) => {
    if (!navigator?.clipboard) {
      console.error('Clipboard não suportado');
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);

      return true;
    } catch (error) {
      console.error(error);
      setIsCopied(false);

      return false;
    }
  }, []);

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, timeout);

      return () => clearTimeout(timer);
    }
  }, [isCopied, timeout]);

  return { handleCopy, isCopied };
}
