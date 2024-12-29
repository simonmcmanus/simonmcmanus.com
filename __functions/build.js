const request = require('superagent');


const url = 'https://api.netlify.com/build_hooks/621e8787b0a5891c22c67e9b'
const build = async() => {

    //return await
    const response = await request.post(url)

    // /api/v1/sites/:site_id/deploys/:deploy_id 

    console.log(response.body)

}


module.exports = build