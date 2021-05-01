import render from './render';
import renderFile from './compiler';
import createHjs, { Component, createComponent } from './create-hjs';
import * as JOM from './jom';
import * as DOM from './dom';
import utils from './utils';

export { renderFile, createHjs, Component, createComponent, DOM, JOM, utils };
export default render;
