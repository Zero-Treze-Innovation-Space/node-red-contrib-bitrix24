const axios = require("axios")
const qs = require("qs")

function createClient({ portalName, token }) {
    const URL = `https://${portalName}.bitrix24.com/rest/5/${token}/`
    const httpClient = axios.create({ 
        baseURL: URL
    }) 

    function _buildBodyData(id, data = {}) {
        const fieldsData = { fields: data , id }
        const query = qs.stringify(fieldsData, { arrayFormat: "indices" })
        return query
    }

    function call({ method, payload, id, format = "json" }) {
        const query = _buildBodyData(id, payload)
        const path = `${method}.${format}?${query}`
        return httpClient
            .post(path)
            .then(({ data }) => data)
    }

    return {
        call
    }
}

module.exports = createClient