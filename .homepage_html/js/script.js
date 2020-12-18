function startTime() { // days
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let t = setTimeout(startTime, 500);

    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('current-time').innerHTML = `<h1>${h}:${m}:${s}<h1>`;
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function search(query) {
    let qquery = decodeURIComponent(query);
    window.location.href = "https://duckduckgo.com/?q=" + qquery;
}
