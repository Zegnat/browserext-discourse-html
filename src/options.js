'use strict'

const input = document.querySelector('input')
const tbody = document.querySelector('tbody')
const template = document.querySelector('template').content
let cache = []

function drawTable (patterns) {
  cache = patterns
  tbody.innerHTML = ''
  for (let pattern of patterns) {
    template.querySelector('input').value = pattern
    tbody.appendChild(document.importNode(template, true))
  }
}

document.querySelector('form').addEventListener('submit', submit => {
  submit.preventDefault()
  let pattern = input.value
  if (pattern.length > 0) {
    input.value = ''
    browser.storage.local.set({
      patterns: [pattern, ...cache].filter((v, i, a) => a.indexOf(v) === i)
    })
  }
})

tbody.addEventListener('click', click => {
  if (click.target.nodeName === 'BUTTON') {
    let pattern = click.target.parentNode.parentNode.querySelector('input').value
    browser.storage.local.set({patterns: cache.filter(item => item !== pattern)})
  }
})

browser.storage.onChanged.addListener(({patterns}) => {
  if (patterns !== undefined) {
    drawTable(patterns.newValue)
  }
})

browser.storage.local.get({patterns: []})
  .then(({patterns}) => drawTable(patterns))
