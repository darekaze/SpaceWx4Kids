const color = [
  'green accent-4',
  'amber darken-1',
  'amber darken-2',
  'orange darken-2',
  'deep-orange darken-2',
  'deep-orange darken-3',
];

export default function (scale) {
  return color[scale] || 'blue';
}
