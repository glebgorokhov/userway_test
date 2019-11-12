/* eslint-disable */
const $ = window.$;

import {openMenu} from "../menu/menu";

export function burgerButton () {
  $(document).on('click', '.js-burger-button', openMenu);
}
/* eslint-enable */
