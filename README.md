<p align="center">
  <a href="https://reactjs.org/">
    <img alt="React" title="React" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" width="60" />
  </a>
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" title="Gatsby" src="https://avatars1.githubusercontent.com/u/12551863?s=200&v=4" width="60" />
  </a>
  <a href="https://nodejs.org/">
    <img alt="Jest" title="Jest" src="https://cdn.freebiesupply.com/logos/large/2x/jest-logo-png-transparent.png" width="50"/>
  </a>
  <a href="https://www.typescriptlang.org/">
    <img alt="TypeScript" title="TypeScript" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" width="50"/>
  </a>
    <a href="https://styled-components.com/">
    <img alt="Styled-components" title="Styled-components" src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" width="50"/>
  </a>
    </a>
    <a href="https://material-ui.com/">
    <img alt="Material-UI" title="Material-UI" src="https://camo.githubusercontent.com/cf05625198fe7b6ad8a302d1ce16bc99b93ec2ac/68747470733a2f2f6d6174657269616c2d75692e636f6d2f7374617469632f6c6f676f2e737667" width="50"/>
  </a>
</p>
<br/>
<h1 align="center">
  React, Gatsby, Jest, TypeScript, Apollo - Starter
</h1>
<p align="center">
  This starter is a ready-made configuration that includes Gatsby, React, Redux, Apollo, GraphQL, TypeScript, Styled-Components, Material-UI, Jest, Enzyme.
</p>

<img alt="demo" src="./src/images/demo.gif" max-width="100"/>

## Demo:
- **Frontend: [ph0en1x.ru](https://ph0en1x.ru/).**
- **Backend: [ph0en1x.ru/graphqll](https://ph0en1x.ru/graphql).**  
  

## ⭐️ Advantage

- **This starter is configured to interact with GraphQL of your backend through Apollo.**
- **Strong typing with TypeScript.**
- **[Typescript, Apollo, Mongo - backend](https://github.com/eduard-kirilov/node-ts-apollo-auth-starter).**
- **Unit tests based on jest and enzyme.**
- **In this starter, Styled-components and Material-UI can be used simultaneously.**
- **This starter has tuned redux with reselect on board**

## 🚀 Quick start

1.  **You need to install dependencies.**

    You can use yarn or npm.

    ```shell
    # install dependencies
    yarn
    # or
    npm install
    ```

1.  **Create the .env.development and .env.production**

    Create the .env.development and .env.production file from the .env.example file.
    Description of environment variables:
    - GATSBY_API_URL - your URL for GraphQL;
    - GATSBY_MEDIA_URL - your URL for media resources.

1.  **Start the project.**

    You can start a project using yarn or npm.

    ```shell
    # install dependencies
    yarn start
    # or
    npm run start
    ```

    Once launched, the app will be available on `http://localhost:8000`!
    
    _You will also see a second link: _`http://localhost:8000/__graphql`_.
    This is a tool that you can use to experiment with requesting your data if you export it to Gatsby, but since this project uses a separate server, you can access it at `<Your backend / graphql>https://ph0en1x.ru/graphql`.


## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── __mocks __
    ├── jest
    ├── plugins
    ├── src
    ├──/──components
    ├──/──compose
    ├──/──gql
    ├──/──images
    ├──/──pages
    ├──/──stores
    ├──/──styles
    ├──/──utils
    ├── .env
    ├── .gitignore
    ├── .prettierrc
    ├── configureStore.ts
    ├── custom.d.ts
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── gatsby-top-layout.js
    ├── jest.config.js
    ├── LICENSE
    ├── loadershim.js
    ├── package.json
    ├── tempPolyfills.js
    ├── tsconfig.json
    └── README.md

1.  **`/__mocks __`**: __mocks __ - necessary for jest tests to work correctly [You can read more here](https://www.gatsbyjs.org/docs/unit-testing/#2-creating-a-configuration-file-for-jest).

1.  **`/jest`**: - the configuration referenced by jest.config.js.

1.  **`/plugins`**: - a plugin that is needed to build material-ui styles.

1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

1.  **`configureStore.ts`**: Redux reducers are connected in this file.

1.  **`custom.d.ts`**: This file is necessary for proper svg processing with TepeScript.

1.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

1.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

1.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

1.  **`gatsby-top-layout.js`**: gatsby-top-layout.js - In this file happens:
- Providing store in react-redux;
- prefetching and data provider in @ apollo / client;
- Providing topics in material-ui, styled-components and authorization;
- Providing authorization data through AuthProvider.

1.  **`LICENSE`**: React, Gatsby, Jest, TypeScript, Apollo - Starter is licensed under the MIT license.

1.  **`jest.config.js`**: Here is the unit test configuration.

1. **`package-lock.json or yarn.lock`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

1. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

1. **`README.md`**: A text file containing useful reference information about your project.


This starter is based on [Gatsby starter default](https://github.com/gatsbyjs/gatsby-starter-default)
