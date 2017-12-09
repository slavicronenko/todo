export function getClasses(classes) {
  return Object.keys(classes).filter((className) => !!classes[className]).join(' ');
}