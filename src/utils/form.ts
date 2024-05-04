export const formDataToObject = (
  formData: FormData
): Record<string, unknown> => {
  const records: Record<string, unknown> = {};

  // eslint-disable-next-line unicorn/no-array-for-each
  formData.forEach((value, key) => {
    records[key] = value;
  });

  return records;
};
