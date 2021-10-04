const axios = require("axios")
const FormData = require("form-data")

function createClient({ portalName, token }) {
    const URL = `https://${portalName}.bitrix24.com/rest/5/${token}/`
    const httpClient = axios.create({ 
        baseURL: URL,
        headers: {
            "Content-type": "multipart/form-data"
        }
    }) 

    function _buildBodyData(data = {}) {
        const formData = new FormData()
        const keys = Object.keys(data)
        keys.forEach(key => {
            let field = `FIELDS[${key}]`.toUpperCase()
            formData.append(field, data[key])
        })
        return formData
    }

    function call({ method, payload, query, format = "json" }) {
        const path = `${method}.${format}`
        const data = _buildBodyData(payload)
        return httpClient
            .post(path, data, {
                headers: data.getHeaders()
            })
            .then(({ data }) => data)
    }

    return {
        call
    }
}

module.exports = createClient