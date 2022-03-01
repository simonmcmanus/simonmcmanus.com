module.exports = (posts) => {

    if (posts.length === 0) {
        return false
    }
    return posts.map((post) => {
        return {
            selectors: {
                "h5 span.title": post.title,
                'a.link': {
                    href: post.url,
                }
            }
        }
    })
}