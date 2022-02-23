const request = require('superagent');


const url = 'https://api.netlify.com/build_hooks/58dfcfd171e20a219a52e5a1'
const build = async() => {

    return await
    request.post(url)

}


module.exports = build