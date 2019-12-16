// ==UserScript==
// @author    wesinator
// @name     Text file hasher
// @version  1
// @grant    none
// @require  https://nf404.github.io/crypto-api/crypto-api.min.js
// @match  *://*/*
// ==/UserScript==

if (document.contentType == "text/plain") {
    console.log("plaintext file detected");
    var textContent = document.documentElement.innerText;

    var sha256 = sha256(textContent);
    console.log("SHA256:", sha256);
}

function sha256(content) {
    // https://github.com/nf404/crypto-api#using-in-browser-es5
    /*
    var hasher = CryptoApi.getHasher('sha256');
    hasher.update(content);
    return CryptoApi.encoder.toHex(hasher.finalize());
    */
    return CryptoApi.hash('sha256', content);
}
