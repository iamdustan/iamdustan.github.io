(function() {

  (function($) {
    var fadeTo, handleClick, onPopstate, pushState, replaceState;
    handleClick = function(event) {
      var link;
      link = event.currentTarget;
      if (event.which > 1 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }
      if (location.protocol !== link.protocol || location.host !== link.host) {
        return;
      }
      if ((link.hash != null) && link.href.replace(link.hash, '') === location.href.replace(location.hash, '')) {
        return;
      }
      if (location.href === link.href) {
        return false;
      }
      if (link.href === location.href + '#') {
        return;
      }
      event.preventDefault();
      return fadeTo(link.href);
    };
    fadeTo = function(url) {
      var $content, animationComplete, handleLoaded;
      $content = $('.content');
      animationComplete = false;
      handleLoaded = function(thing) {
        if (!animationComplete) {
          return setTimeout(handleLoaded, 10);
        }
        pushState(url, 'Title');
        return $content.css('left', '200%').animate({
          opacity: 1,
          left: 0
        }, 700);
      };
      $content.load(url + ' .hentry', handleLoaded);
      $('body').animate({
        scrollTop: 0
      }, 700, 'easeInOutCubic');
      return $content.animate({
        opacity: 0,
        left: '-200%'
      }, 700, function() {
        return animationComplete = true;
      });
    };
    replaceState = function(url, title) {
      return window.history.replaceState({}, title, url);
    };
    pushState = function(url, title) {
      return window.history.pushState({}, title, url);
    };
    onPopstate = function(event) {
      return console.log('onPopstate', event);
    };
    $.easing['easeInOutCubic'] = function(x, t, b, c, d) {
      if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t + b;
      }
      return c / 2 * ((t -= 2) * t * t + 2) + b;
    };
    $(window).bind('popstate', onPopstate);
    return $(document).on('click', 'a', handleClick);
  })(window.jQuery);

}).call(this);
