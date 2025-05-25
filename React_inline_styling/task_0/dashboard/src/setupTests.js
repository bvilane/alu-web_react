// Polyfill for JSDOM + Enzyme test environment
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

global.ReadableStream = require('web-streams-polyfill/ponyfill').ReadableStream;

// Setup Enzyme
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });
