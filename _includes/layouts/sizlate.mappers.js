const mappers = {
    // takes the post array and produces a linked list
    listPosts: (data) => {
        return {
            '.recent-posts li': data.collections.post.map((post) => {
                return {
                    selectors: {
                        a: {
                            innerHTML: post.data.title,
                            href: post.url
                        }
                    }
                }
            }).slice(0, 3),

        }
    },
    pagination: (data) => {
        return {
            '.posts a': data.collections[data.tag].map((post) => {
                return {
                    innerHTML: post.data.title,
                    href: post.url
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
            '.recent-links li': data.collections.links.map((link) => {
                return {
                    selectors: {
                        a: {
                            innerHTML: link.title,
                            href: link.url

                        }

                    }
                }
            }).reverse().slice(0, 30)
        }
    },

}


module.exports = mappers;