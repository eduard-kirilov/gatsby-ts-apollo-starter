/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
const raf = (global.requestAnimationFrame = cb => {
  setTimeout(cb, 0)
})

export default raf