module.exports = function(wallaby) {
  return {
    files: [
      'lessons/**/*.js',
      'package.json',
      { pattern: 'lessons/**/*.spec.js', ignore: true }
    ],
    tests: ['lessons/**/*.spec.js'],
    testFramework: 'jest',
    compilers: {
      'lessons/**/*.js': wallaby.compilers.babel()
    },
    env: {
      type: 'node',
      runner: 'node'
    },
    workers: {
      recycle: false
    }
  }
}
