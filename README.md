# Hypertext JavaScript => <span style="background-color: gold; color: #444; padding: 4px 9px; border-radius: 3px;">HJS</span>

> Hypertext JavaScript

## install

`$ npm i --save-dev annar-js`
<!-- anar-js -->
<!-- anar.js -->
<!-- annar.js -->

## usage

```js
import { render } from 'hjs';

const MyComponent = {
  tag: 'div',
  class: 'container',
  dataset: { flex: 'row' },
};

const html = render(MyComponent);

//=> <div class="container" data-flex="row"></div>
```
