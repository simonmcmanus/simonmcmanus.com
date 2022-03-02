const pluginRss = require("@11ty/eleventy-plugin-rss");

let links = require('./_data/links.json')
const categories = require('./_data/categories.json')
var urlSafe = require("./lib/url-safe");

const categoriesByTag = {}


categories.forEach((category) => {
    category.tags.forEach((tag) => {
        categoriesByTag[urlSafe(tag)] = category
    })

})

links = links.map((link) => {
    link.data = {}
    link.data.tags = link.tags.map(tag => urlSafe(tag))
    return link
})

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPassthroughCopy({ static: "/" });
    const byTags = {};
    const addTag = (tag, type, detail) => {
        const categoryInfo = categoriesByTag[urlSafe(tag)]
        if (!byTags[tag]) {
            byTags[tag] = {
                ...categoriesByTag[tag],
                links: [],
                posts: []
            }
        }
        byTags[tag][type].push(detail)
    }

    links.forEach((link) => {
        link.data.tags.forEach((tag) => addTag(tag, 'links', {
            title: link.title,
            url: link.url,
            tags: link.data.tags,
            created: link.created
        }))
    })

    eleventyConfig.addCollection('byTag', (collection) => {
        collection.getAll().forEach(item => {
            const tags = item.data.tags
            if (tags) {
                tags.forEach((tag) => addTag(urlSafe(tag), 'posts', {
                    title: item.data.title,
                    url: item.url,
                    tags: item.data.tags,
                    created: item.data.date
                }))
            }
        })
        return byTags
    });


    eleventyConfig.addCollection('links', (collection) => links)

    // Create an array of all tags
    eleventyConfig.addCollection("tagList", function(collection) {
        let tagSet = new Set();
        collection.getAll().forEach(item => {
            return (item.data.tags || []).forEach(tag => tagSet.add(tag));
        });

        return [...tagSet];
    });

};