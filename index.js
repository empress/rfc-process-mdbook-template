'use strict';

var Funnel = require('broccoli-funnel');

const { join } = require('path');

module.exports = {
  name: require('./package').name,

  treeForPublic() {
    return new Funnel(join(this.root, 'public'));
  },

  contentFor(type) {
    if (type === 'head') {
      // preload the most common fonts for modern browsers
      return `<link rel="preload" as="font" type="font/woff2" href="/fonts/open-sans-v16-latin-regular.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="/fonts/open-sans-v16-latin-700.woff2" crossorigin>`;
    }
  },
};
