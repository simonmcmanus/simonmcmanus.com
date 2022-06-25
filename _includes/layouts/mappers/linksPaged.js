const { parseISO } = require('date-fns')
const { dateLink, tagLink } = require('./links')
const link = require('./link')

module.exports = (data) => ({
    '.recent-links article': data.pagination.items.map(link),
    '.next': data.pagination.hrefs.length - 1 > data.pagination.pageNumber ? {
        href: data.pagination.nextPageHref
    } : false,
    '.previous': data.pagination.pageNumber > 0 ? {
        href: data.pagination.previousPageHref
    } : false
})