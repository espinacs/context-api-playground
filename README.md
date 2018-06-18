
<div align="center">
<h1>Fronk</h1>

<img height="80" width="80" alt="goat" src="https://www.mariowiki.com/images/thumb/a/a9/GameWario_Fronk.png/200px-GameWario_Fronk.png" />

<p>Front End React Components Library</p>
</div>

## Using this library

(This library is not available for downloading from npm yet. Once it is, usage instructions will be provided)

## Development

1. Clone the repository by: `git clone git@github.com:wakoopa/fronk.git`
2. Move to folder: `cd fronk`
3. Install dependencies with `npm install` or `yarn install`

There is not a default `dev` command. All of the components are developed through an [Storybook |https://storybook.js.org/] environment.

## Using Storybook

In order to start your development environment, you will need to start the Storybook server.

Run `npm run storybook`

Once it is done, you will be able to see every story at [http://localhost:9001](http://localhost:9001)


In order to include a new story in Storybooks, just create it

```javascript
// /.storybook/stories/YourStory.stories.jsx
import React from 'react';
import { storiesOf } from '@storybook/react';
import MyComponent from '../../src/components/MyComponent';

storiesOf('Your Stories', module)
  .add('First Story', () => <MyComponent {...myProps} />);
```

When this environment is running, all the code (component, story and styles) are hot reloaded.

Also, some stories are synchronized with its components tests using the [Jest Addon](https://github.com/storybooks/storybook/tree/master/addons/jest), so it is good to run also the `npm run test:watch` command.
This is only one of the addons added to the environment.

## Available Commands

- `npm run lint` - execute linter check with ESLint. Default config is set at .eslintrc.
- `npm run test` - run all tests and updates coverage report.
- `npm run test:watch` - run all tests in watch mode, and outputs results for storybook synchronization.
- `npm run storybook` - Explained at [`Using Storybook`](#using-storybook)
- `npm run storybook:build` - create a storybook production ready build in `/.out` folder
- `npm run build` - creates a build of the library in `/dist` folder
- `npm run clean` - Removes the folder created with a build command
- `npm run transpile` - Creates a package version for its distribution from its build




