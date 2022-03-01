const _ = require('lodash');
const extractUniqueTags = (links) => {

        const tags = links.map(link => link.tags)

        const uniqueTags = tags.reduce((accumulator, linksTags) => {
            var prepped = linksTags.split(',')
            return accumulator.concat(prepped);

        }, [])
        return uniqueTags.filter((tag) => tag !== '')
    }
    //extractUniqueTags([{ tags: 'a,b,c' }])

const searchTags = (tags, searches) => {

        tags = tags.map((tag) => tag.trim())
        searches = searches.map((search) => search.trim())

        const matches = _.filter(tags, (tag) => {
            return searches.some((search) => {
                return tag && tag.indexOf(search) > -1
            })
        })
        searches.forEach((search) => {
            matches.unshift(search)
        })


        return _.uniq(matches)

    }
    //console.log('search', searchTags(['a', 'b'], ['a', 'd']))
module.exports = { extractUniqueTags, searchTags }