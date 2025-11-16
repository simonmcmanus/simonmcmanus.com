import request from 'superagent';

const url = 'https://api.netlify.com/build_hooks/621e8787b0a5891c22c67e9b';
const build = async() => {
    const response = await request.post(url);
    console.log(response.body);
    return new Response.json(response.body, { status: 200 });
}

export default build;