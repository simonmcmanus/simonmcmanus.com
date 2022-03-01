const { dateLink, tagLink } = require('../../../lib/links')

module.exports = (data) => ({
    '.recent-posts li': data.collections.post.slice(-10).reverse().map((post) => ({
        selectors: {
            'a.link': {
                innerHTML: post.data.title,
                href: post.url
            },
            '.created': dateLink(post.date),
            '.tag': post.data.tags.filter(tag => tag != 'post').map(tagLink)
        }
    }))
})