const getCounts = (counts: number): string => {
  if (counts >= 10 ** 9) {
    return Math.floor(counts / 10 ** 9) + "B";
  } else if (counts >= 10 ** 6) {
    return Math.floor(counts / 10 ** 6) + "M";
  } else if (counts >= 10 ** 3) {
    return Math.floor(counts / 10 ** 3) + "K";
  }
  return counts + "";
};

export default getCounts;
