let links = require('./_data/links.json')



module.exports = function(eleventyConfig) {

    eleventyConfig.addCollection("links", () => {
        return links.map((link) => {
            link.tags = link.tags ? link.tags.split(',') : []
            return link
        })
    });

    // Create an array of all tags
    eleventyConfig.addCollection("tagList", function(collection) {
        let tagSet = new Set();
        collection.getAll().forEach(item => {


            (item.data.tags || []).forEach(tag => tagSet.add(tag));
        });

        return [...tagSet];
    });

};