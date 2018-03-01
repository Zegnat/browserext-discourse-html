'use strict'

const trigger = '_escaped_fragment_'

function rewriter (request) {
  let url = new window.URL(request.url)
  if (url.searchParams.has(trigger) === false) {
    url.searchParams.set(trigger, '')
    return { 'redirectUrl': url.href }
  }
}
function register (patterns) {
  browser.webRequest.onBeforeRequest.removeListener(rewriter)
  if (patterns.length > 0) {
    browser.webRequest.onBeforeRequest.addListener(
      rewriter,
      {urls: patterns, types: ['main_frame', 'sub_frame']},
      ['blocking']
    )
  }
}

browser.storage.onChanged.addListener(({patterns}) => {
  if (patterns !== undefined) {
    register(patterns.newValue)
  }
})

browser.storage.local.get({patterns: []})
  .then(({patterns}) => register(patterns))
