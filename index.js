const updateDOM = (input, value) => {
  $(`.${input}`).empty();
  $(`.${input}`).append(value)
}
