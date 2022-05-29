const { dateLink, tagLink, tagList } = require('./links')


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
                    selectors: {
                        img: {
                            alt: `fav icon for ${post.title}`,
                            src: `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://simonmcmanus.com`
                        },
                    }
                },
                ".tag": tagList(post.tags)
            }
        }
    })
}