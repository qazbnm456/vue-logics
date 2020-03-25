/* tslint:disable */

import isPlainObject from 'is-plain-object';
import VueLogics from './VueLogics.vue';

/**
 * The base logics library.
 */
class Logics {
  defaults: any;
  flowy: Logics.Flowy.FlowyElementInterface;
  options: Logics.Options | undefined;

  /**
   * Instantiate our base options.
   */
  constructor() {
    this.defaults = {
      components: {
        VueLogics,
      },
    };
    this.options = undefined;
  }

  /**
   * Install vue formulate, and register it’s components.
   */
  install(Vue, options) {
    Vue.prototype.$logics = this;
    this.options = this.defaults;
    this.extend(options || {});
    if (this.options) {
      for (let componentName in this.options.components) {
        Vue.component(componentName, this.options.components[componentName]);
      }
    }
  }

  /**
   * Given a set of options, apply them to the pre-existing options.
   * @param {Object} extendWith
   */
  extend(extendWith) {
    if (typeof extendWith === 'object') {
      this.options = this.merge(this.options, extendWith);
      return this;
    }
    throw new Error(`VueFormulate extend() should be passed an object (was ${typeof extendWith})`);
  }

  /**
   * Create a new object by copying properties of base and mergeWith.
   * Note: arrays don't overwrite - they push
   *
   * @param {Object} base
   * @param {Object} mergeWith
   * @param {boolean} concatArrays
   */
  merge(base, mergeWith, concatArrays = true) {
    const merged = {};
    for (let key in base) {
      if (mergeWith.hasOwnProperty(key)) {
        if (isPlainObject(mergeWith[key]) && isPlainObject(base[key])) {
          merged[key] = this.merge(base[key], mergeWith[key], concatArrays);
        } else if (concatArrays && Array.isArray(base[key]) && Array.isArray(mergeWith[key])) {
          merged[key] = base[key].concat(mergeWith[key]);
        } else {
          merged[key] = mergeWith[key];
        }
      } else {
        merged[key] = base[key];
      }
    }
    for (let prop in mergeWith) {
      if (!merged.hasOwnProperty(prop)) {
        merged[prop] = mergeWith[prop];
      }
    }
    return merged;
  }
}

export default new Logics();
