export const required = (value) => {
  if (value) return undefined;
  return "Field is required";
};

export const minLenghtCreator = (minLenght) => (value) => {
  if (value.length >= minLenght) return undefined;
  return `Enter at least ${minLenght} characters`;
};
