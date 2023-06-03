const defaultPreset = require('ts-jest/jest-preset')
const mongodbPreset = require('@shelf/jest-mongodb/jest-preset')

module.exports = {
  ...defaultPreset,
  ...mongodbPreset,
}
