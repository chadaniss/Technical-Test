function findPrefix(input = []) {
  let output = '';
  if (!input.length) {
    return output;
  }
  if (input.length === 1) {
    return input[0];
  }
  const temp = input[0];
  for (let i = 0; i < temp.length; i++) {
    if (!input.every((v) => v[i] && v[i] === temp[i])) {
      break;
    }
    output += temp[i];
  }
  return output;
}

(() => {
  const input = ['dog', 'racecar', 'car'];
  console.log('input: ', input);
  const output = findPrefix(input);
  console.log(`output: "${output}"`);
})();
