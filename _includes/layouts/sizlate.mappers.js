const { formatDistance, format, parse, parseISO } = require('date-fns')

const dateLink = (date) => {
    return {
        href: '/' + format(date, 'dd-MM-yyyy') + '/index.html',
        innerHTML: formatDistance(date, new Date(), { addSuffix: true }),
    }
}
const mappers = {
    // takes the post array and produces a linked list
    listPosts: (data) => {

        return {
            '.recent-posts li': data.collections.post.slice(-10).reverse().map((post) => {

                return {
                    selectors: {
                        'a.link': {
                            innerHTML: post.data.title,
                            href: post.url
                        },
                        '.created': dateLink(post.date),
                        '.tag': post.data.tags.map((tag) => {
                            return {
                                innerHTML: tag,
                                href: `/tags/${tag}`
                            }
                        })

                    }
                }
            }),

        }
    },
    pagination: (data) => {
        return {
            '.posts a': data.collections[data.tag].map((post) => {
                return {
                    innerHTML: post.data.title,
                    href: post.url,
                    selectors: {
                        '.tag': [false]

                    }
                }
            }),

        }
    },
    tagList: (data) => {
        return {
            '.tags a': data.collections.tagList.map((tag) => {
                return {
                    innerHTML: tag,
                    href: `/tags/${tag}`
                }
            })
        }
    },
    listLinks: (data) => {


        return {
            '.recent-links li': data.collections.links.slice(-10).reverse().map((link) => {
                const title = link.title
                return {
                    selectors: {
                        'a.link': {
                            innerHTML: title,
                            href: link.url
                        },
                        '.title': title,
                        '.created': dateLink(parseISO(link.created)),
                        '.tag': link.tags.map((tag) => {
                            return {
                                innerHTML: tag,
                                href: `/tags/${tag}`
                            }
                        })

                    }
                }
            })
        }
    },

}


module.exports = mappers;