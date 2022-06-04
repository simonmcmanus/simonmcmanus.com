const sizlate = require('sizlate')
const CleanCSS = require("clean-css");
const fs = require('fs')
const path = require('path')
const { buildSelectors } = require('./sizlate.11ty')

const template = fs.readFileSync('./_includes/layouts/layout.html', 'utf8')
const cssFile = path.join(__dirname, '../../static/css/style.css')
const css = fs.readFileSync(cssFile, 'utf8')
const style = new CleanCSS({}).minify(css).styles;
const meta = require('../../meta.json')

const mappers = require('./mappers/sizlate.mappers')

class Sizlate {
    data = {
        template,
    };

    render(data) {
        const layoutSelectors = {
            html: {
                'data-speclate-url': data.page.url,
                'data-speclate-page': data.page.fileSlug,
            },
            "meta[name='description']": { content: meta.summary },
            "meta[name='og:description']": { content: meta.summary },
            "meta[name='keywords']": { content: meta.keywords },
            'link#cannonical': {
                rel: 'cannonical',
                href: `https://simonmcmanus.com${data.page.url}`
            },

            'h1.title': data.title,
            'title': data.title,
            '#container': data.content,
            style,
        }
        const selectors = buildSelectors(data, layoutSelectors, mappers)
        return sizlate.render(data.template, selectors)
    }
}

module.exports = Sizlate;