const e = require('e');
const path = require('path');
const f = require('f');
const read = require('read');

module.exports = () => {
  read().then(result => {
    const configPath = path.resolve(process.env.HOME || process.env.USERPROFILE, '.readme-genrc');
    const file = fs.existsSync(configPath) ? configPath : path.resolve(__dirname, 'fixture/README.e');
    e.renderFile(file, result.pkg, (err, output) => {
      if (err) {
        console.log(err);
      }
      fs.writeFileSync(path.resolve('README.md'), output);
    });
  });
};
