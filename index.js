const $ = require('jquery')

const updateDOM = (input, value) => {
  $(`.${input}`).empty()
  $(`.${input}`).append(value)
}

module.exports = updateDOM
