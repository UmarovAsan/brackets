module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const openingBrackets = [];
  const closingBrackets = {};
  const balancedPairs = new Set();

  for (const pair of bracketsConfig) {
    const [open, close] = pair;
    openingBrackets.push(open);
    closingBrackets[close] = open;
    if (open === close) {
      balancedPairs.add(open);
    }
  }

  for (const char of str) {
    if (openingBrackets.includes(char)) {
      if (!balancedPairs.has(char) || stack[stack.length - 1] !== char) {

        stack.push(char);
      } else {

        stack.pop();
      }
    } else if (closingBrackets[char]) {

      if (stack.length === 0 || stack.pop() !== closingBrackets[char]) {
        return false;
      }
    } else {

    }
  }

  return stack.length === 0;
};