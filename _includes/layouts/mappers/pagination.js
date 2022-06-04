const linkList = require('./linkList')
const postList = require('./postList')

module.exports = (data) => {
    const tagInfo = data.collections.byTag[data.tag]
    const noImgStyle = ``
    const imgStyle = `background-position:${tagInfo.imagePosition || 'center'};
        background-size: cover;
        min-height:15em;
        background-image: radial-gradient(circle, rgba(.6,.6,.6,.4) 0%, rgba(1, 1, 1,.9) 100%), url(${tagInfo.image});`
    const categoryHeader = { style: tagInfo.image ? imgStyle : noImgStyle };

    const metaDescribe = { content: tagInfo.summary || `A collection of posts and links tagged '${data.title}' by Simon McManus` };
    const selectors = {
        'div#container': {
            style: tagInfo.image ? "top: -10em; position: relative;" : '',
        },
        "title": `${data.title} | Simon McManus`,
        "meta[name=description]": metaDescribe,
        "meta[property='og:description']": metaDescribe,
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