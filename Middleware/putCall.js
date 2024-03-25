const axios = require('axios');

/**
 * Makes a PUT request to the specified URL with the provided data and API key as the bearer token.
 * @param {string} url - The URL to make the PUT request to.
 * @param {object} data - The data to send in the request body.
 * @param {string} apiKey - The API key to use as the bearer token.
 * @returns {Promise} - A promise that resolves to the response data.
 */
async function putWithApiKey(url, data, apiKey) {
    try {
        const response = await axios.put(url, data, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(`PUT request failed: ${error.message}`);
    }
}

module.exports = putWithApiKey;