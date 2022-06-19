let initCookie = () => {
    document.cookie = 'username=;'
}

// function initCookie() {
//     const d = new Date();
//     d.setTime(d.getTime() - 24 * 60 * 60 * 1000);
//     let expires = "expires=" + d.toUTCString();
//     document.cookie = "username='';" + expires + ";path=/";
// }

function getCookieKeysAndValues() {
    let decodedCookie = decodeURI(document.cookie);
    result = {}
    if (decodedCookie) {
        let keysAndValues = decodedCookie.split(';');
        for (let pair of keysAndValues) {
            let sPair = pair.split('=');
            let key = sPair[0].trim();
            result[key] = sPair[1].trim();
        }
    }
    return result;
}

// function getCookieKeysAndValues() {
//     let result = {};
//     let decodedCookie = document.cookie;
//     let keysAndValues = decodedCookie.split(';');
//     if (keysAndValues.length > 1) {
//         for (let pair of keysAndValues) {
//             let sPair = pair.split('=');
//             let key = sPair[0].trim();
//             result[key] = sPair[1].trim();
//         }
//     }
//     return result;
// }
// function resetCookie() {
//     initCookie("username", "");
// }
//
//
//

//
// function addCookieField(key, value) {
//     document.cookie += key + "=" + value.toString();
// }
//
//
//
//
// function getCookieValue(key) {
//     let _key = key + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let keysAndValues = decodedCookie.split(';');
//     for (let i = 0; i < keysAndValues.length; i++) {
//         let c = keysAndValues[i];
//         while (c.charAt(0) === ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(_key) === 0) {
//             return c.substring(_key.length, c.length);
//         }
//     }
//     return "";
// }

function main() {
    initCookie();
    let cookieDisplay = document.getElementById("cookie_display");

}