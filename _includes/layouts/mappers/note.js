const { parseISO } = require('date-fns')
const { dateLink, tagLink } = require('./links')

module.exports = (note) => {

  return {
    selectors: {
        'img.note': {src: note.images.medium},      
        'a': {href: note.images.original},
        '.title': `${note.title} - ${note.speaker}`,
        '.created': dateLink(parseISO(note.created)),
        '.tag': note.data.tags.map(tagLink),
    }
  }
}