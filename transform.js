const postcss = require('postcss');
const postcssHasPseudo = require('css-has-pseudo/postcss');
const fs = require('fs')

fs.readFile('index-to-transform.css', (err, css) => {
  postcss([postcssHasPseudo()])
    .process(css, { from: 'index-to-transform.css', to: 'index.css' })
    .then(result => {
      fs.writeFile('index.css', result.css, () => true)
    });
});
