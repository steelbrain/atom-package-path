'use strict'

const callsite = require('sb-callsite')
const nameRegex = /[\\\/]packages[\\\/]([^\\\/]+)[\\\/]/

export function guessFromFilePath(filePath) {
  const matches = nameRegex.exec(filePath)
  return matches ? matches[1] : null
}

export function guess() {
  const filePath = callsite.capture()[2].file
  return guessFromFilePath(filePath)
}
