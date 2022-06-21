module.exports = options => {
  options.loader['.fnt'] = 'file';
  options.loader['.json'] = 'file';
  options.loader['.mp3'] = 'file';
  return options;
};
