const { dateLink, tagList } = require('./links')
module.exports = (data) => ({
    title: `${data.title} by Simon McManus`,
    '.tag': tagList(data.tags),
    "meta[name=keywords]": { content: data.tags.join(', ') }
})