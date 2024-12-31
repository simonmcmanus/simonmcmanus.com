const request = require('superagent');

const siteId = '8d67539e-95ea-4f87-9d6e-c2a217927582';
const triggerBuildUrl = `https://api.netlify.com/api/v1/sites/${siteId}/builds`;

const checkDeployState = async(siteId, deployId) => {
    const getBuildUrl = `https://api.netlify.com/api/v1/sites/${siteId}/deploys/${deployId}`
    const response = await request.get(getBuildUrl).set('Authorization', 'Bearer nfp_QVXNu6ZSDGKsrzSQPTwRoTQtE1LQJEhR0520');
    return response.body.state;
}

function timer(ms) { return new Promise(res => setTimeout(res, ms)); }

const build = async() => {

    const response = await request.post(triggerBuildUrl).set('Authorization', 'Bearer nfp_QVXNu6ZSDGKsrzSQPTwRoTQtE1LQJEhR0520');
    const deployId = response.body.deploy_id;
    console.log('deploy id', deployId)

    let buildState = await checkDeployState(siteId, deployId)
    let timeout = 3000;

    while (buildState != 'ready') {

        timeout = timeout + 10000;
        await timer(timeout)
        console.log('timer complete', timeout)
        buildState = await checkDeployState(siteId, deployId)
        console.log('buildState', buildState)

    }

    console.log('finish')
}

module.exports = build