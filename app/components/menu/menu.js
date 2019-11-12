/* eslint-disable */
const
  $ = window.$,
  menu = $(document).find('.js-menu');

export function openMenu () {
  menu.show(0, function () {
    $(this).css({ display: 'flex' }).addClass('is-active');
  });
}

export function closeMenu () {
  menu.removeClass('is-active');

  setTimeout(() => {
    menu.hide();
  }, globalOptions.animationDuration);
}

export function menuButton () {
  $(document).on('click', '.js-menu-close', closeMenu);
}
/* eslint-enable */
