const sizlate = require('sizlate')
const CleanCSS = require("clean-css");

const fs = require('fs')
const { buildSelectors } = require('./sizlate.11ty')

const template = fs.readFileSync('./_includes/layouts/layout.html', 'utf8')
const css = fs.readFileSync('./_includes/layouts/style.css', 'utf8')
const mappers = require('./sizlate.mappers')


class Sizlate {
    data = {
        template
    };

    render(data) {
        const layoutSelectors = {
            '#container': data.content,
            style: new CleanCSS({}).minify(css).styles,
        }
        const selectors = buildSelectors(data, layoutSelectors, mappers)
        return sizlate.render(data.template, selectors)
    }
}

module.exports = Sizlate;