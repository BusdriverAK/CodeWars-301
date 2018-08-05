function insertDash(num) {
  const oddDash = num.toString();
  return oddDash.replace(/([13579])(?=[13579])/g, '$1-');
}