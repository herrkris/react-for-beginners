const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

function isDirectory(dir) {
  return fs.lstatSync(dir).isDirectory()
}

const SubjectsDir = path.join(__dirname, 'subjects');
const SubjectDirs = fs.readdirSync(SubjectsDir).filter(function (dir) {
  return isDirectory(path.join(SubjectsDir, dir))
});

module.exports = {
  devtool: 'source-map',

  entry: SubjectDirs.reduce(function (entries, dir) {
    if (fs.existsSync(path.join(SubjectsDir, dir, 'exercise.js')))
      entries[dir + '-exercise'] = path.join(SubjectsDir, dir, 'exercise.js')

    if (fs.existsSync(path.join(SubjectsDir, dir, 'solution.js')))
      entries[dir + '-solution'] = path.join(SubjectsDir, dir, 'solution.js')

    if (fs.existsSync(path.join(SubjectsDir, dir, 'lecture.js')))
      entries[dir + '-lecture'] = path.join(SubjectsDir, dir, 'lecture.js')

    return entries
  }, {
    shared: [ 'react', 'react-dom' ]
  }),

  output: {
    path: '__build__',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '__build__'
  },

  resolve: {
    extensions: [ '', '.js', '.css' ]
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.js$/, exclude: /node_modules|mocha-browser\.js/, loader: 'babel' },
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'shared' })
  ],

  devServer: {
    quiet: false,
    noInfo: false,
    stats: {
      assets: true,
      colors: true,
      version: true,
      hash: true,
      timings: true,
      chunks: false,
      chunkModules: false
    }
  }
};
