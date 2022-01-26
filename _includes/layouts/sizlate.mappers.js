const mappers = {
    // takes the post array and produces a linked list
    listPosts: (data) => {
        const rev = data.collections.post.reverse()
        return {
            '.recent-posts li': data.collections.post.map((post) => {
                return {
                    selectors: {
                        'a.link': {
                            innerHTML: post.data.title,
                            href: post.url
                        },
                        '.created': post.data.created,
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
        const linksReversed = data.collections.links

        return {
            '.recent-links li': linksReversed.map((link) => {
                const title = link.title
                return {
                    selectors: {
                        'a.link': {
                            innerHTML: title,
                            href: link.url
                        },
                        '.title': title,
                        '.created': link.created,
                        '.tag': link.tags.map((tag) => {
                            return {
                                innerHTML: tag,
                                href: `/tags/${tag}`
                            }
                        })

                    }
                }
            }).reverse().slice(0, 2)
        }
    },

}


module.exports = mappers;