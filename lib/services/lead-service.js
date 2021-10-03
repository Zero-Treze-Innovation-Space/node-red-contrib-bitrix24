function createLeadService({ client }) {

    function add({ payload }) {
        const method = "crm.lead.add"
        return client.call({ method, payload })
    }

    function list({ query }) {
        const method = "crm.lead.list"
        return client.call({ method, query })
    }

    return {
        add,
        list
    }
}

module.exports = createLeadService