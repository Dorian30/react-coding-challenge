export const SORTING = {
  Date: (a: string, b: string, order: 'asc' | 'desc') =>
    order === 'asc'
      ? new Date(a).getTime() - new Date(b).getTime()
      : new Date(b).getTime() - new Date(a).getTime(),
  Cases: (a: string, b: string, order: 'asc' | 'desc') =>
    order === 'asc' ? Number(a) - Number(b) : Number(b) - Number(a)
};
