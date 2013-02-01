---
---
(($) ->

  handleClick = (event) ->
    link = event.currentTarget
    # Middle click, cmd click, and ctrl click should open links in a new tab as normal
    return if event.which > 1 or event.metaKey or event.ctrlKey or event.shiftKey or event.altKey
    # Ignore cross origin links
    return if location.protocol isnt link.protocol or location.host isnt link.host
    # Ignore anchors on the same page
    return if link.hash? and link.href.replace(link.hash, '') is location.href.replace(location.hash, '')
    return false if location.href is link.href
    # Ignore empty anchor "foo.html#"
    return if link.href is location.href + '#'

    # else let's make it fancy
    event.preventDefault()
    fadeTo link.href, link.innerText

  fadeTo = (url, title) ->
    $content = $ '.content'
    animationComplete = false
    handleLoaded = (thing) ->
      return setTimeout(handleLoaded, 10) unless animationComplete

      console.log thing
      pushState url, title
      $content
        .css('left', '200%')
        .animate({
          opacity: 1
          left: 0
        }, 700)

    $content.load url + ' .content', handleLoaded
    $('body').animate { scrollTop: 0 }, 700, 'easeInOutCubic'
    $content.animate { opacity: 0, left: '-200%' }, 700, () ->
      animationComplete = true


  replaceState = (url, title) ->
    document.title = title
    window.history.replaceState {}, title, url

  pushState = (url, title) ->
    document.title = title
    window.history.pushState {}, title, url


  onPopstate = (event) ->
    console.log 'onPopstate', event

  $.easing['easeInOutCubic'] = (x, t, b, c, d) ->
    return c/2*t*t*t + b if (t /= d/2) < 1
    c / 2 * ((t -=2) * t * t + 2) + b

  $(window).bind 'popstate', onPopstate
  $(document).on 'click', 'a', handleClick
)(window.jQuery)
