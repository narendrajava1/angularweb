// /api/country/all/?key=
const COUNTRY_API_KEY='f365ef83970fa74164ba4395c5d67a9b'
var Common_CountryURLS='http://battuta.medunes.net';
var BACKEND_PORT = process.env.BACKEND_PORT || 8080;
const PROXY_CONFIG={
    "/api/country/proxy": {
        "target": Common_CountryURLS,
        "secure": false,
        // "bypass": function (req, res, proxyOptions) {
        //     if (req.headers.accept.indexOf("html") !== -1) {
        //         console.log("Skipping proxy for browser request.");
        //         return "/index.html";
        //     }
        //     req.headers["X-Custom-Header"] = "yes";
        // }
    }
}

module.exports = PROXY_CONFIG;