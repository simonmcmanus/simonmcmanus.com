const pagination = require('./pagination')
const post = require('./post')
const tagList = require('./tagList')
const recentPosts = require('./recentPosts')
const recentLinks = require('./recentLinks')

const mappers = {
    post,
    pagination,
    tagList,
    recentPosts,
    recentLinks,
}


module.exports = mappers