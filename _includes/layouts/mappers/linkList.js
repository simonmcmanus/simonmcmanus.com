const { parseISO } = require('date-fns')
const { dateLink } = require('./links')

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
                    target: '_blank'
                }
            }
        }
    })
}