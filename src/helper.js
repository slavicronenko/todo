export function getClasses(classes) {
  return Object.keys(classes).filter((className) => !!classes[className]).join(' ');
}

export function getNextIndex(list, indexProp = 'id') {
  return list.reduce((currentIndex, item) => item[indexProp] >= currentIndex ? item[indexProp] : currentIndex, 0) + 1;
}

export function filterWithConditions (collection, conditions, matchAll = true) {
  return collection.filter((...args) => conditions.reduce((result, condition) => condition(...args) && (!matchAll || result), true));
}

export const ESCAPE_KEY = 27;
export const ENTER_KEY = 13;