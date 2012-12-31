/*jslint asi:true, undef:false, browser:true, sub:true*/
/*global console:true, browser:true */


(function ($) {

  $(document).on('click', 'a', handleClick)

  function handleClick (event) {
    var link = event.currentTarget
    // Middle click, cmd click, and ctrl click should open links in a new tab as normal
    if (event.which > 1 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    // Ignore cross origin links
    if (location.protocol !== link.protocol || location.host !== link.host) return
    // Ignore anchors on the same page
    if (link.hash && link.href.replace(url.hash, '') === location.href.replace(location.hash, '')) return
    if (link.href === location.href) return false
    // Ignore empty anchor "foo.html#"
    if (link.href === location.href + '#') return

    // else let's make it fancy
    event.preventDefault()
    return fadeTo(link.href)
  }

  function fadeTo(url) {
    var $content = $('.content')
    var animationComplete = false
    $content.load(url + ' .hentry', handleLoaded)
    function handleLoaded(thing) {
      if (!animationComplete)
        return setTimeout(handleLoaded, 10)

      pushState(url, 'Title')
      $content.css('left', '200%')
        .animate({ opacity: 1, left: 0 }, 700)
    }

    $('body').animate({ scrollTop: 0 }, 700, 'easeInOutCubic')
    $content.animate({ opacity: 0, left: '-200%' }, 700, function () { animationComplete = true })
  }

  function replaceState(url, title) {
    window.history.replaceState({}, title, url)
  }

  function pushState(url, title) {
    window.history.replaceState({}, title, url)
  }

  $(window).bind('popstate', onPopstate)
  function onPopstate (e) {
    console.log('onPopstate', arguments)

  }

  $.easing['easeInOutCubic'] = function easeInOutCubic(x, t, b, c, d) {
    if ((t /= d/2) < 1) return c/2*t*t*t + b;
    return c/2*((t-=2)*t*t + 2) + b;
  }

})(window.jQuery);



