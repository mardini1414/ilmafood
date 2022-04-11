function formatNumber(number) {
  return new Intl.NumberFormat('IN', {
    maximumSignificantDigits: 3,
  }).format(number);
}

export default formatNumber;
