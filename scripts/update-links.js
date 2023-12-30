var superagent = require("superagent");
var fs = require("fs");
var moment = require("moment");
var urlSafe = require("../lib/url-safe");
var url = require("url");

var Encoder = require("node-html-encoder").Encoder;
var encoder = new Encoder("entity");
var urlFormat = "YYYY-MM-DD";

superagent
    .get("https://simonmcmanus.netlify.app/.netlify/functions/list-links")
    .set('Accept', 'application/json')
    .end(function(error, data) {




        if (!data)
            return

        var links = data.body
            .filter(link => {
                return link.title, link.url;
            })
            .map(link => {
                const tags = link.tags.split(",");
                if (tags) {
                    link.tags = tags;
                }
                if (link.created) {

                    link.date = link.created.substring(0, 10) || new Date();
                }
                return link;
            });
        fs.writeFile(
            __dirname + "/../_data/links.json",
            JSON.stringify(links, null, 4),
            function(e, d) {
                if (e) throw e;
                console.log(console.log("Fetching latest links..."));
                console.log(console.log("  ok"));
            }
        );
    });