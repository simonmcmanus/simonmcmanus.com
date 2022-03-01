const mappers = require('./mappers/sizlate.mappers')

const buildSelectors = (data, layoutSelectors) => {

    let mapped = {}
    if (data.mappers) {

        data.mappers.forEach((mapper) => {
            if (mappers[mapper]) {
                const newSelectors = mappers[mapper](data)
                mapped = {...mapped, ...newSelectors }
            }

        })
    }
    data.mappers = []

    return {

        ...layoutSelectors,
        ...data.sizlate,
        ...mapped
    }

}

module.exports = { buildSelectors }