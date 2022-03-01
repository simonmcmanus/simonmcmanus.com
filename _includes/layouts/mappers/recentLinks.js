const { parseISO } = require('date-fns')
const { dateLink, tagLink } = require('./links')

module.exports = (data) => ({
    '.recent-links li': data.collections.links.slice(-10).reverse().map((link) => ({
        selectors: {
            'a.link': {
                innerHTML: link.title,
                href: link.url
            },
            '.title': link.title,
            '.created': dateLink(parseISO(link.created)),
            '.tag': link.data.tags.map(tagLink)
        }
    }))
})