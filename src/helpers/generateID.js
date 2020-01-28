export const generateRandomID = function () {
  return '_' + Math.random().toString(36).substr(1, 8);
};