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
        const tagInfo = data.collections.byTag[data.tag]
        const noImgStyle = ``
        const imgStyle = `min-height:15em;background-image: radial-gradient(circle, rgba(.6,.6,.6,.4) 0%, rgba(1, 1, 1,.9) 100%), url(${tagInfo.image});`
        const categoryHeader = { style: tagInfo.image ? imgStyle : noImgStyle };

        const selectors = {
            "title": `${data.title} | Simon McManus`,
            "meta[name=description]": { content: tagInfo.summary },
            ".title": data.title,
            ".category .summary": tagInfo.summary || false,
            "header.category": categoryHeader,
            '.links_holder li': linkList(tagInfo.links),
            '.posts_holder li': postList(tagInfo.posts),

        }

        if (tagInfo.tags) {
            selectors["meta[name=keywords]"] = { content: tagInfo.tags.join(', ') }

        }
        return selectors
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