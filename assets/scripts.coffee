---
---
(($) ->

  $(document).on 'click', 'a', handleClick

  handleClick = (event) ->
    link = event.currentTarget
    return if event.which > 1 or event.metaKey or event.ctrlKey or event.shiftKey or event.altKey
    return if location.protocol isnt link.protocol or location.host isnt link.host
    return if link.hash? and link.hash.replace url.hash '' is location.href.replace location.hash ''
    return false if location.href is link.href
    return if link.href is location.href + '#'

    event.preventDefault()
    fadeTo link.href

  fadeTo = (url) ->
    $content = $ '.content'
    animationComplete = false
    $content.load url + ' .hentry', handleLoaded
    handleLoaded = (thing) ->
      return setTimeout handleLoaded 10 unless animationComplete

      pushState url 'Title'
      $content
        .css('left', '200%')
        .animate({
          opacity: 1
          left: 0
        }, 700)

      $('body').animate { scrollTop: 0 }, 700, 'easeInOutCubic'
      $content.animate { opacity: 0, left: '-200%' }, 700, () ->
        animationComplete = true

  replaceState = (url, title) ->
    window.history.replaceState {}, title, url

  pushState = (url, title) ->
    window.history.pushState {}, title, url

  $(window).bind 'popstate', onPopstate

  onPopstate = (event) ->
    console.log 'onPopstate', event

  $.easing['easeInOutCubic'] = (x, t, b, c, d) ->
    return c/2*t*t*t +b if (t /= d/2) < 1
    c / 2 * ((t -=2) * t * t + 2) +b

)(window.jQuery)
