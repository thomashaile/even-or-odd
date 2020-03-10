function saveHandler() {
    debugger;
    // write me!
    const data = document.getElementById('input').value;
    //const input = parseInt(data);
    if (isNaN(data)) {
        strings.NaNy.push(data);
    } else {
        if (parseInt(data) % 2 === 0) {
            strings.evens.push(data);
        } else if (parseInt(data) % 2 === 1)
            strings.odds.push(data);
    }
    document.getElementById('input').value = '';

    // log user interaction: handler name, user input, new state
    log.push({
        handler: 'save',
        newInput: data,
        strings: JSON.parse(JSON.stringify(strings))
    });
}