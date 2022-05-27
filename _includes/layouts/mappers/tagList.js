const { dateLink, tagLink } = require('./links')

module.exports = (data) => {
    return {
        '.tags li': data.collections.tagList
            .filter((tag) => tag !== 'post')
            .map((tag) => {

                return {
                    selectors: {
                        a: tagLink(tag)
                    }
                }

            })


    }
}