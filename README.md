# Pickify.io front-end

The source code for the front-end of the `Pickify.io` website.

## Table of contents

1. [Prerequisites](#prerequisites)
2. [Install and Use](#install-and-use)
3. [Dependencies](#dependencies)
4. [Folder Structure](#folder-structure)

## Prerequisites

To use this project you should have the following on your machine:

1. `Node.js`
2. `yarn`

## Install and Use

To install the project you have to:

1. Clone the repository:
   `git clone https://github.com/m3ntorship/Pickify-frontend.git` or the `ssh url`.

2. Install packages:
   `yarn`

3. Run the project:
   `yarn dev`

4. Run the tests:
   `yarn test`

5. Open storybook:
   `yarn storybook`

## Dependencies

The project is built `next.js` mainly, `Tailwind` for styling and `jest` with `testing-library` for testing.

## Folder Structure

The main folder structure of the code is structured like the following:

```ts
├── context
|   ├── AuthUserContext
|   |   ├── api
|   |   |   └── authApi.ts
|   |   |   └── IAuth.d.ts
|   |   ├── hooks
|   |   |   └── useFireBaseAuth
|   |   ├── AuthUserContext.tsx
├── modules
│   ├── HomePage // The module name
│   │   ├── api
│   │   │   └── DeletePostApi
│   │   |       ├── deletePostHelper.ts
│   │   |       └── deletePost.test.ts
│   │   |       └── deletePostApi.ts
│   │   |       └── IDeletePostApi.d.ts
│   │   ├── components
│   │   │   └── Posts
│   │   │       ├── posts.tsx
│   │   │       └── postsHelper.ts
|   |   |       └── posts.test.tsx
│   │   ├── index.js
│   │   ├── pages
│   │   │   └── home-page.tsx
│   │   │   └── home-page.module.css
│   │   |    
│   └── shared
│       ├── api
│       │   └── example1.api.ts
│       ├── components
│       │   └── atoms
│       │   |  └── Button
|       |   |      ├── Button.ts
|       |   |      ├── Button.module.ts
|       |   |      ├── Button.test.tsx
|       |   |      ├── Button.stories.tsx
|       |   |      └── types
|       |   ├── molecules
|       |   ├── organisms
|       |   └── icons
│       ├── logic
│       │   └── generateErrMsg
|       |       ├── generateErrMsg.ts
|       |       └── generateErrMsg.test.ts
│       └── configuration
│       └── hooks
│       └── types
├── pages
│   ├── api
│   ├── posts 
|   |   └── [id].tsx
│   ├── _app.js
│   ├── _document.js
│   └── index.js
├── public
│   └── favicon.ico
├── README.md
├── setup-tests.js
├── styles
│   └── globals.css
├── next.config.js
├── tailwind.config.js
└── yarn.lock
```

- The structure is modular, this means that the project is encapsulated into modules, each of them will be handling a single page.

- Every module will have a separated folder that contains its own `components`, `api` for api calls, `logic` for business logic of the module, `tests`, `pages` which contains the pages that belongs to the module and `index.js` file which is the entry point of the module.

- Also there's the `shared` module which contains the components, api calls and logic that's shared across all the modules e.g: `Layout` component.

```sh
- e.g: Articles module =>  components folder + api folder (api calls, data being fetched,..etc)+ hooks folder(any custom hook in use for that module) + logic folder(any utils or helper functions e.g: date format)


+ index file( that is the entry point for exports/imports) + Pages folder (includes the page the module is displaying)

```

> Note: `it is preferd in naming any file, to have the same name as the function it is holding. e.g: util named "SideClickHandler" expected to be in a file named "SideClickHandler"`

- The pages folder in the project main directory will be responsible for handling the project `sh "Routes"`

- Each module create will have a corresponding file created inside the pages, that imports it and handle it to be displayed.

- Styling :will be using the TW classes, in case we needed a custom styling to be applied, we could use CSS modules `sh (as recommended by the NextJs)`

>      e.g: CompName.module.css [to be added inside the component folder]

- Global components, hooks or logic will be stored into the "Shared" folder. e.g: shared layouts, atoms,...etc.

### The difference between the pages/ and modules/\<module-name>/pages/ folders

The `pages/` folder is the `next.js` generated folder where the routes are setup. The `/modules/**/pages/` folder are where we put the code of the page. The pages folder will call the pages of the module only, it shouldn't contain any logic or extra code, just import the page.

### Issues:

- #### [To submit a new issue visit the issues tab or click here ](https://github.com/m3ntorship/pickify-frontend/issues)

> - Make sure to check the list of current issues (avoid duplication)

> - Use decriptive title for the ticket, add illustrative description of the issue:
>   Issue nature
>   Local dev environement
>   Steps to reproduce
>   Code snippet if possible
>   Expected behviour
>   Output and expected output
>   Screenshots if it is a visual issue (before and after if needed)

> - Assign the project

> - Make sure to use the proper label from the list.
