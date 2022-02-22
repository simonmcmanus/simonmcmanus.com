const { formatDistance, format, parse, parseISO } = require('date-fns')

const dateLink = (date) => {
    if (!date) {
        return false
    }


    return {
        // href: '/' + format(date, 'dd-MM-yyyy') + '/index.html',
        //innerHTML: formatDistance(date, new Date(), { addSuffix: true }),
        innerHTML: format(date, 'dd-MM-yyyy'),
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
                        '.tag': post.data.tags.filter(tag => tag != 'post').map((tag) => {
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
            ".title": data.title,
            '.links_holder li': data.collections.byTag[data.tag].links.map((post) => {

                return {
                    selectors: {
                        "h5 span.title": post.title,
                        '.created': dateLink(parseISO(post.created)),
                        'a.link': {

                            href: post.url,
                            target: '_blank'
                                // selectors: {
                                //     '.tag': [false]

                            // }

                        }
                    }
                }
            }),
            '.posts_holder li': data.collections.byTag[data.tag].posts.map((post) => {
                return {
                    selectors: {
                        "h5 span.title": post.title,
                        //'a.created': post.created,
                        'a.link': {
                            href: post.url,
                            // selectors: {
                            //     '.tag': [false]

                            // }

                        }
                    }
                }
            }),

        }
    },
    tagList: (data) => {
        return {
            '.tags li': data.collections.tagList.map((tag) => {
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
                        '.tag': link.data.tags.map((tag) => {
                            return {
                                innerHTML: tag,
                                href: `/tags/${tag}` // make link url safe
                            }
                        })

                    }
                }
            })
        }
    },

}


module.exports = mappers;