const { dateLink, tagList } = require('./links')
const { parseISO } = require('date-fns')

module.exports = (links) => {
    if (links.length === 0) {
        return false
    }

    return links.map((post) => {

        return {
            selectors: {
                "h5 span.title": post.title,
                '.created': dateLink(parseISO(post.created)),
                'a.link': {
                    href: post.url,
                    selectors: {
                        'span.title': {
                            innerHTML: post.title,
                        },
                        img: {
                            alt: `fav icon for ${post.title}`,
                            src: `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${post.url}&size=38`
                        },
                    },
                    target: '_blank'
                },
                ".tag": tagList(post.tags)
            }
        }
    })
}