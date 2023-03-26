export type OptType = {
  id: number;
  name: string;
  icon: JSX.Element;
  action: Function;
  disabled: boolean;
  redirect?: string;
};
