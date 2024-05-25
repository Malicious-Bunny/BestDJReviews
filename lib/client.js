const contentful = require('contentful');

const client = contentful.createClient({
  space: 'yqf5x6omucvn',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'u5YLhoRiw6rnI_Qt0FMsHLfIcTnpxBQAD3yPSN9M72s'
})

export default client;