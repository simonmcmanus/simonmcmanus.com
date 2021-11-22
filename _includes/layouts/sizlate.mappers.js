const mappers = {
    // takes the post array and produces a linked list
    listPosts: (data) => {
        return {
            '.posts a': data.collections.post.map((post) => {
                return {
                    innerHTML: post.data.title,
                    href: post.url
                }
            }),

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
            '.links a': data.collections.links.map((link) => {
                return {
                    innerHTML: link.title,
                    href: link.url
                }
            })
        }
    },

}


module.exports = mappers;