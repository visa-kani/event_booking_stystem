const config = {
    develop: {
        webSite_url: 'http://localhost:3000',
        api: 'https://fakestoreapi.in/api/',
    }
}

const env = 'develop'

const hostConfig = {
    webSite_url: config[env].webSite_url,
    api: config[env].api
}

export {
    hostConfig,
    env,
    config
}