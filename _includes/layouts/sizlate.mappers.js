const mappers = {
    // takes the post array and produces a linked list
    listPosts: (data) => {

        console.log('data', data.collections.links)

        return {
            '.posts a': data.collections.post.map((post) => {
                return {
                    innerHTML: post.data.title,
                    href: post.url
                }
            }),

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
    nextPost: (data) => {

    }
}


module.exports = mappers;