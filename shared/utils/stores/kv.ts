const serverState: Record<string, any> = {};

export const setter = (key: string, value: any) => {
  serverState[key] = value;
};

export const getter = (key: string) => {
  return serverState[key];
};

export const getAll = () => {
  return serverState;
};
