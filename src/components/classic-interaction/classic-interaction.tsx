'use client';

import { exampleAtom } from '@/atoms/example.atom';
import { useSetAtom } from 'jotai';
import { useCallback } from 'react';

export default function ClassicInteraction() {

  const setExemple = useSetAtom(exampleAtom);

  const handleClick = useCallback(() => {
    setExemple(val => val +1);
  }, []);

  return (
    <div>
      Classic : <button onClick={handleClick}>+1</button>
    </div>
  )
}