'use client';

import { exampleAtom } from '@/atoms/example.atom';
import { useAtomValue } from 'jotai';

export default function NavAction() {
  const example = useAtomValue(exampleAtom);

  return (
    <p>Atom : {example}</p>
  )
};