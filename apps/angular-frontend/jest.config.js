module.exports = {
  name: 'angular-frontend',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular-frontend',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
