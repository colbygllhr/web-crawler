
function normalizeURL(url) {
    let normalizedURL;
    const myURL = new URL(url)

    let host = myURL.hostname.toLowerCase();
    let pathname = myURL.pathname.toLowerCase();

    if (pathname.endsWith('/')) {
        pathname = pathname.slice(0, -1);
        normalizedURL = host + pathname
    } else {
        normalizedURL = host + pathname
    }

    return normalizedURL

}


export { normalizeURL };