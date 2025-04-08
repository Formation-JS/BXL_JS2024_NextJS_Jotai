'use client';

import { actionExampleIncr, actionExampleReset } from '@/actions/example.action';
import { useActionJotai } from '@/hooks/jotai-action';
import { exampleAtom } from '@/atoms/example.atom';

export default function ServerInteraction() {
  
  const [state, action1] = useActionJotai(exampleAtom, actionExampleIncr);

  return (
    <div>
      {state}
      <br/>
      Server : <button onClick={action1}>+1</button>
      <br/>
      {/* Server : <button onClick={action2} >Reset</button> */}
    </div>
  )
}