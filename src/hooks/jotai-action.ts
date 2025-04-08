'use client';

import { Atom, useAtom } from 'jotai';
import { useCallback, useMemo } from 'react';

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


type PromiseInObject<T> = { [key: string]: (state: T) => Promise<T> };
export function useMultiActionJotai<T, K extends PromiseInObject<T>>(
  atom: Atom<T>,
  actions: K
): [T, Record<keyof K, () => void>] {
  
  const [value, setValue] = useAtom<T>(atom);

  const jotaiActions = useMemo(( ) => Object.entries(actions).reduce((acc, [key, action]) => {
    return {
      ...acc,
      [key]: () => action(value).then(setValue)
    };
  }, {}), [actions, value])

  return [value, jotaiActions as Record<keyof K, () => void>]
}