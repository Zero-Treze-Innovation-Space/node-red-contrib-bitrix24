const axios = require("axios")

function createClient({ portalName, token }) {
    const URL = `https://${portalName}.bitrix24.com/rest/5/${token}/`
    const httpClient = axios.create({ baseURL: URL }) 

    function call({ method, payload, query, format = "json" }) {
        const path = `${method}.${format}`

        return httpClient
            .post(path, {
                body: payload,
                query
            })
            .then(({ data }) => data)
    }

    return {
        call
    }
}

module.exports = createClient