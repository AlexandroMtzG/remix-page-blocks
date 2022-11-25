export type Command = {
  title: string;
  command: string;
  description: string;
  bgClassName?: string;
  textClassName?: string;
  toPath?: string;
  adminOnly?: boolean;
  items?: Command[];
  onSelected?: () => void;
};
