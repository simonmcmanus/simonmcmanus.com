const { dateLink, tagLink } = require('./links')
const posts = require('./posts')
module.exports = (data) => {
    return {
        '.recent-posts li': data.pagination.items.map(posts),
        '.next': data.pagination.hrefs.length - 1 > data.pagination.pageNumber ? {
            href: data.pagination.nextPageHref
        } : false,
        '.previous': data.pagination.pageNumber > 0 ? {
            href: data.pagination.previousPageHref
        } : false
    }
}