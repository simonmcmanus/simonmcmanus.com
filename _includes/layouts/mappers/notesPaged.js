const { parseISO } = require('date-fns')
const { dateLink, tagLink } = require('./links')
const note = require('./note')

module.exports = (data) => {
    return {
    '.recent-notes article': data.pagination.items.map(note),
    '.next': data.pagination.hrefs.length - 1 > data.pagination.pageNumber ? {
        selectors: { a: { href: data.pagination.nextPageHref } }
    } : false,
    '.previous': data.pagination.pageNumber > 0 ? {
        selectors: { a: { href: data.pagination.previousPageHref } }
    } : false
}
}