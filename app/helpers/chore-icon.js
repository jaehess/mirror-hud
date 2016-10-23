import Ember from 'ember';

const GARBAGE = /garbage|trash/ig;
const POOL = /pool/ig;

export function choreIcon(params) {
  let text = params[0];
  let css = "check-square-o";

  if (text.search(GARBAGE) >= 0) {
    css = "trash-o";
  } else if (text.search(POOL) >= 0) {
    css = "life-ring";
  }

  return Ember.String.htmlSafe(`${text} <i class="fa fa-${css}"></i>`);
}

export default Ember.Helper.helper(choreIcon);
