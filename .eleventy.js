let links = require('./_data/links.json')



module.exports = function(eleventyConfig) {

    eleventyConfig.addCollection("links", () => {
        return links
    });

};