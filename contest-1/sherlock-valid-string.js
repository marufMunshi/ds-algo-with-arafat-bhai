function isValid(s) {
  const charmap = new Map();
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (charmap.has(char)) {
      charmap.set(char, charmap.get(char) + 1);
    } else {
      charmap.set(char, 1);
    }
  }

  // console.log(charmap);

  let previousValue = 0;

  charmap.forEach((value, key, map) => {
    if (previousValue === 0) {
      previousValue = value;
    } else {
      if (previousValue !== value) {
        count++;
      }
    }
  });

  if (count <= 1) {
    return "YES";
  }

  return "NO";
}

console.log(isValid("abc"));
console.log(isValid("abcc"));
console.log(isValid("abcdefghhgfedecba"));
console.log(isValid("aabbccddeefghi"));
