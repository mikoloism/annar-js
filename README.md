# HJS

> Hypertext JavaScript

## install

`$ npm i --save-dev hjs`

## usage

```js
import { render } from 'hjs';
const MyComponent = {
  tag: 'div',
  class: 'container',
  dataset: { flex: 'row' },
};
const html = render(MyComponent);
// <div class="container" data-flex="row"></div>
```
