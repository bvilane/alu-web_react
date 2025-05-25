// src/setupTests.js

const { TextEncoder, TextDecoder } = require('util');

if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
}
if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = TextDecoder;
}

// ✅ Add this for ReadableStream
if (typeof global.ReadableStream === 'undefined') {
  // Lazy fallback to polyfill
  global.ReadableStream = require('web-streams-polyfill/ponyfill').ReadableStream;
}

const { StyleSheetTestUtils } = require('aphrodite');
beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

const Enzyme = require('enzyme');
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');
Enzyme.configure({ adapter: new Adapter() });
