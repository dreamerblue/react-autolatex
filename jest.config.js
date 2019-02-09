module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/testSetup.js'],
  testMatch: [
    '**/__tests__/*.(ts|tsx|js)',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
