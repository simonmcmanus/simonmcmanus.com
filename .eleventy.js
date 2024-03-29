const pluginRss = require("@11ty/eleventy-plugin-rss");
const htmlmin = require("html-minifier");
let links = require('./_data/links.json')
const categories = require('./_data/categories.json')
var urlSafe = require("./lib/url-safe");

const categoriesByTag = {}

categories.forEach((category) => {
    category.tags.forEach((tag) => {
        categoriesByTag[urlSafe(tag)] = category
    })
})

links = links.reverse().map((link) => {
    link.data = {}
    link.data.tags = link.tags.map(tag => urlSafe(tag))
    return link
})

module.exports = function(eleventyConfig) {
    eleventyConfig.setLiquidOptions({
        dynamicPartials: false,
        strictFilters: false, // renamed from `strict_filters` in Eleventy 1.0
    });
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPassthroughCopy({ static: "/" });
    const byTags = {};
    const addTag = (tag, type, detail) => {
        const categoryInfo = categoriesByTag[urlSafe(tag)]
        if (!byTags[tag]) {
            byTags[tag] = {
                ...categoriesByTag[tag],
                links: [],
                posts: [],
                tags: []
            }
        }
        byTags[tag]['tags'].push(detail.tags)
        byTags[tag][type].push(detail)
    }

    links.forEach((link) => {
        link.data.tags.forEach((tag) => addTag(tag, 'links', {
            title: link.title,
            url: link.url,
            summary: link.summary,
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

        links.forEach((link) => {

            link.tags.forEach(tag => tagSet.add(tag))

        })
        collection.getAll().forEach(item => {
            return (item.data.tags || []).forEach(tag => tagSet.add(tag));
        });

        return [...tagSet];
    });

    eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
        // Eleventy 1.0+: use this.inputPath and this.outputPath instead
        if (outputPath && outputPath.endsWith(".html")) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            });
            return minified;
        }

        return content;
    });

};