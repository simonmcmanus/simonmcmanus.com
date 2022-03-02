const { formatDistance, format, parse, parseISO } = require('date-fns')
var urlSafe = require("../../../lib/url-safe");

const dateLink = (date) => {
    if (!date) {
        return false
    }
    return {
        // href: '/' + format(date, 'dd-MM-yyyy') + '/index.html',
        //innerHTML: formatDistance(date, new Date(), { addSuffix: true }),
        innerHTML: format(date, 'dd-MM-yyyy'),
    }
}

const tagLink = (tag) => {
    return {
        innerHTML: tag,
        href: `/tags/${urlSafe(tag)}/`
    }
}

const tagList = (tags) => {
    return tags.filter(tag => tag != 'post').map(tagLink)
}

module.exports = { dateLink, tagLink, tagList }