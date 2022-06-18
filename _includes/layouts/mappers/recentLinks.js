const { parseISO } = require('date-fns')
const { dateLink, tagLink } = require('./links')

module.exports = (data) => ({
    '.recent-links article': data.pagination.items.map((link) => ({
        selectors: {
            'a.link': {
                href: link.url,
                selectors: {
                    'span.title': link.title,
                    img: {
                        alt: `fav icon for ${link.title}`,
                        src: `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${link.url}&size=30`
                    },
                }
            },
            '.summary': link.summary !== "" ? link.summary : { style: 'display: none;' },
            '.title': link.title,
            '.created': dateLink(parseISO(link.created)),
            '.tag': link.data.tags.map(tagLink),

        }
    })),
    '.next': data.pagination.hrefs.length - 1 > data.pagination.pageNumber ? {
        href: data.pagination.nextPageHref
    } : false,
    '.previous': data.pagination.pageNumber > 0 ? {
        href: data.pagination.previousPageHref
    } : false
})