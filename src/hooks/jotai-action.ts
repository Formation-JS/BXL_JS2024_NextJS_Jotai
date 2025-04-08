'use client';

import { Atom, useAtom } from 'jotai';
import { useCallback } from 'react';

export function useActionJotai<T>(
  atom: Atom<T>,
  action: (state: T) => Promise<T>
): [T, () => void] {

  const [value, setValue] = useAtom<T>(atom);

  const jotaiAction = useCallback(() => {
    action(value).then(setValue);
  }, [action, value]);

  return [value, jotaiAction];
};