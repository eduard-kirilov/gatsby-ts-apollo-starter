/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
// eslint-disable-next-line
const raf = require('./tempPolyfills');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
//import toJson from 'enzyme-to-json'
const { shallow, render, mount } = Enzyme;
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() })

global.shallow = shallow
global.render = render
global.mount = mount
//global.toJson = toJson

// Fail tests on any warning
console.error = message => {
  throw new Error(message)
}