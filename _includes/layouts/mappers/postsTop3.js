const { dateLink, tagLink } = require('./links')
const posts = require('./posts')
module.exports = (data) => {
    const numberToShow = data.showRecent || 3
    return {
        '.recent-posts li': data.collections.post.slice(-numberToShow).reverse().map(posts)
    }
}