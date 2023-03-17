function isBalanced(s) {
  if (s.length % 2 !== 0) {
    return "NO";
  }

  const closeToOpenBrackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  // first char is close bracket
  if (closeToOpenBrackets[s[0]] !== undefined) {
    return "NO";
  }

  let stringLength = s.length;
  let index = 0;

  while (stringLength > 0) {
    const element = s[index];

    // console.log("element", element);

    if (closeToOpenBrackets[element] !== undefined) {
      const openBracket = closeToOpenBrackets[element]; // (

      // console.log("openBracket", openBracket);

      if (openBracket === s[index - 1]) {
        const s1 = s.slice(0, index - 1);
        const s2 = s.slice(index + 1, s.length);
        // console.log("s1", s1);
        // console.log("s2", s2);

        s = s1 + s2;

        index = -1;
        stringLength = s.length;
      } else {
        return "NO";
      }
    }

    index++;
  }

  return "YES";
}

// console.log(isBalanced("{[()]}")); // yes
// console.log(isBalanced("{[(])}")); // no
// console.log(isBalanced("{{[[(())]]}}")); // yes

// console.log(isBalanced("{(([])[])[]}")); // yes

console.log(isBalanced("{(([])[])[]]}")); // no
