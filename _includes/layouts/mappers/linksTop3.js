const { parseISO } = require('date-fns')
const { dateLink, tagLink } = require('./links')
const link = require('./link')

module.exports = (data) => {
    const numberToShow = data.showRecent || 3
    return {
        '.recent-links article': data.collections.links.reverse().slice(-numberToShow).reverse().map(link)
    }
}