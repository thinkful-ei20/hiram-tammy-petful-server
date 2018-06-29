'use strict';

const Pet = {
  get: function(){
    return Object.keys(this.items.map(key => this.items[key]));
  }
};