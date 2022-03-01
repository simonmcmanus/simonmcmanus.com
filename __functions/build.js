const request = require('superagent');


const url = 'https://api.netlify.com/build_hooks/621e8787b0a5891c22c67e9b'
const build = async() => {

    return await
    request.post(url)

}


module.exports = build