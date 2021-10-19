const sizlate = require('sizlate')
const CleanCSS = require("clean-css");

const fs = require('fs')

const template = fs.readFileSync('./_includes/layouts/layout.html', 'utf8')
const css = fs.readFileSync('./_includes/layouts/style.css', 'utf8')
const mappers = require('./sizlate.mappers')


class Sizlate {
    data() {
        return {
            style: new CleanCSS({}).minify(css).styles,
            template
        };
    }
    selectors(data) {

        let mapped = {}
        if (data.mappers) {

            data.mappers.forEach((mapper) => {
                if (mappers[mapper]) {
                    const newSelectors = mappers[mapper](data)
                    mapped = {...mapped, ...newSelectors }
                }

            })
        }

        return {
            '#container': data.content,
            style: data.style,
            ...data.sizlate,
            ...mapped
        }
    }

    render(data) {
        const selectors = this.selectors(data)
        return sizlate.render(data.template, selectors)
    }
}

module.exports = Sizlate;