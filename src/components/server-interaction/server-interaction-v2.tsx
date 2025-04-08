'use client';

import { actionExampleIncr, actionExampleReset } from '@/actions/example.action';
import { useMultiActionJotai } from '@/hooks/jotai-action';
import { exampleAtom } from '@/atoms/example.atom';

export default function ServerInteraction() {

  const [state, actions] = useMultiActionJotai(exampleAtom, {
    actionExampleIncr, actionExampleReset, 
  });

  return (
    <div>
      {state}
      <br />
      {' '}
      <button onClick={actions.actionExampleIncr}>+1</button>
      {' / '}
      <button onClick={actions.actionExampleReset} >Reset</button>
    </div>
  );
}