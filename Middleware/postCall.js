const axios = require('axios');

/**
 * Makes a POST request to a REST API using an API key as the bearer token.
 * @param {string} url - The URL of the API endpoint.
 * @param {object} data - The data to be sent in the request body.
 * @param {string} apiKey - The API key to be used as the bearer token.
 * @returns {Promise} - A promise that resolves to the response data.
 */
async function postWithApiKey(url, data, apiKey) {
    try {
        const response = await axios.post(url, data, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(`Error making POST request: ${error.message}`);
    }
}

module.exports = postWithApiKey;