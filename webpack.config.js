const glob = require('glob');
const path = require('path');

const config = {
    entry: glob.sync('./packages/*/src/index.js').reduce((acc, path) => {
        const entry = path.replace('src/index.js', '');
        acc[entry] = path;
        return acc;
    }, {}),

    output: {
        filename: './[name]/dist/index.js',
        libraryTarget: 'umd',
        path: path.resolve(__dirname),
        globalObject: 'this',
    }
};

module.exports = config;
