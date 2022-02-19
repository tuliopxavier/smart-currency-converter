export const useDolarConverter = (
  dolarValue: number,
  dolarPTAX: number,
  spreadPercentage: number,
  IOF: number
) => {
  const convertedValue = ( dolarValue * (dolarPTAX * (1 + spreadPercentage / 100)) * (1 + IOF / 100) ).toFixed(2);

  return convertedValue;
};
