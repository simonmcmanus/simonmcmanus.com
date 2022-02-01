const sizlate = require('sizlate')

const fs = require('fs')
const template = fs.readFileSync('./_includes/layouts/post.html', 'utf8')

const { buildSelectorsM } = require('./sizlate.11ty')

class SizlatePost {
    data = {
        layout: 'layouts/layout.sizlate.11ty.js',
    }

    postSelectors(data) {

        const selectors = {
            '#post': data.content,
            "h4.title": data.title,
        }
        const nextPost = this.getNextCollectionItem(data.collections.post, data.page, 1)
        const previousPost = this.getPreviousCollectionItem(data.collections.post, data.page, 1)

        nextPost ? selectors['.next'] = {
            innerHTML: `Next: ${nextPost.data.title}`,
            href: nextPost.url
        } : false

        previousPost ? selectors['.previous'] = {
            innerHTML: `Previous: ${previousPost.data.title}`,
            href: previousPost.url
        } : false

        return selectors
    }

    render(data) {

        const selectors = this.postSelectors(data)
        return sizlate.render(template, selectors)
    }
}

module.exports = SizlatePost;