import '../../polymer/polymer.js';
import { IronFormElementBehavior } from '../iron-form-element-behavior.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';

Polymer({
  is: 'simple-element',
  extends: 'input',
  behaviors: [
    IronFormElementBehavior
  ]
});
