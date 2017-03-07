const npm = require('rollup-plugin-node-resolve')
const cjs = require('rollup-plugin-commonjs')
const rps = require('rollup-plugin-sourcemaps')

module.exports = {
  entry   : './src/main.js',
  dest    : './dist/hanger.js',
  format  : 'iife',
  acorn: {
    // Necessary to avoid bundler errors when using await
    // (in totally legitimate circumstances!)
    allowReserved: true,
  },
  plugins : [
    npm(),
    cjs(),
    rps(),
  ],
}
