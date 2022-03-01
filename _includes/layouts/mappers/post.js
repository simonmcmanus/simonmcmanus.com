module.exports = (data) => ({
    title: `${data.title} by Simon McManus`,
    "meta[name=keywords]": { content: data.tags.join(', ') }
})