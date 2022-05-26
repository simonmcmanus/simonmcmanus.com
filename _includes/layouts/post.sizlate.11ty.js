const sizlate = require('sizlate')

const fs = require('fs')
const template = fs.readFileSync('./_includes/layouts/post.html', 'utf8')

class SizlatePost {
    data = {
        layout: 'layouts/layout.sizlate.11ty.js',
        style: 'h1{color: red; !important}'
    }

    postSelectors(data) {

        const selectors = {
            '#post': data.content,
            '.title': data.title,
        }
        const nextPost = this.getNextCollectionItem(data.collections.post, data.page, 1)
        const previousPost = this.getPreviousCollectionItem(data.collections.post, data.page, 1)

        selectors['.next'] = nextPost ? {

            href: nextPost.url,
            selectors: {
                '.title': nextPost.data.title
            }
        } : false

        selectors['.previous'] = previousPost ? {
            selectors: {
                '.title': previousPost.data.title,
            },
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