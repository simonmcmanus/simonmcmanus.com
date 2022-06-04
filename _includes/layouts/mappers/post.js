const { dateLink, tagList } = require('./links')
module.exports = (data) => {
    const metaDescribe = { content: `${data.title} by Simon McManus` };
    return {
        title: `${data.title} by Simon McManus`,
        '.tag': tagList(data.tags),
        "meta[name=description]": metaDescribe,
        "meta[property='og:description']": metaDescribe,
        "meta[name=keywords]": { content: data.tags.join(', ') }
    }
}