const { dateLink, tagLink } = require('./links')

module.exports = (data) => {
    return {
        '.tags li': data.collections.tagList.map(tagLink)
    }
}