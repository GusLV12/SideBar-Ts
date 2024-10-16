export const classesCss = (...args: any[]): string => {
  return args.filter(Boolean).join(' ');
};
