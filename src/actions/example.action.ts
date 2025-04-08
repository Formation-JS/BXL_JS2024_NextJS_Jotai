'use server';

export type ExampleState = number;


export const actionExampleIncr = async (state: ExampleState): Promise<ExampleState> => {
  return state + 1;
};

export const actionExampleReset = async (state: ExampleState): Promise<ExampleState> => {
  return 0;
};