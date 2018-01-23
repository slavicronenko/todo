export function getClasses(classes) {
  return Object.keys(classes).filter((className) => !!classes[className]).join(' ');
}

export function getNextIndex(list, indexProp = 'id') {
  return list.reduce((currentIndex, item) => item[indexProp] >= currentIndex ? item[indexProp] : currentIndex, 0) + 1;
}

export function trimSpaces(str) {
  return str.replace(/^\s*|\s*$/g, '');
}
