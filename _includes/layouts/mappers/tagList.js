module.exports = (data) => {
    return {
        '.tags li': data.collections.tagList.map(tagLink)
    }
}