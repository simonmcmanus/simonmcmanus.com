const { dateLink, tagLink } = require('./links')

module.exports = (post) => ({
    selectors: {
        'a.link': {
            innerHTML: post.data.title,
            href: post.url
        },
        '.created': dateLink(post.date),
        '.tag': post.data.tags.filter(tag => tag != 'post').map(tagLink)
    }
})