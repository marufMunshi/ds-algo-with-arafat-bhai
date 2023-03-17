/**
 * if input text contains all the english alphabets
 * then it's panagram
 */

function pangrams(s) {
  const charMap = new Map();
  const lowerCaseRegex = new RegExp("[a-z]");

  for (let i = 0; i < s.length; i++) {
    const lowerCaseChar = s[i].toLowerCase();

    if (
      charMap.has(lowerCaseChar) === false &&
      lowerCaseRegex.test(lowerCaseChar)
    ) {
      charMap.set(lowerCaseChar, 1);
    }
  }

  if (charMap.size === 26) {
    return "pangram";
  }

  return "not pangram";
}

console.log(pangrams("maruf")); // not
console.log(
  pangrams(
    "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z"
  )
); // pana
console.log(pangrams("")); //not
console.log(
  pangrams("We promptly judged antique ivory buckles for the next prize")
); // pana
console.log(pangrams("We promptly judged antique ivory buckles for the prize")); //not

console.log(
  pangrams(
    "A, B, C, D, E, F, G, H, I, J, K, L,     M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z"
  )
); // pana

console.log(
  pangrams(
    "A, V, C, D, E, F, G, H, I, J, V, V,     V, N, O, P, Q, R, S, T, U, V, W, X, Y, Z"
  )
); // not

console.log(pangrams("AAAAA aaaaa aaaaaa BBBBB CCCCC VVVVVV CCCC DDDD dddd"));
