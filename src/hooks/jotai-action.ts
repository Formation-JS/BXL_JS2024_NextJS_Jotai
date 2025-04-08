'use client';

import { Atom, useAtom } from 'jotai';
import { useCallback, useEffect } from 'react';


export const useActionJotai = (
  atom: Atom<number>,
  action: (state: number) => Promise<number>
): [number, () => void] => {

  const [value, setValue] = useAtom<number>(atom);

  const jotaiAction = useCallback(() => {
    console.log('Client !');
    action(value).then(setValue);
  }, [action, value]);

  return [value, jotaiAction];
}; 