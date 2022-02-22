const { parseISO } = require('date-fns')
const { dateLink, tagLink } = require('../../lib/links')

const linksList = () => {
    return [false]

}
const postList = (posts) => {

    if (posts.length === 0) {
        return false
    }
    return posts.map((post) => {
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
    })
}

const linkList = (links) => {
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
                        // selectors: {
                        //     '.tag': [false]

                    // }

                }
            }
        }
    })
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
                        '.tag': post.data.tags.filter(tag => tag != 'post').map(tagLink)

                    }
                }
            }),

        }
    },
    pagination: (data) => {
        return {
            ".title": data.title,
            '.links_holder li': linkList(data.collections.byTag[data.tag].links),
            '.posts_holder li': postList(data.collections.byTag[data.tag].posts),

        }
    },
    tagList: (data) => {
        return {
            '.tags li': data.collections.tagList.map(tagLink)
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
                        '.tag': link.data.tags.map(tagLink)

                    }
                }
            })
        }
    },

}


module.exports = mappers