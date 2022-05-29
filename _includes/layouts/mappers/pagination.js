const linkList = require('./linkList')
const postList = require('./postList')

module.exports = (data) => {
    const tagInfo = data.collections.byTag[data.tag]
    const noImgStyle = ``
    const imgStyle = `min-height:15em;background-image: radial-gradient(circle, rgba(.6,.6,.6,.4) 0%, rgba(1, 1, 1,.9) 100%), url(${tagInfo.image});`
    const categoryHeader = { style: tagInfo.image ? imgStyle : noImgStyle };

    const selectors = {
        'div#container': {
            style: tagInfo.image ? "top: -10em; position: relative;" : '',
        },
        "title": `${data.title} | Simon McManus`,
        "meta[name=description]": { content: tagInfo.summary || `A collection of posts and links tagged '${data.title}' by Simon McManus` },
        ".title": data.title,
        ".category": tagInfo.summary ? {

            selectors: { '.summary': tagInfo.summary }
        } : false,
        "header.category": categoryHeader || false,
        '.links_holder li': linkList(tagInfo.links),
        '.posts_holder li': postList(tagInfo.posts),
    }

    if (tagInfo.tags) {
        selectors["meta[name=keywords]"] = { content: tagInfo.tags.join(', ') }
    }
    return selectors
}