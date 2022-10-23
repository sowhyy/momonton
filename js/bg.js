var color = '#';
var letters = [
  'e4ebf5',
  'f5e4e4',
  'f5e4ef',
  'f0e4f5',
  'e4f4f5',
  'e4f5e7',
  'eef5e4',
  'f5eee4',
  'f5eae4',
  'f5e4e4',
  'ede4f5',
  'e3e3e3',
];

color += letters[Math.floor(Math.random() * letters.length)];
document.getElementById('wrap').style.background = color;
