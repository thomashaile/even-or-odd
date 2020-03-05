function saveHandler() {
  debugger;
  // write me!

  // log user interaction: handler name, user input, new state
  log.push({
    handler: 'save',
    newInput,
    strings: JSON.parse(JSON.stringify(strings))
  })
}
