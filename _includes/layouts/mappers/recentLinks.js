const { parseISO } = require('date-fns')
const { dateLink, tagLink } = require('./links')

module.exports = (data) => ({
    '.recent-links li': data.collections.links.slice(-10).reverse().map((link) => ({
        selectors: {
            'a.link': {
                href: link.url,
                selectors: {
                    'span.title': link.title,
                    img: {
                        src: `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${link.url}&size=30`
                    },
                }
            },
            '.title': link.title,
            '.created': dateLink(parseISO(link.created)),
            '.tag': link.data.tags.map(tagLink)
        }
    }))
})