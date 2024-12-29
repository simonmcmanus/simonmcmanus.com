const request = require('superagent');


const url = 'https://api.netlify.com/build_hooks/621e8787b0a5891c22c67e9b'
const build = async() => {

    //return await
    const response = await request.post(url)
    console.log(response)

}


module.exports = build