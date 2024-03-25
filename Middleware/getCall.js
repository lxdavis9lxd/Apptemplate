const axios = require('axios');

async function getWithApiKey(url, apiKey) {
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
}

module.exports = getWithApiKey;