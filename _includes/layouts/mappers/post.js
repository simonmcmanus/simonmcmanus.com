const { dateLink, tagList } = require('./links')
module.exports = (data) => {
    return {
        title: `${data.title} by Simon McManus`,
        '.tag': tagList(data.tags),
        "meta[name=description]": { content: `${data.title} by Simon McManus` },
        "meta[name=keywords]": { content: data.tags.join(', ') }
    }
}