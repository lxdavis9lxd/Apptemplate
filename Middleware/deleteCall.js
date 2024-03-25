const axios = require('axios');

async function deleteWithApiKey(url, apiKey) {
    try {
        const response = await axios.delete(url, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data);
    }
}

module.exports = deleteWithApiKey;