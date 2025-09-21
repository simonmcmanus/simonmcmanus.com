const { parseISO } = require('date-fns')
const { dateLink, tagLink } = require('./links')

module.exports = (note) => {

  return {
    selectors: {
        'img.note': {src: note.image},      
        'a': {href: note.image},
        '.title': `${note.title} - ${note.speaker}`,
        '.created': dateLink(parseISO(note.created)),
        '.tag': note.data.tags.map(tagLink),
    }
  }
}