import render from './render';
import renderToFile from './compiler';
import createHjs, { Component, createComponent } from './create-hjs';
import * as JOM from './jom';
import * as DOM from './dom';
import utils from './utils';

export { renderToFile, createHjs, Component, createComponent, DOM, JOM, utils };
export default render;
