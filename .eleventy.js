let links = require('./_data/links.json')


links = links.map((link) => {
    link.data = {}
    link.data.tags = []
    if (typeof link.tags === 'string') {
        link.data.tags = link.tags.split(',') || []

    }
    return link
})

module.exports = function(eleventyConfig) {


    const byTags = {};
    const addTag = (tag, type, detail) => {
        if (!byTags[tag]) {
            byTags[tag] = []
        }
        byTags[tag].push(detail)
    }

    links.forEach((link) => {
        link.data.tags.forEach((tag) => addTag(tag, 'links', {
            title: link.title
        }))
    })

    eleventyConfig.addCollection('byTag', (collection) => {
        collection.getAll().forEach(item => {
            const tags = item.data.tags
            if (tags) {
                tags.forEach((tag) => addTag(tag, 'posts', {
                    title: item.data.title
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
            //return (item.data.tags || []).forEach(tag => tagSet.add(tag));
        });

        return [...tagSet];
    });

};