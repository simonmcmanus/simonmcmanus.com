const { parseISO } = require('date-fns')
const { dateLink, tagLink } = require('../../../lib/links')

const pagination = require('./pagination')



const mappers = {
    post: (data) => ({
        title: `${data.title} by Simon McManus`,
        "meta[name=keywords]": { content: data.tags.join(', ') }
    }),
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
    pagination,
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