const axios = require('axios');

/**
 * Makes a PATCH request to the specified URL with the provided data and API key as the bearer token.
 * @param {string} url - The URL to make the PATCH request to.
 * @param {object} data - The data to send in the PATCH request.
 * @param {string} apiKey - The API key to use as the bearer token.
 * @returns {Promise} - A promise that resolves with the response data or rejects with an error.
 */
async function patchWithApiKey(url, data, apiKey) {
    try {
        const response = await axios.patch(url, data, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(`Failed to make PATCH request: ${error.message}`);
    }
}

module.exports = patchWithApiKey;