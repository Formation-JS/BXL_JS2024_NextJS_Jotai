'use server';

export type ExampleState = number;


export const actionExampleIncr = async (state: ExampleState): Promise<ExampleState> => {
  console.log('Server Incr');
  return state + 1;
};

export const actionExampleReset = async (state: ExampleState): Promise<ExampleState> => {
  console.log('Server Reset');
  return 0;
};