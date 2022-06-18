const { dateLink, tagLink } = require('./links')

module.exports = (data) => {
    const numberToShow = data.showRecent || 30
    return {
        '.recent-posts li': data.collections.post.slice(-numberToShow).reverse().map((post) => ({
            selectors: {
                'a.link': {
                    innerHTML: post.data.title,
                    href: post.url
                },
                '.created': dateLink(post.date),
                '.tag': post.data.tags.filter(tag => tag != 'post').map(tagLink)
            }
        }))
    }
}