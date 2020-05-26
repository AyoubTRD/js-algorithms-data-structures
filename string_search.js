function searchString(str, search) {
  const length = search.length;
  if (str.length < length) return [];
  let result = "";
  let indexes = [];
  for (let i = 0; i < length; i++) {
    result += str[i];
  }
  if (result === search) indexes.push(0);
  for (let i = length; i < str.length; i++) {
    result = result.substring(1) + str[i];
    if (result === search) indexes.push(i - length + 1);
  }
  return indexes;
}

module.exports = searchString;
