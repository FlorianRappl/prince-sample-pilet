const { readFileSync, writeFileSync } = require('fs');

const path = require.resolve('phaser');
const oldContent = readFileSync(path, 'utf8');
const rules = [
  ["var Phaser = Phaser", "var Phaser = window.Phaser = Phaser"],
  ["var PIXI = PIXI", "var PIXI = window.PIXI = PIXI"],
  ["var p2 = module.exports", "var p2 = window.p2 = module.exports"],
];

const newContent = rules.reduce((content, [before, after]) => {
  return content.replace(before, after);
}, oldContent);

writeFileSync(path, newContent, 'utf8');
