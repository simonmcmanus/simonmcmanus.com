const sizlate = require('sizlate')

const fs = require('fs')
const template = fs.readFileSync('./_includes/layouts/post.html', 'utf8')
const mappers = require('./sizlate.mappers')
const { buildSelectors } = require('./sizlate.11ty')

class SizlatePost {
    data = {
        layout: 'layouts/layout.sizlate.11ty.js'
    }

    render(data) {
        const selectors = buildSelectors(data, {}, mappers)
        return sizlate.render(template, selectors)
    }
}

module.exports = SizlatePost;