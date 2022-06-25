const sizlate = require('sizlate')
const CleanCSS = require("clean-css");
const fs = require('fs')
const path = require('path')
const { render } = require('eleventy-sizlate')

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
            "meta[property='og:description']": { content: meta.summary },
            "meta[property='og:title']": { content: data.title },
            "meta[property = 'og:url']": { content: `https://simonmcmanus.com${data.page.url}` },
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
        return render(data, layoutSelectors, mappers)
    }
}

module.exports = Sizlate;