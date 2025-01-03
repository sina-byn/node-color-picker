# node-color-picker [![NPM version](https://img.shields.io/npm/v/node-color-picker.svg?style=flat)](https://www.npmjs.com/package/node-color-picker) [![NPM monthly downloads](https://img.shields.io/npm/dm/node-color-picker.svg?style=flat)](https://npmjs.org/package/node-color-picker) [![NPM total downloads](https://img.shields.io/npm/dt/node-color-picker.svg?style=flat)](https://npmjs.org/package/node-color-picker)

A simple terminal color picker for Node.js.

![Demo GIF](assets/demo.gif)

## Installation

```shell
npm i node-color-picker
```

## Usage

```js
// * index.js

import { colorPicker } from 'node-color-picker';

const app = async () => {
  const color = await colorPicker();
  console.log(color);
};
```

Then run :

```shell
node index.js
```

## Options

|      |  Type   | Default |           Description           |
|------|---------|---------|---------------------------------|
| hint | boolean | `True`  | Whether to show the hint or not |

```
colorPicker(options);
```